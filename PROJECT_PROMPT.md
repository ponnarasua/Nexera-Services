# Master Project Specification & Generation Prompt: Nexera Services

Use this master prompt to regenerate, scale, or document the exact architecture, aesthetics, security protocols, and page layout of **Nexera Services** in Next.js.

---

## Project Overview & Design Philosophy

Build a premium, high-converting enterprise-grade agency landing website named **Nexera Services**. The site must deliver an instant "wow" factor through modern dark-mode-first aesthetics, glassmorphic UI cards, smooth scroll interactions, and interactive 3D elements.

### 🎨 Visual & Aesthetic Guidelines
1. **Color Palette**:
   * **Dark Mode (Default)**: Deep obsidian space background (`#08080c`), glowing ice cyan (`#22d3ee`), electric indigo (`#818cf8`), glowing violet (`#c084fc`), and silver-slate text (`#94a3b8`).
   * **Light Mode (Fluid Transition)**: Soft off-white slate (`#f8fafc`), deep charcoal slate text (`#0f172a`), deep indigo (`#4f46e5`), sky blue (`#0284c7`), and slate-gray text (`#475569`).
2. **Glassmorphism**: Use highly polished semi-translucent cards (`backdrop-blur-md bg-white/5` or `bg-black/40`) with thin border reflections (`border-white/10` or `border-black/5`).
3. **Interactive Cursor**: Include a custom fluid cursor follower that scales and alters opacity when hovering over interactive components or buttons.
4. **Layout Continuity**: Apply a consistent layout language where details sections (Services, Solutions, and Process Timeline) use a **premium split-screen viewport** on desktop and **fluid inline accordions** on mobile.

---

## Tech Stack Requirements

* **Core Framework**: Next.js (App Router, strict TypeScript)
* **Styling**: Tailwind CSS (v4) & PostCSS
* **Animation & Graphics**: Framer Motion, GSAP, and HTML5 Canvas (WebGL/Three.js optional for 3D orb rendering)
* **Backend Utilities**: Nodemailer (Gmail App Passwords transport)
* **Verification Standards**: strict ESLint, zero hydration warnings, clean type-safety.

---

## Component-by-Component Specifications

### 1. Global Navigation (Navbar)
* **Layout**: Frosted glass floating navigation bar, positioned statically on load and transforming into a sticky compact panel upon scrolling.
* **Theme Toggle**: Custom theme dropdown menu selector (supporting System default, Light, and Dark modes) with active state tracking in React Context.

### 2. Hero Section
* **Visuals**: Large bold typography with read-gradient text headings, animated fade-in staggered subtitles, and dual CTA buttons ("Send Inquiry" and "Schedule Google Meet").
* **Marquee Carousel**: Smooth, infinite horizontal ticker loop illustrating client/partner logos (`GSAP` or Tailwind animations).

### 3. About Section
* A clean narrative block describing the company's technical capabilities, backed by micro-animations on interactive key metrics.

### 4. Services (Interactive Split-Screen)
* **Desktop View**: Vertical left-side menu outlining 6 enterprise service lines (Custom Software, SaaS Product Engineering, Mobile Apps, Cloud DevOps, AI Systems, Managed IT). Right-side column is a sticky glass card displaying:
  * Deliverables checklist.
  * Technology stack badges.
  * Target outcomes.
* **Mobile View**: Transforms into an expandable accordion list revealing details directly below the clicked service.

### 5. Solutions Section
* **Desktop View**: Left-side vertical tabs segmenting profiles (Startups & MVPs, Mid-Market, Enterprise). Right-side column is a sticky mock dashboard terminal drawing custom automation pipelines and metrics.
* **Mobile View**: Converts tabs to inline expandable cards.

### 6. Process Timeline (Connecting Segments)
* **Timeline Track**: 7-stage vertical timeline (Discovery to SLA Support).
* **Responsive Line Alignment**: Vertical connecting line must be implemented as individual relative segments (`left-6 top-11 bottom-[-52px]`) inside each step iteration rather than a single container absolute block. This ensures that when timeline cards expand/collapse on mobile, the connecting track scales perfectly and stops exactly at the last dot without extending past.

### 7. FAQ Accordion
* Custom collapsing card details block with smooth framer-motion heights, dealing with onboarding, pricing, SLA structure, and security queries.

### 8. Contact Form & Estimator
* **Fields**: Full Name, Email, Phone, Organization, Service dropdown selector, Estimated Budget (textarea description block), and Message details.
* **3D Particle Orb**: Right-side columns contain a dynamic interactive HTML5 Canvas 3D Particle Orb that reacts to cursor movements (particles hover and orbit in space, showing active network nodes).

---

## 🔒 Security Hardening Requirements

1. **Content Security Policy (CSP)**:
   * Define HTTP CSP headers inside `next.config.ts`:
     `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'none'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self';`
2. **Additional Security Headers**:
   * Add `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security` (HSTS), `Permissions-Policy` (camera=(), microphone=(), geolocation=()), and `X-XSS-Protection: 1; mode-block`.
3. **Advanced CSRF Guard**:
   * Implement Origin verification inside `POST /api/contact/route.ts`: parse the incoming `Origin` header as a URL object and verify its hostname matches the request `Host` header exactly. Reject mismatching cross-origin requests with `403 Forbidden`.
4. **Rate Limiting**:
   * Restrict API calls using a server-side IP rate limiter (maximum 5 submissions per hour per IP) with automatic garbage memory pruning.
5. **Form Sanitization & Payload Rules**:
   * Apply strict length validation on input text (Name: 100, Email: 150, Phone: 30, Org: 100, Budget: 300, Message: 3000).
   * Server-side escape all strings via `escapeHtml()` to block XSS and HTML code injection inside email client renderers.
6. **Spam HoneyPot**:
   * Add a hidden, styled form field (e.g. `website_url`) that is invisible to human users but auto-filled by automated scraper bots. Reject requests with a success status code if the honeypot contains any content.
7. **SMTP Validation Guard**:
   * Perform runtime verification on environment configurations (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `NOTIFICATION_EMAIL`) before triggering Nodemailer tasks to prevent config leaks.

---

## 🚀 SEO & Crawler Architecture

1. **Metadata Structure**:
   * Complete Next.js App Router metadata definitions with canonical url targets, OpenGraph visual indicators, Twitter summary card profiles, and search index preferences.
2. **Schema Markup**:
   * Inject application-wide JSON-LD structured data matching `Organization` and `ProfessionalService` tags to feed search engines with corporate logos, sitemaps, social profiles, and service listings.
3. **Indexing Assets**:
   * **sitemap.ts**: Dynamic Next.js sitemap listing index routes with priority configurations.
   * **robots.ts**: Direct crawler indexations, permitting access to main paths and explicitly disallowing indexing API routes (`/api/*`).
