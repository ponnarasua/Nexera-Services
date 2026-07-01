"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-36 pb-16 flex items-center text-zinc-900 dark:text-white" id="hero">
      
      {/* Decorative ambient gold lighting blobs */}
      <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-[#ffcd75]/10 dark:bg-[#ffcd75]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-[#ffcd75]/10 dark:bg-[#ffcd75]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10" id="hero-layout">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 space-y-6 text-left" id="hero-left">
          
          {/* Section Badges */}
          <div className="mb-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
              <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
              we build digital experiences that convert
            </span>
          </div>

          {/* Title Display */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.0] text-zinc-900 dark:text-white"
            id="hero-title"
          >
            We Build <br className="hidden sm:inline" />
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-[#ffcd75] dark:from-white dark:via-white dark:to-[#ffcd75] bg-clip-text text-transparent">Digital Experiences</span> <br />
            That Convert.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-sans"
            id="hero-subtitle"
          >
            Nexera Services helps businesses, educational institutions, startups, and organizations adopt high-performance digital solutions through custom software, web applications, and server-side AI integrations.
          </motion.p>

          {/* Founding Statistics Counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-3 pt-2"
            id="hero-trust-counters"
          >
            <div className="p-3 rounded-2xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200/80 dark:border-white/5 text-left shadow-sm dark:shadow-none">
              <div className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest">Founding Slots</div>
              <div className="text-sm sm:text-lg font-sans font-bold text-zinc-900 dark:text-white mt-0.5">Limited</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200/80 dark:border-white/5 text-left shadow-sm dark:shadow-none">
              <div className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest">Launch Discount</div>
              <div className="text-sm sm:text-lg font-sans font-bold text-[#ffcd75] mt-0.5">25% Off</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-100/50 dark:bg-white/[0.01] border border-zinc-200/80 dark:border-white/5 text-left shadow-sm dark:shadow-none">
              <div className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest">Founder Involvement</div>
              <div className="text-sm sm:text-lg font-sans font-bold text-zinc-900 dark:text-white mt-0.5">100% Direct</div>
            </div>
          </motion.div>

          {/* CTA Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            id="hero-ctas"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#ffcd75] text-zinc-950 font-mono text-xs font-bold py-3.5 px-6 rounded-xl cursor-pointer hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all text-center shrink-0 shadow-[0_0_20px_rgba(255,205,117,0.25)]"
              id="hero-primary-cta"
            >
              Start a Project
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="bg-white/5 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/10 font-mono text-xs font-bold py-3.5 px-6 rounded-xl cursor-pointer transition-all text-center flex items-center justify-center gap-1.5 shadow-sm dark:shadow-none"
              id="hero-secondary-cta"
            >
              Explore Solutions
              <ArrowRight size={13} className="text-[#ffcd75] shrink-0" />
            </button>
          </motion.div>
        </div>

        {/* Hero Right: Clean Project Milestones Preview */}
        <div className="lg:col-span-5 h-[320px] sm:h-[400px] relative w-full flex items-center justify-center" id="hero-right">
          {/* Ambient gold glow card behind */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffcd75]/5 to-transparent rounded-[32px] blur-2xl pointer-events-none" />
          
          {/* The main glass container panel */}
          <div className="w-full h-full rounded-[32px] border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#ffcd75]/30 dark:hover:border-[#ffcd75]/20 transition-all duration-700 shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcd75]/5 rounded-full blur-2xl" />
            
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-white/10" />
              </div>
              <span className="text-[9px] font-mono text-zinc-500 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded uppercase shadow-sm dark:shadow-none">Client workspace</span>
            </div>

            {/* Schematic blueprint mockup display */}
            <div className="my-auto space-y-4 relative z-10 text-left">
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-white/10 space-y-3 relative overflow-hidden shadow-sm">
                <div className="absolute right-2 top-2 text-[#ffcd75]">
                  <Sparkles size={12} />
                </div>
                
                <div className="text-[10px] text-[#ffcd75] font-mono uppercase tracking-wider">Estimated Project Blueprint</div>
                <div className="space-y-2">
                  <div className="text-xs text-zinc-800 dark:text-zinc-200 font-sans flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#ffcd75]/10 flex items-center justify-center text-[10px] font-bold text-[#ffcd75]">1</div>
                    <span>Custom System Architecture & Wireframes</span>
                  </div>
                  <div className="text-xs text-zinc-800 dark:text-zinc-200 font-sans flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#ffcd75]/10 flex items-center justify-center text-[10px] font-bold text-[#ffcd75]">2</div>
                    <span>Secure Backend Services & API Proxy Setup</span>
                  </div>
                  <div className="text-xs text-zinc-800 dark:text-zinc-200 font-sans flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#ffcd75]/10 flex items-center justify-center text-[10px] font-bold text-[#ffcd75]">3</div>
                    <span>Client Dashboard & User Interface Rollout</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-zinc-100/50 dark:bg-white/5 border border-zinc-200/50 dark:border-white/5 shadow-sm dark:shadow-none">
                  <div className="text-[8px] font-mono text-zinc-500 uppercase">Average Delivery</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white mt-1">4 - 8 Sprints</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-100/50 dark:bg-white/5 border border-zinc-200/50 dark:border-white/5 shadow-sm dark:shadow-none">
                  <div className="text-[8px] font-mono text-zinc-500 uppercase">Production Status</div>
                  <div className="text-xs font-bold text-emerald-500 mt-1">Uptime SLA Active</div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-100 dark:border-white/5 pt-4 flex items-center justify-between">
              <span className="text-[10px] text-zinc-500 font-mono font-medium">NEXERA DELIVERY SYSTEM</span>
              <span className="text-[10px] text-zinc-400 font-mono">v1.4</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
