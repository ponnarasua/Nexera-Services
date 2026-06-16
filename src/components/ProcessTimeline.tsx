"use client";

import React, { useState } from "react";
import { 
  Search, 
  FileSpreadsheet, 
  Paintbrush, 
  Code2, 
  ShieldCheck, 
  CloudUpload, 
  HeartHandshake,
  Check,
  Clock,
  UserCheck,
  Wrench
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    step: "01",
    phase: "Discovery",
    title: "Understanding Your Vision",
    desc: "We dive deep into your workflow requirements, legacy databases, and target user profiles. We align on scope, tech stacks, and feature lists.",
    icon: Search,
    color: "text-accent-primary bg-accent-primary/10 border-accent-primary/20",
    duration: "3 - 5 Days",
    deliverables: ["Product Scope Document", "Tech Stack Recommendation", "Project Roadmap Outline"],
    tools: ["Slack", "Google Meet", "Notion"],
    clientAction: "Provide requirements list, brand assets, and existing system credentials."
  },
  {
    step: "02",
    phase: "Planning",
    title: "Architectural Blueprint",
    desc: "We map out database schema models, page trees, API routers, and visual flowcharts. We finalize an implementation plan and establish strict timelines.",
    icon: FileSpreadsheet,
    color: "text-accent-secondary bg-accent-secondary/10 border-accent-secondary/20",
    duration: "5 - 7 Days",
    deliverables: ["Database Schema models", "API Integration blueprints", "Figma Sitemap & User Flows"],
    tools: ["dbdiagram.io", "Miro", "Notion"],
    clientAction: "Review and sign off on database layout and API blueprints."
  },
  {
    step: "03",
    phase: "Design",
    title: "High-Fidelity Interface",
    desc: "We construct premium UI/UX designs, wireframes, and dark/light layouts. Every component is optimized for visual aesthetics and ease of use.",
    icon: Paintbrush,
    color: "text-accent-tertiary bg-accent-tertiary/10 border-accent-tertiary/20",
    duration: "1 - 2 Weeks",
    deliverables: ["Interactive Figma Prototypes", "Dark / Light Mode Style Guide", "Component Asset library"],
    tools: ["Figma", "Adobe Illustrator"],
    clientAction: "Provide feedback on interactive layouts and style parameters."
  },
  {
    step: "04",
    phase: "Development",
    title: "Clean & Scaling Codebase",
    desc: "We write clean, typed codebases (Next.js & TypeScript). We implement interactive elements, state contexts, 3D Canvas scenes, and fast loading logic.",
    icon: Code2,
    color: "text-accent-primary bg-accent-primary/10 border-accent-primary/20",
    duration: "3 - 6 Weeks",
    deliverables: ["Clean Git Codebase (TypeScript/Next.js)", "Staging Sandbox Deployment", "Custom API router configurations"],
    tools: ["VS Code", "GitHub", "Vercel / AWS"],
    clientAction: "Bi-weekly sprint review calls and testing on the staging sandbox."
  },
  {
    step: "05",
    phase: "Testing",
    title: "Rigorous QA Audits",
    desc: "We run unit compilations, accessibility checkers, API mock integrations, and cross-browser screen tests to ensure zero hydration or syntax crashes.",
    icon: ShieldCheck,
    color: "text-accent-secondary bg-accent-secondary/10 border-accent-secondary/20",
    duration: "1 Week",
    deliverables: ["Vulnerability Assessment (VAPT) Report", "Cross-browser Compatibility tests", "Lighthouse & SEO Audit reports"],
    tools: ["Lighthouse", "Jest", "Cypress"],
    clientAction: "User Acceptance Testing (UAT) and feedback filing."
  },
  {
    step: "06",
    phase: "Deployment",
    title: "Production Launch",
    desc: "We ship assets to production servers (AWS/Vercel) with built-in cache configs, SEO header metadata, and analytical tags ready to rank.",
    icon: CloudUpload,
    color: "text-accent-tertiary bg-accent-tertiary/10 border-accent-tertiary/20",
    duration: "2 - 3 Days",
    deliverables: ["Production Launch (Live Domain)", "SSL Certificates & Security headers", "Analytics & Search Console sync"],
    tools: ["Cloudflare", "Vercel", "Google Search Console"],
    clientAction: "Point DNS domains and approve production environment release."
  },
  {
    step: "07",
    phase: "Support",
    title: "Continuous Maintenance",
    desc: "We support you post-launch with direct developer channels, uptime reviews, safety audits, and roadmap enhancements as your operations scale.",
    icon: HeartHandshake,
    color: "text-accent-primary bg-accent-primary/10 border-accent-primary/20",
    duration: "Continuous / SLA",
    deliverables: ["24/7 Server uptime monitoring", "Monthly Security & Dependency patches", "Dedicated technical support channel"],
    tools: ["Slack", "Sentry", "New Relic"],
    clientAction: "Submit feature requests or system updates via dedicated support dashboard."
  }
];

