import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory rate limiting cache
const ipCache = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5; // Allow max 5 submissions per hour per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  
  // Prune expired entries to prevent memory leaks (10% chance)
  if (Math.random() < 0.1) {
    for (const [key, value] of ipCache.entries()) {
      if (now > value.resetTime) {
        ipCache.delete(key);
      }
    }
  }

  const record = ipCache.get(ip);

  if (!record) {
    ipCache.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + RATE_LIMIT_WINDOW;
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ── Gmail Transporter ────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL!;

const serviceLabels: Record<string, string> = {
  "custom-software": "Custom Software Development",
  "saas-web-dev": "SaaS & Web Product Engineering",
  "mobile-apps": "Mobile Application Engineering",
  "cloud-devops": "Cloud & DevSecOps Solutions",
  "ai-systems": "AI Integration & Cognitive Systems",
  "managed-it": "Maintenance & Managed IT Services",
};

function getBudgetText(val: number): string {
  if (val <= 3000) return "Below $3,000";
  if (val >= 45000) return "$45,000+ (Enterprise Custom)";
  return `$${val.toLocaleString()} – $${(val + 5000).toLocaleString()}`;
}

function getTimelineText(val: number): string {
  if (val <= 5000) return "2 – 3 Weeks (MVP Fast-Track)";
  if (val <= 15000) return "4 – 6 Weeks (Standard Sprint)";
  if (val <= 30000) return "8 – 12 Weeks (Scale Phase)";
  if (val <= 45000) return "12 – 16 Weeks (Enterprise Integration)";
  return "16+ Weeks (Dedicated Support SLA)";
}

// ── Email 1: Owner Notification ──────────────────────────────────────────────
function buildOwnerEmail(data: {
  name: string; email: string; phone: string;
  organization: string; service: string; budget: number;
  message: string; submittedAt: string;
}): string {
  return `
<!DOCTYPE html><html>
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0f0f14;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f14;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#1a1a2e;border-radius:16px;border:1px solid rgba(255,255,255,0.07);overflow:hidden;max-width:600px;width:100%;">

      <tr><td style="background:linear-gradient(135deg,#4f46e5,#06b6d4);padding:32px 40px;">
        <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800;">🔔 New Inquiry Received</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">Nexera Services — Contact Form</p>
      </td></tr>

      <tr><td style="padding:32px 40px;">
        <h2 style="margin:0 0 16px;color:#e2e8f0;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,0.07);padding-bottom:10px;">Contact Details</h2>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          ${[
            ["👤 Name", data.name],
            ["📧 Email", data.email],
            ["📞 Phone", data.phone || "Not provided"],
            ["🏢 Organization", data.organization || "Not provided"],
          ].map(([label, value]) => `
          <tr><td style="padding:9px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
            <span style="color:#64748b;font-size:12px;font-weight:600;">${label}</span>
            <div style="color:#e2e8f0;font-size:14px;font-weight:600;margin-top:2px;">${value}</div>
          </td></tr>`).join("")}
        </table>

        <h2 style="margin:0 0 16px;color:#e2e8f0;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,0.07);padding-bottom:10px;">Project Details</h2>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr>
            <td width="50%" style="padding:0 8px 12px 0;vertical-align:top;">
              <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:12px;padding:14px;">
                <span style="color:#818cf8;font-size:11px;font-weight:700;text-transform:uppercase;">Service</span>
                <div style="color:#e2e8f0;font-size:14px;font-weight:700;margin-top:5px;">${serviceLabels[data.service] || data.service}</div>
              </div>
            </td>
            <td width="50%" style="padding:0 0 12px 8px;vertical-align:top;">
              <div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.2);border-radius:12px;padding:14px;">
                <span style="color:#22d3ee;font-size:11px;font-weight:700;text-transform:uppercase;">Budget</span>
                <div style="color:#e2e8f0;font-size:14px;font-weight:700;margin-top:5px;">${getBudgetText(data.budget)}</div>
              </div>
            </td>
          </tr>
          <tr><td colspan="2">
            <div style="background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.2);border-radius:12px;padding:14px;">
              <span style="color:#c084fc;font-size:11px;font-weight:700;text-transform:uppercase;">⏱ Timeline</span>
              <div style="color:#e2e8f0;font-size:14px;font-weight:700;margin-top:5px;">${getTimelineText(data.budget)}</div>
            </div>
          </td></tr>
        </table>

        <h2 style="margin:0 0 10px;color:#e2e8f0;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">💬 Message</h2>
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px;color:#cbd5e1;font-size:14px;line-height:1.7;margin-bottom:24px;">${data.message.replace(/\n/g, "<br/>")}</div>

        <div style="text-align:center;">
          <a href="mailto:${data.email}?subject=Re: Your Nexera Services Inquiry"
             style="display:inline-block;background:linear-gradient(135deg,#4f46e5,#06b6d4);color:#fff;text-decoration:none;padding:14px 32px;border-radius:10px;font-weight:700;font-size:14px;">
            ✉️ Reply to ${data.name.split(" ")[0]}
          </a>
        </div>
      </td></tr>

      <tr><td style="background:rgba(0,0,0,0.2);padding:18px 40px;border-top:1px solid rgba(255,255,255,0.05);">
        <p style="margin:0;color:#475569;font-size:11px;text-align:center;">Submitted on ${data.submittedAt} · Nexera Services</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

// ── Email 2: User Confirmation ────────────────────────────────────────────────
function buildConfirmationEmail(name: string): string {
  const firstName = name.split(" ")[0];
  return `
<!DOCTYPE html><html>
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;max-width:560px;width:100%;">

      <tr><td style="background:linear-gradient(135deg,#4f46e5,#06b6d4);padding:40px;text-align:center;">
        <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;">We've Got Your Message!</h1>
        <p style="margin:10px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Thanks for reaching out to Nexera Services</p>
      </td></tr>

      <tr><td style="padding:40px;">
        <p style="margin:0 0 20px;color:#1e293b;font-size:16px;font-weight:600;">Hi ${firstName} 👋</p>
        <p style="margin:0 0 24px;color:#475569;font-size:14px;line-height:1.8;">
          Thank you for contacting <strong style="color:#1e293b;">Nexera Services</strong>. We have successfully received your inquiry and our team is already reviewing it.
        </p>

        <div style="background:linear-gradient(135deg,rgba(79,70,229,0.05),rgba(6,182,212,0.05));border:1px solid rgba(79,70,229,0.15);border-radius:14px;padding:24px;text-align:center;margin-bottom:28px;">
          <div style="font-size:36px;margin-bottom:10px;">⏱️</div>
          <h2 style="margin:0 0 8px;color:#1e293b;font-size:18px;font-weight:800;">We'll reply within 24 hours</h2>
          <p style="margin:0;color:#64748b;font-size:13px;">A senior engineer will review your requirements and send you a custom solution blueprint.</p>
        </div>

        <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.6;border-top:1px solid #f1f5f9;padding-top:20px;">
          For urgent queries, reply to this email or reach us at
          <a href="mailto:nexeraser@gmail.com" style="color:#4f46e5;text-decoration:none;font-weight:600;">nexeraser@gmail.com</a>
        </p>
      </td></tr>

      <tr><td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;text-align:center;">
        <p style="margin:0;color:#94a3b8;font-size:11px;">© 2026 Nexera Services · Building the Future Through Technology</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

// ── API Handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. CSRF Protection: Prevent cross-origin form submissions
    const origin = req.headers.get("origin");
    const host = req.headers.get("host");
    if (origin && host) {
      try {
        const originUrl = new URL(origin);
        if (originUrl.host !== host) {
          return NextResponse.json(
            { error: "Unauthorized cross-origin request origin." },
            { status: 403 }
          );
        }
      } catch {
        return NextResponse.json(
          { error: "Invalid request origin." },
          { status: 403 }
        );
      }
    }

    // 2. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many inquiries. Please try again in an hour." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, organization, service, budget, message } = body;

    // 2. Presence check
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 3. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 4. Length constraints
    if (name.length > 100) {
      return NextResponse.json({ error: "Name is too long." }, { status: 400 });
    }
    if (email.length > 150) {
      return NextResponse.json({ error: "Email is too long." }, { status: 400 });
    }
    if (phone && phone.length > 30) {
      return NextResponse.json({ error: "Phone number is too long." }, { status: 400 });
    }
    if (organization && organization.length > 100) {
      return NextResponse.json({ error: "Organization name is too long." }, { status: 400 });
    }
    if (message.length > 3000) {
      return NextResponse.json({ error: "Message is too long (max 3000 characters)." }, { status: 400 });
    }

    // 5. Escape inputs to prevent HTML/XSS injection in mail clients
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedPhone = escapeHtml(phone || "");
    const escapedOrg = escapeHtml(organization || "");
    const escapedMessage = escapeHtml(message);

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // 1. Notify YOU (owner)
    await transporter.sendMail({
      from: `"Nexera Contact Form" <${process.env.GMAIL_USER}>`,
      to: NOTIFICATION_EMAIL,
      replyTo: escapedEmail,
      subject: `🔔 New Inquiry from ${escapedName} — ${serviceLabels[service] || service}`,
      html: buildOwnerEmail({
        name: escapedName,
        email: escapedEmail,
        phone: escapedPhone,
        organization: escapedOrg,
        service,
        budget,
        message: escapedMessage,
        submittedAt
      }),
    });

    // 2. Confirmation to the person who contacted
    await transporter.sendMail({
      from: `"Nexera Services" <${process.env.GMAIL_USER}>`,
      to: escapedEmail,
      replyTo: NOTIFICATION_EMAIL,
      subject: `✅ We received your inquiry, ${escapedName.split(" ")[0]}!`,
      html: buildConfirmationEmail(escapedName),
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("[Contact API Error]", error?.message || error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
