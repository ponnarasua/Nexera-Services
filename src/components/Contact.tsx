"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Calendar, 
  Check, 
  Send, 
  Sparkles,
  ChevronDown,
  Globe,
  Smartphone,
  Terminal,
  Cloud,
  Bot,
  Settings
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const serviceOptions = [
  { value: "custom-software", label: "Custom Software Development", icon: Terminal },
  { value: "saas-web-dev", label: "SaaS & Web Product Engineering", icon: Globe },
  { value: "mobile-apps", label: "Mobile Application Engineering", icon: Smartphone },
  { value: "cloud-devops", label: "Cloud & DevSecOps Solutions", icon: Cloud },
  { value: "ai-systems", label: "AI Integration & Cognitive Systems", icon: Bot },
  { value: "managed-it", label: "Maintenance & Managed IT Services", icon: Settings },
];

// --- 3D Particle Orb Canvas Component ---
function OrbCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = 400;
    let height = canvas.height = 400;

    const particles: { x: number; y: number; z: number; px: number; py: number }[] = [];
    const particleCount = 180;
    const sphereRadius = 110;
    const perspective = 300;

    // Create particles distributed on sphere surface
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const z = sphereRadius * Math.cos(phi);

      particles.push({ x, y, z, px: 0, py: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.05;
      mouseY = (e.clientY - rect.top - height / 2) * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const angleX = 0.005;
    const angleY = 0.008;
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse tilt
      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      const cosX = Math.cos(angleX + targetY * 0.002);
      const sinX = Math.sin(angleX + targetY * 0.002);
      const cosY = Math.cos(angleY + targetX * 0.002);
      const sinY = Math.sin(angleY + targetX * 0.002);

      // Center coords
      const cx = width / 2;
      const cy = height / 2;

      // Project & rotate particles
      particles.forEach((p) => {
        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y2;
        p.z = z2;

        // Perspective Projection
        const scale = perspective / (perspective + z2);
        p.px = cx + x1 * scale;
        p.py = cy + y2 * scale;

        // Color & alpha based on Z-depth (fade back particles)
        const alpha = (z2 + sphereRadius) / (sphereRadius * 2); // 0 to 1
        const size = Math.max(0.5, scale * 1.8);

        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${0.2 + alpha * 0.7})`; // cyan tinted glow
        ctx.fill();
      });

      // Draw lines between neighboring particles
      ctx.strokeStyle = "rgba(99, 102, 241, 0.08)"; // indigo web lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].px - particles[j].px;
          const dy = particles[i].py - particles[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Draw line if projected distance is short
          if (dist < 40) {
            ctx.beginPath();
            ctx.moveTo(particles[i].px, particles[i].py);
            ctx.lineTo(particles[j].px, particles[j].py);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Handle Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full max-w-[400px] max-h-[400px]" />;
}

export default function Contact() {
  const { theme } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "custom-software",
    budget: 15000,
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        organization: "",
        service: "custom-software",
        budget: 15000,
        message: ""
      });
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const getBudgetText = (val: number) => {
    if (val <= 3000) return "Below $3,000";
    if (val >= 45000) return "$45,000+ (Enterprise Custom)";
    return `$${val.toLocaleString()} - $${(val + 5000).toLocaleString()}`;
  };

  const getTimelineText = (val: number) => {
    if (val <= 5000) return "2 - 3 Weeks (MVP Fast-Track)";
    if (val <= 15000) return "4 - 6 Weeks (Standard Sprint)";
    if (val <= 30000) return "8 - 12 Weeks (Scale Phase)";
    if (val <= 45000) return "12 - 16 Weeks (Enterprise Integration)";
    return "16+ Weeks (Dedicated Support SLA)";
  };

  const getScopeText = (val: number) => {
    if (val <= 5000) return "High-fidelity clickable prototype, core Database schema, and custom landing layout.";
    if (val <= 15000) return "Fully modular dashboard panel, user authorization roles, standard payments sync, and secure APIs.";
    if (val <= 30000) return "Custom CRM/ERP hooks, hardware tracking sync, and a scalable AWS/GCP DevOps cluster.";
    if (val <= 45000) return "Deep messaging queues, serverless microservices architecture, and complete penetration-tested audit reports.";
    return "Full dedicated engineering squad allocation, 24/7 SLA standby support, and custom AI model training.";
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accent-secondary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card-bg/50 text-xs font-bold uppercase tracking-wider text-accent-primary dark:text-accent-secondary">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Accelerate <br />
            <span className="text-gradient">Your Modernization?</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
            Fill out the request form below or schedule a direct Google Meet. We will review
            your parameters and return a solution blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Contact Form Grid */}
          <div className="lg:col-span-7 rounded-3xl glass-panel p-8 border-card-border shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                   key="contact-form"
                   onSubmit={handleSubmit} 
                   className="space-y-6"
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold uppercase text-text-muted">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-card-border bg-foreground/3 dark:bg-white/3 text-xs sm:text-sm font-semibold text-foreground focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold uppercase text-text-muted">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="hello@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-card-border bg-foreground/3 dark:bg-white/3 text-xs sm:text-sm font-semibold text-foreground focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold uppercase text-text-muted">Phone Number</label>
                      <input 
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-card-border bg-foreground/3 dark:bg-white/3 text-xs sm:text-sm font-semibold text-foreground focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                      />
                    </div>
                    {/* Organization */}
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold uppercase text-text-muted">Organization</label>
                      <input 
                        type="text"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        placeholder="Academy / Startup Name"
                        className="w-full px-4 py-3 rounded-xl border border-card-border bg-foreground/3 dark:bg-white/3 text-xs sm:text-sm font-semibold text-foreground focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div className="space-y-2 relative" ref={dropdownRef}>
                    <label className="text-xs font-extrabold uppercase text-text-muted">Service Required</label>
                    
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold text-foreground flex items-center justify-between focus:outline-none focus:ring-1 select-none cursor-pointer transition-all duration-200 ${
                        theme === "dark"
                          ? "border-card-border bg-white/5 hover:border-accent-secondary/50 focus:border-accent-secondary focus:ring-accent-secondary"
                          : "border-card-border bg-foreground/5 hover:border-accent-primary/50 focus:border-accent-primary focus:ring-accent-primary"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {(() => {
                          const currentOpt = serviceOptions.find(opt => opt.value === form.service);
                          if (currentOpt) {
                            const Icon = currentOpt.icon;
                            return (
                              <>
                                <Icon className="w-4 h-4 text-accent-secondary" />
                                <span>{currentOpt.label}</span>
                              </>
                            );
                          }
                          return <span>Select a service</span>;
                        })()}
                      </div>
                      <ChevronDown className={`w-4 h-4 text-text-muted transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className={`absolute left-0 right-0 mt-1.5 z-30 rounded-2xl border shadow-2xl p-1.5 max-h-[300px] overflow-y-auto no-scrollbar ${
                            theme === "dark"
                              ? "bg-[#151622] border-white/10 shadow-[0_12px_40px_-4px_rgba(99,102,241,0.3)]"
                              : "bg-white border-card-border shadow-2xl"
                          }`}
                        >
                          {serviceOptions.map((opt) => {
                            const Icon = opt.icon;
                            const isSelected = form.service === opt.value;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => {
                                  setForm({ ...form, service: opt.value });
                                  setDropdownOpen(false);
                                }}
                                className={`w-full px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium flex items-center justify-between transition-colors duration-200 select-none cursor-pointer ${
                                  isSelected
                                    ? (theme === "dark" 
                                        ? "bg-accent-secondary/15 text-accent-secondary font-bold" 
                                        : "bg-accent-primary/10 text-accent-primary font-bold")
                                    : (theme === "dark"
                                        ? "text-foreground hover:bg-white/8"
                                        : "text-foreground hover:bg-foreground/5")
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <Icon className={`w-4 h-4 ${isSelected ? "text-accent-secondary" : "text-text-muted"}`} />
                                  <span>{opt.label}</span>
                                </div>
                                {isSelected && <Check className="w-4 h-4 text-accent-secondary shrink-0" />}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Gamified Estimator Card */}
                  <div className="space-y-4 p-5 rounded-2xl border border-card-border bg-foreground/2 dark:bg-white/2">
                    <div className="flex justify-between items-center text-xs font-extrabold uppercase">
                      <span className="text-text-muted">Est. Budget Range</span>
                      <span className="text-accent-primary dark:text-accent-secondary font-mono text-sm">{getBudgetText(form.budget)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="2000" 
                      max="50000" 
                      step="2000"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: parseInt(e.target.value) })}
                      className="w-full accent-accent-primary dark:accent-accent-secondary h-1.5 bg-card-border rounded-lg cursor-pointer"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-card-border/50 pt-4 text-xs">
                      <div className="space-y-1">
                        <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block">Estimated Timeline</span>
                        <span className="font-extrabold text-foreground">{getTimelineText(form.budget)}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block">Project Scope</span>
                        <span className="font-semibold text-text-muted text-[11px] leading-relaxed block">{getScopeText(form.budget)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase text-text-muted">Message Details</label>
                    <textarea 
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Outline details on features, integrations, timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-foreground/3 dark:bg-white/3 text-xs sm:text-sm font-semibold text-foreground focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-xs font-semibold text-red-400">
                      ⚠️ {error}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-accent-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 text-sm"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Inquiry
                        </>
                      )}
                    </button>

                    <a
                      href="https://meet.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-4 px-6 border border-card-border glass-panel hover:bg-foreground/5 dark:hover:bg-white/5 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 text-sm whitespace-nowrap"
                    >
                      <Calendar className="w-4 h-4 text-accent-secondary" />
                      Schedule Google Meet
                    </a>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <Check className="w-8 h-8 animate-[bounce_1s_infinite]" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">Inquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-text-muted max-w-sm leading-relaxed">
                    Thank you for reaching out. A senior software engineer from Nexera Services
                    will review your parameters and email you back with a custom blueprint within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-card-border rounded-full hover:bg-foreground/5 dark:hover:bg-white/5 text-xs font-bold transition-all duration-200"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right: 3D Holographic Canvas Orb details */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-6 relative h-[380px] lg:h-auto">
            {/* Ambient glows behind orb */}
            <div className="absolute w-64 h-64 rounded-full bg-accent-secondary/5 blur-[80px] pointer-events-none" />

            <div className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center">
              <OrbCanvas />
            </div>

            <div className="max-w-xs space-y-2">
              <h3 className="font-extrabold text-sm uppercase tracking-widest text-text-muted flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-secondary animate-pulse" />
                Network Node Active
              </h3>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Connect and launch. Hover over the particle web to perturb the 3D orbit
                and sync your coordinates with our core cluster.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
