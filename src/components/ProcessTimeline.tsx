"use client";

import React, { useState } from "react";
import { Star, Check, Sparkles, Cpu, Users } from "lucide-react";
import { TIMELINE } from "@/data";

export default function ProcessTimeline() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const getTimelineDetails = (phaseNum: string) => {
    switch (phaseNum) {
      case "01": return {
        deliverable: "Scope agreement, Non-functional performance target sheet, and modular API schematic drafts.",
        tools: ["FigJam", "Notion", "Draw.io"],
        clientAction: "Requirements workshop attendance and current database schema access."
      };
      case "02": return {
        deliverable: "Pragmatic server routes, detailed database relational schema mapped via Drizzle, and proxy handlers.",
        tools: ["TypeScript", "Drizzle Studio", "PostgreSQL"],
        clientAction: "Security guidelines verification and database structural sign-off."
      };
      case "03": return {
        deliverable: "Ultra-premium desktop-first glassmorphic UI layout mockups with Playfair typography styling.",
        tools: ["Figma Workspace", "Tailwind Configuration Rules"],
        clientAction: "Design system feedback loops & active interface approvals."
      };
      case "04": return {
        deliverable: "Clickable sprint updates, continuous visual checkouts, and modular type-safe code deployments.",
        tools: ["React 19", "Framer Motion", "Express Routers"],
        clientAction: "Bi-weekly operational dashboard reviews and logic sanity checks."
      };
      case "05": return {
        deliverable: "Isolating Google Gemini keys behind server proxies, end-to-end load latency test reports, and Lighthouse checkouts.",
        tools: ["Lighthouse Engine", "Playwright Automation", "Helmet.js"],
        clientAction: "Acceptance criteria checklists validation."
      };
      case "06": return {
        deliverable: "Auto-scalable Docker container orchestrations configured to safely scale down to zero.",
        tools: ["Cloud Run", "Docker Cluster", "Github Actions"],
        clientAction: "DNS records delegation and production credential injections."
      };
      case "07": return {
        deliverable: "SLA priority channels active, Prometheus diagnostics logging, and automated error-alert triggers.",
        tools: ["Prometheus", "Sentry", "Custom Alerts"],
        clientAction: "Monthly SLA checkpoint calls."
      };
      default: return {
        deliverable: "Functional system deliverable",
        tools: ["Vite Stack"],
        clientAction: "Review and approve"
      };
    }
  };

  return (
    <section className="py-24 border-b border-zinc-100 dark:border-white/5 relative z-10 text-zinc-900 dark:text-white" id="timeline">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
            05 // DEPLOYMENT LIFECYCLE MAP
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter leading-[1.0] text-zinc-900 dark:text-white">
            7 deployment phases.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
            Click on any phase block below to expand detailed information tracking system deliverables, deployed tools, and required client actions.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="vertical-timeline-layout">
          
          {/* Left Vertical List */}
          <div className="lg:col-span-5 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200 dark:before:bg-white/10 space-y-4" id="timeline-vertical-path">
            {TIMELINE.map((step, idx) => {
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={step.phase}
                  onClick={() => setActivePhaseIndex(idx)}
                  className="w-full text-left pl-10 relative group cursor-pointer block focus:outline-none"
                >
                  {/* Ring Indicator */}
                  <div className={`absolute left-[17px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#fafafa] dark:bg-[#09090b] border-2 transition-all duration-300 ${
                    isActive ? "border-[#ffcd75] scale-125" : "border-zinc-200 dark:border-white/10 group-hover:border-[#ffcd75]/50"
                  }`} />

                  <div className={`p-4 rounded-2xl border transition-all duration-300 ${
                    isActive ? "bg-[#ffcd75]/5 border-[#ffcd75]" : "bg-white/40 dark:bg-white/[0.01] border-zinc-200 dark:border-white/10 group-hover:bg-zinc-100/50 dark:group-hover:bg-white/[0.02] shadow-sm dark:shadow-none"
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-[#ffcd75]">{step.phase} {"//"} {step.duration}</span>
                    </div>
                    <h4 className="text-sm font-sans font-semibold text-zinc-900 dark:text-white">
                      {step.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right details sticky panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-28" id="timeline-sticky-panel">
            <div className="bg-white/70 dark:bg-zinc-950/70 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden text-left shadow-sm" id="timeline-detail-grid-card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcd75]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="border-b border-zinc-200 dark:border-white/10 pb-4 mb-6">
                <span className="text-[10px] font-mono text-[#ffcd75] uppercase block mb-0.5">phase deliverable tracking</span>
                <h3 className="text-xl font-sans font-medium text-zinc-900 dark:text-white">
                  {TIMELINE[activePhaseIndex].phase}. {TIMELINE[activePhaseIndex].title} ({TIMELINE[activePhaseIndex].duration})
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 font-sans leading-relaxed">
                  {TIMELINE[activePhaseIndex].description}
                </p>
              </div>

              {/* Subgrid tracking deliverables, tools, actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6" id="timeline-grid-metrics">
                
                {/* Deliverables */}
                <div className="space-y-2">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                    <Sparkles size={11} className="text-[#ffcd75]" />
                    Deliverables
                  </div>
                  <p className="text-xs text-zinc-800 dark:text-white leading-relaxed font-sans">
                    {getTimelineDetails(TIMELINE[activePhaseIndex].phase).deliverable}
                  </p>
                </div>

                {/* Tools */}
                <div className="space-y-2">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                    <Cpu size={11} className="text-[#ffcd75]" />
                    Tools Utilized
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {getTimelineDetails(TIMELINE[activePhaseIndex].phase).tools.map((t) => (
                      <span key={t} className="text-[9px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-1.5 py-0.5 rounded shadow-sm dark:shadow-none">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Action */}
                <div className="space-y-2">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                    <Users size={11} className="text-[#ffcd75]" />
                    Client Action
                  </div>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                    {getTimelineDetails(TIMELINE[activePhaseIndex].phase).clientAction}
                  </p>
                </div>

              </div>

              {/* Scope Detail Bullets */}
              <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-white/5">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">detailing phase scope</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TIMELINE[activePhaseIndex].bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <Check className="text-emerald-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-700 dark:text-zinc-300 font-sans leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
