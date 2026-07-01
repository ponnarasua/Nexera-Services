"use client";

import React, { useState } from "react";
import { Star, Check } from "lucide-react";
import { SOLUTIONS } from "@/data";

export default function Solutions() {
  const [activeSolutionId, setActiveSolutionId] = useState(SOLUTIONS[0].id);

  const selectedSolution = SOLUTIONS.find((s) => s.id === activeSolutionId) || SOLUTIONS[0];

  return (
    <section className="py-24 border-b border-zinc-100 dark:border-white/5 relative z-10 text-zinc-900 dark:text-white" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
            03 // TARGET AUDIENCE Blueprints
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter leading-[1.0] text-zinc-900 dark:text-white">
            Sectors & Blueprints.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
            We engineer custom system architectures matched strictly to organizational requirements. Click a sector to read ROI metrics.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="solutions-interactive-grid">
          
          {/* Left profile tabs */}
          <div className="lg:col-span-5 space-y-3" id="solutions-selector-tabs">
            {SOLUTIONS.map((sol) => {
              const isSelected = activeSolutionId === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden shadow-sm dark:shadow-none ${
                    isSelected 
                      ? "bg-[#ffcd75]/5 border-[#ffcd75] text-zinc-900 dark:text-white font-semibold" 
                      : "bg-white/40 dark:bg-white/[0.01] border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/80 dark:hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">SECTOR PROJECTION</span>
                    <span className="text-[9px] font-mono text-[#ffcd75] bg-[#ffcd75]/5 border border-[#ffcd75]/10 px-2 py-0.5 rounded">
                      {sol.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-sans font-medium text-zinc-900 dark:text-white mb-1.5">
                    {sol.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal font-sans line-clamp-1">
                    Target: {sol.pipeline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right sticky blueprints panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-28" id="solutions-details-sticky">
            <div className="bg-white/70 dark:bg-zinc-950/70 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden shadow-sm" id="solutions-blueprint-card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcd75]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#ffcd75] uppercase tracking-wider block mb-0.5">Sovereignty Blueprint</span>
                  <h3 className="text-lg sm:text-xl font-sans font-medium text-zinc-900 dark:text-white">
                    Target: {selectedSolution.title}
                  </h3>
                </div>
                <span className="text-[9px] font-mono text-[#ffcd75] bg-[#ffcd75]/10 border border-[#ffcd75]/20 px-2.5 py-1 rounded">
                  {selectedSolution.badge}
                </span>
              </div>

              {/* ROI Metric display */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-white/10 rounded-2xl mb-6 shadow-sm">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">PROVEN SYSTEM ROI METRICS</span>
                <p className="text-xs sm:text-sm text-zinc-800 dark:text-white font-medium font-sans">
                  {selectedSolution.roi}
                </p>
              </div>

              {/* Milestones Checklist */}
              <div className="space-y-3 mb-6">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">KEY BLUEPRINT MILESTONES</span>
                <div className="space-y-2">
                  {selectedSolution.milestones.map((mil) => (
                    <div key={mil} className="flex items-center gap-2.5">
                      <Check className="text-emerald-500 shrink-0" size={13} />
                      <span className="text-xs text-zinc-700 dark:text-zinc-300 font-sans">{mil}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools utilized badge */}
              <div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">SYSTEM UTILITY MATRIX</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSolution.tools.map((tl) => (
                    <span key={tl} className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-2.5 py-1 rounded-md shadow-sm dark:shadow-none">
                      {tl}
                    </span>
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
