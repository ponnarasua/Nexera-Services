"use client";

import React from "react";
import { Star, Check } from "lucide-react";
import { BENEFITS } from "@/data";

export default function WhyChooseUs() {
  return (
    <section className="py-24 border-b border-zinc-100 dark:border-white/5 relative z-10 bg-zinc-100/10 dark:bg-zinc-950/20 text-zinc-900 dark:text-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
            04 // SOVEREIGN PRIVILEGES
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter leading-[1.0] text-zinc-900 dark:text-white">
            Why Partner with Nexera.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
            We stand apart through our commitment to bulletproof type-safe engineering, direct technical accountability, and exclusive early adopter privileges.
          </p>
        </div>

        {/* Big counters / differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-200 dark:border-white/10 pb-16 mb-16" id="why-stats-row">
          
          <div className="p-6 rounded-3xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200/50 dark:border-white/5 text-left flex flex-col justify-between shadow-sm dark:shadow-none">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">WHY BE OUR FOUNDING PARTNER</span>
            <div className="text-3xl sm:text-4xl font-display font-medium text-zinc-900 dark:text-white tracking-tight my-4">
              Undivided Founder Attention
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              Unlike established agencies juggling hundreds of clients, our first 3 partners receive 100% of our focus, direct founder support, and bespoke handcrafted engineering with no dilution.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200/50 dark:border-white/5 text-left flex flex-col justify-between shadow-sm dark:shadow-none">
            <span className="text-[10px] font-mono text-[#ffcd75] uppercase tracking-widest">EXCLUSIVE EARLY ADOPTER PRIVILEGES</span>
            <div className="text-3xl sm:text-4xl font-display font-medium text-[#ffcd75] tracking-tight my-4">
              25% Off Introductory Rate
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              We are actively looking to build our first flagship success stories. Our founding clients receive highly customized production architecture and full maintenance support at a fraction of standard rates.
            </p>
          </div>

        </div>

        {/* 6-column grid of architectural benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="why-choose-grid">
          {BENEFITS.map((item) => (
            <div key={item.title} className="p-5 rounded-2xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200 dark:border-white/10 hover:border-[#ffcd75]/30 dark:hover:border-[#ffcd75]/25 transition-all text-left shadow-sm dark:shadow-none">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[#ffcd75] flex items-center justify-center mb-4 shrink-0">
                <Check size={14} className="text-[#ffcd75]" />
              </div>
              <h4 className="text-sm font-sans font-medium text-zinc-900 dark:text-white mb-1.5">{item.title}</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
