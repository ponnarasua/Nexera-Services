"use client";

import React from "react";
import { Star } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 border-b border-zinc-100 dark:border-white/5 relative z-10 text-zinc-900 dark:text-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-layout">
          
          {/* Left side: Heading & Value cards */}
          <div className="lg:col-span-7 space-y-6 text-left" id="about-left-col">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 mb-3">
                <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
                01 // ARCHITECTURAL INTENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter leading-[1.0] text-zinc-900 dark:text-white">
                We Build Digital Systems <br className="hidden sm:inline" />
                <span className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-[#ffcd75] dark:from-white dark:via-white dark:to-[#ffcd75] bg-clip-text text-transparent">With Absolute Structural Sovereignty.</span>
              </h2>
            </div>

            {/* 4 key value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="about-key-values">
              <div className="p-5 rounded-2xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200/80 dark:border-white/10 hover:border-[#ffcd75]/30 dark:hover:border-[#ffcd75]/30 transition-colors shadow-sm dark:shadow-none">
                <div className="text-xs font-mono font-bold text-[#ffcd75] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#ffcd75] rounded-full" />
                  Innovation
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  Pioneering next-gen server-side solutions with custom middleware integrations and protected credentials.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200/80 dark:border-white/10 hover:border-[#ffcd75]/30 dark:hover:border-[#ffcd75]/30 transition-colors shadow-sm dark:shadow-none">
                <div className="text-xs font-mono font-bold text-[#ffcd75] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#ffcd75] rounded-full" />
                  Scalable
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  Engineered to auto-scale dynamically with serverless execution models, clean non-blocking query loops, and optimized bundles from day one.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200/80 dark:border-white/10 hover:border-[#ffcd75]/30 dark:hover:border-[#ffcd75]/30 transition-colors shadow-sm dark:shadow-none">
                <div className="text-xs font-mono font-bold text-[#ffcd75] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#ffcd75] rounded-full" />
                  User-Centered
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  Designing high-contrast obsidian layouts featuring fluid transitions, micro-animations, and responsive layouts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200/80 dark:border-white/10 hover:border-[#ffcd75]/30 dark:hover:border-[#ffcd75]/30 transition-colors shadow-sm dark:shadow-none">
                <div className="text-xs font-mono font-bold text-[#ffcd75] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#ffcd75] rounded-full" />
                  Long-Term Support
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  SLA-backed uptime guarantees accompanied by automated log reporting and continuous optimization sprints.
                </p>
              </div>
            </div>
          </div>

          {/* Right side: SLA Blueprint card */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px]" id="about-right-col">
            <div className="w-full h-full rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.01] backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden relative group shadow-sm">
              
              <div className="relative z-10 text-left">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">GUARANTEED STABILITY</span>
                <h4 className="text-sm font-sans font-medium text-zinc-900 dark:text-white mt-1">Nexera Quality SLA</h4>
              </div>

              <div className="relative z-10 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/90 border border-zinc-200 dark:border-white/10 text-left space-y-2 shadow-sm">
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  SYSTEM STANDARD: PRODUCTION-READY
                </div>
                <div className="text-[10px] text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                  All client deliveries feature modular TypeScript interfaces, client credentials isolated completely server-side, and scale-to-zero container capabilities.
                </div>
              </div>

              <div className="relative z-10 text-right">
                <span className="text-[9px] font-mono text-zinc-500">QUALITY ASSURED</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
