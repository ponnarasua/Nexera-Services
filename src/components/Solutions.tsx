"use client";

import React, { useState } from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Settings2,
  TrendingUp,
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    id: "education",
    tabLabel: "Educational Institutions",
    tabIcon: GraduationCap,
    title: "Modernize Academies & Schools",
    subtitle: "Empower administrators, teachers, parents, and students with unified digital classrooms and automated administration portals.",
    bullets: [
      "Student Management: Profile tracking and custom transcripts.",
      "Attendance Tracking: Automatic card tap check-ins and notifications.",
      "Fee Management: Automated invoicing and secure parent portals.",
      "Reporting & Exams: Gradebooks and visual student progress charts."
    ],
    duration: "4 - 12 Weeks",
    outcome: "Modernized administration, 80% reduction in paper forms, and real-time student tracking.",
    pipeline: ["Database Schema Normalization", "Parent/Student Access Control", "Automated Billing Logs", "Live Progress Reporting Charts"],
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Resend API"]
  },
  {
    id: "business",
    tabLabel: "Businesses",
    tabIcon: Briefcase,
    title: "Scale Corporate Operations",
    subtitle: "Eliminate manual tasks, synchronize departmental data, and make faster decisions with custom databases and automation.",
    bullets: [
      "CRM & Customer Tracking: Stay connected with pipeline metrics.",
      "Workflow Automation: Link emails, Slack, and spreadsheets automatically.",
      "Custom Dashboards: Real-time report exports and simple financials.",
      "Role-Based Security: Secure accounts and team permission tiers."
    ],
    duration: "6 - 12 Weeks",
    outcome: "Increased decision-making speed, paperless department sync, and automated workflows.",
    pipeline: ["Department Workflow Mapping", "Data Pipeline Integrations", "Custom Reporting Panels", "Continuous SLA Server Standby"],
    techStack: ["Node.js", "GraphQL", "AWS Cloud", "Docker", "Miro"]
  },
  {
    id: "startup",
    tabLabel: "Startups & MVPs",
    tabIcon: Rocket,
    title: "Accelerate Product Launches",
    subtitle: "Ship secure, highly optimized software platforms and mobile apps to market in weeks instead of months.",
    bullets: [
      "MVP Development: Fast-track software to test market fit.",
      "SaaS Architecture: Subscription billing, stripe sync, and admin panels.",
      "API Integrations: Payment gateways and secure AI assistant pipelines.",
      "Modern Web Platforms: Highly optimized layout, fast loading, and clean UX."
    ],
    duration: "3 - 6 Weeks",
    outcome: "Go to market in weeks, secure subscription revenues, and validate product-market fit.",
    pipeline: ["Interactive Clickable Prototypes", "Staging Environment Deployment", "Stripe Gateway Sync", "Store Launch Preparation"],
    techStack: ["Next.js", "Stripe API", "Vercel Hosting", "React Native"]
  }
];