export default function ProcessTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = steps[activeIdx];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-background/50 border-t border-card-border">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card-bg/50 text-xs font-bold uppercase tracking-wider text-accent-primary dark:text-accent-secondary">
            Our Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            How We Partner <br />
            <span className="text-gradient">To Build The Future</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
            From initial wireframing to enterprise deployments, we keep you informed
            at each stage with interactive previews and structured milestones.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Timeline Steps (Desktop & Mobile) */}
          <div className="lg:col-span-6 relative">
            {/* Timeline Connecting Line */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-card-border z-0" />

            <div className="space-y-6">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeIdx === idx;

                return (
                  <div key={step.step} className="relative z-10">
                    {/* Interactive Dot */}
                    <div 
                      onClick={() => setActiveIdx(idx)}
                      className={`absolute left-6 w-4.5 h-4.5 rounded-full bg-background border-4 transform -translate-x-1/2 cursor-pointer transition-all duration-300 top-7 ${
                        isActive 
                          ? "border-accent-secondary scale-125 shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
                          : "border-card-border hover:border-text-muted"
                      }`}
                    />

                    {/* Timeline Item Card */}
                    <div className="pl-14">
                      <div
                        onClick={() => setActiveIdx(idx)}
                        className={`p-5 rounded-2xl border text-left cursor-pointer select-none transition-all duration-300 ${
                          isActive 
                            ? "bg-foreground/5 dark:bg-white/5 border-accent-secondary/50 shadow-lg scale-[1.01]" 
                            : "bg-transparent border-card-border/60 hover:bg-foreground/2 dark:hover:bg-white/2"
                        }`}
                      >
                        <div className="flex gap-4 items-start">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${step.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>

                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-black uppercase tracking-wider ${
                                isActive ? "text-accent-secondary" : "text-text-muted"
                              }`}>
                                Phase {step.step}
                              </span>
                              <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-foreground/5 dark:bg-white/5 border border-card-border text-text-muted">
                                {step.phase}
                              </span>
                            </div>
                            
                            <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-foreground">
                              {step.title}
                            </h3>
                            
                            <p className="text-xs text-text-muted leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>

                        {/* Mobile view only: Dynamic Accordion deliverables inline */}
                        <div className="lg:hidden">
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden mt-4 pt-4 border-t border-card-border/50 space-y-4"
                              >
                                {/* Duration & Client Action */}
                                <div className="grid grid-cols-2 gap-3 text-[11px] font-semibold text-text-muted">
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-accent-secondary" />
                                    <span>{step.duration}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <UserCheck className="w-3.5 h-3.5 text-accent-tertiary" />
                                    <span>Client Review</span>
                                  </div>
                                </div>

                                {/* Deliverables List */}
                                <div className="space-y-2">
                                  <h4 className="text-[11px] font-extrabold uppercase text-foreground/80 tracking-wider">Deliverables</h4>
                                  <ul className="space-y-1.5">
                                    {step.deliverables.map((item) => (
                                      <li key={item} className="flex items-start gap-2 text-xs text-text-muted">
                                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Client Input Section */}
                                <div className="space-y-1 p-3 rounded-lg bg-foreground/2 dark:bg-white/2 border border-card-border/40">
                                  <span className="text-[10px] font-bold text-accent-primary dark:text-accent-secondary block uppercase">Client Input Needed</span>
                                  <p className="text-[11px] text-text-muted leading-relaxed">{step.clientAction}</p>
                                </div>

                                {/* Tools Used */}
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                  {step.tools.map((t) => (
                                    <span key={t} className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-foreground/5 dark:bg-white/5 border border-card-border text-text-muted">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Glass Details Panel (Desktop Sticky Only) */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl p-8 glass-panel border-card-border shadow-2xl space-y-6"
              >
                {/* Panel Header */}
                <div className="flex justify-between items-center pb-4 border-b border-card-border/50">
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase text-accent-secondary">Phase {activeStep.step} Details</span>
                    <h3 className="text-xl font-extrabold tracking-tight text-foreground">{activeStep.phase}</h3>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 ${activeStep.color}`}>
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Scope Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-text-muted tracking-wider">Scope Overview</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed font-medium">{activeStep.title}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{activeStep.desc}</p>
                </div>

                {/* Timeline & Actions Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-card-border bg-foreground/2 dark:bg-white/2 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-secondary uppercase">
                      <Clock className="w-4 h-4" />
                      <span>Duration</span>
                    </div>
                    <span className="text-sm font-extrabold text-foreground">{activeStep.duration}</span>
                  </div>

                  <div className="p-4 rounded-xl border border-card-border bg-foreground/2 dark:bg-white/2 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-tertiary uppercase">
                      <UserCheck className="w-4 h-4" />
                      <span>Action Gate</span>
                    </div>
                    <span className="text-sm font-extrabold text-foreground">Client Review</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase text-text-muted tracking-wider">Milestone Deliverables</h4>
                  <ul className="space-y-2.5">
                    {activeStep.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs font-semibold text-text-muted">
                        <div className="w-4 h-4 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Input Details */}
                <div className="p-4 rounded-2xl border border-accent-primary/10 bg-accent-primary/5 space-y-2">
                  <span className="text-xs font-extrabold text-accent-primary dark:text-accent-secondary uppercase block">Client Input Required</span>
                  <p className="text-xs text-text-muted leading-relaxed font-semibold">{activeStep.clientAction}</p>
                </div>

                {/* Tools & Environment */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted uppercase">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Tools & Environment</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.tools.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs font-bold bg-foreground/5 dark:bg-white/5 border border-card-border text-text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