export default function Solutions() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSol = solutions[activeIdx];
  const ActiveIcon = activeSol.tabIcon;

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative backdrop glow */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card-bg/50 text-xs font-bold uppercase tracking-wider text-accent-primary dark:text-accent-secondary">
            Enterprise Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Designed for Every <br />
            <span className="text-gradient">Organization Stage</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
            Select your profile below to see how Nexera integrates specialized structures
            to increase efficiency and accelerate deployment.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Solution Selector Tabs (Desktop & Mobile) */}
          <div className="lg:col-span-5 space-y-4">
            {solutions.map((sol, idx) => {
              const Icon = sol.tabIcon;
              const isActive = activeIdx === idx;

              return (
                <div key={sol.id}>
                  <div
                    onClick={() => setActiveIdx(idx)}
                    className={`p-5 rounded-2xl border text-left cursor-pointer select-none transition-all duration-300 ${
                      isActive 
                        ? "bg-foreground/5 dark:bg-white/5 border-accent-primary/50 shadow-lg scale-[1.01]" 
                        : "bg-transparent border-card-border/60 hover:bg-foreground/2 dark:hover:bg-white/2"
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 bg-foreground/5 dark:bg-white/5 ${
                        isActive ? "text-accent-primary border-accent-primary/30" : "text-text-muted border-card-border"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="space-y-0.5 flex-1">
                        <span className="text-[9px] uppercase font-bold text-accent-secondary tracking-widest block">
                          Profile Segment
                        </span>
                        <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-foreground">
                          {sol.tabLabel}
                        </h3>
                      </div>
                    </div>

                    {/* Mobile view: Accordion details inline */}
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
                            <p className="text-xs text-text-muted leading-relaxed">
                              {sol.subtitle}
                            </p>

                            {/* Features list */}
                            <ul className="space-y-2">
                              {sol.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-2.5 text-xs text-text-muted">
                                  <CheckCircle2 className="w-4 h-4 text-accent-tertiary shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Project Outcome */}
                            <div className="p-3 rounded-lg bg-foreground/2 dark:bg-white/2 border border-card-border/40 text-xs">
                              <span className="font-bold text-accent-primary dark:text-accent-secondary uppercase block text-[10px]">Expected Outcome</span>
                              <p className="text-text-muted mt-1 leading-relaxed">{sol.outcome}</p>
                            </div>

                            {/* Pipeline */}
                            <div className="space-y-1.5">
                              <span className="text-[10px] font-extrabold uppercase text-foreground/80 tracking-wider">Implementation Steps</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sol.pipeline.map((p) => (
                                  <span key={p} className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-foreground/5 dark:bg-white/5 border border-card-border text-text-muted">
                                    {p}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Blueprint Panel (Desktop Sticky Only) */}
          <div className="hidden lg:block lg:col-span-7 lg:sticky lg:top-28">
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
                    <span className="text-xs font-black uppercase text-accent-primary">Solutions Blueprint</span>
                    <h3 className="text-xl font-extrabold tracking-tight text-foreground">{activeSol.title}</h3>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 bg-foreground/5 dark:bg-white/5 border-card-border text-accent-primary`}>
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-semibold">
                  {activeSol.subtitle}
                </p>

                {/* Duration & Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-card-border bg-foreground/2 dark:bg-white/2 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-secondary uppercase">
                      <Clock className="w-4 h-4" />
                      <span>Duration</span>
                    </div>
                    <span className="text-sm font-extrabold text-foreground">{activeSol.duration}</span>
                  </div>

                  <div className="p-4 rounded-xl border border-card-border bg-foreground/2 dark:bg-white/2 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-tertiary uppercase">
                      <TrendingUp className="w-4 h-4" />
                      <span>Expected ROI</span>
                      <Activity className="w-3.5 h-3.5 animate-pulse ml-auto opacity-60" />
                    </div>
                    <span className="text-sm font-extrabold text-foreground">High Efficiency</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase text-text-muted tracking-wider">Features & Modules</h4>
                  <ul className="space-y-2.5">
                    {activeSol.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs font-semibold text-text-muted">
                        <div className="w-4 h-4 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-accent-tertiary" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Intended Target Outcome statement */}
                <div className="p-4 rounded-2xl border border-accent-secondary/15 bg-accent-secondary/5 space-y-2">
                  <span className="text-xs font-extrabold text-accent-secondary uppercase block">Deployment Impact</span>
                  <p className="text-xs text-text-muted leading-relaxed font-semibold">{activeSol.outcome}</p>
                </div>

                {/* Development Pipeline */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted uppercase">
                    <Settings2 className="w-3.5 h-3.5" />
                    <span>Implementation Pipeline</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeSol.pipeline.map((p) => (
                      <span key={p} className="px-2.5 py-1 rounded-full text-xs font-bold bg-foreground/5 dark:bg-white/5 border border-card-border text-text-muted">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action button */}
                <div className="pt-4 border-t border-card-border/50">
                  <a
                    href="#contact"
                    className="w-full py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-accent-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-xs"
                  >
                    Request Solution Blueprint
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
