"use client";

import React from "react";
import { ArrowRight, Play, Shield, Cpu, Activity } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { value: "100%", label: "Custom Solutions" },
  { value: "Modern", label: "Tech Stack" },
  { value: "Future", label: "Ready Systems" },
  { value: "Enterprise", label: "Security" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden grid-bg"
    >
      {/* Moving Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-accent-primary/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-accent-secondary/10 blur-[120px] pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-semibold text-accent-primary dark:text-accent-secondary mb-6 w-fit mx-auto lg:mx-0"
          >
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            Nexera Services
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6"
          >
            Building the <br />
            <span className="text-gradient">Software That Powers</span> <br />
            Your Operations
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-text-muted max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            From custom school portals to high-performance enterprise automation, Nexera Services
            architects robust digital systems that eliminate operational overhead and scale your organization.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-14"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-xl hover:shadow-accent-primary/20 hover:scale-105 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 border border-card-border glass-panel hover:bg-foreground/5 dark:hover:bg-white/5 font-semibold rounded-full flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Play className="w-4 h-4 fill-foreground/80 text-foreground/80" />
              View Our Work
            </a>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-card-border pt-8 text-left"
          >
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  {m.value}
                </span>
                <span className="text-xs text-text-muted font-medium mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Floating Holographic Cards */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] w-full hidden sm:flex items-center justify-center">
          
          {/* Card 1: AI Processing */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-4 right-4 w-60 p-5 rounded-2xl glass-panel glass-panel-hover animate-float cursor-pointer"
            style={{ animationDuration: "7s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-purple-400">AI Engine</h3>
                <span className="text-[10px] text-text-muted">Document Analysis</span>
              </div>
            </div>
            <div className="space-y-1.5 mt-2">
              <div className="w-full h-1.5 rounded-full bg-card-border overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full animate-[pulse_1.5s_infinite]" style={{ width: "84%" }} />
              </div>
              <div className="flex justify-between text-[9px] text-text-muted">
                <span>Accuracy Rate</span>
                <span className="font-bold text-purple-400">99.2%</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Security */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-6 left-4 w-60 p-5 rounded-2xl glass-panel glass-panel-hover animate-float cursor-pointer"
            style={{ animationDuration: "9s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-400">Security</h3>
                <span className="text-[10px] text-text-muted">End-to-End Encrypted</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping" />
              <span className="text-[11px] font-semibold text-foreground/80">SSL & Threat Shield Active</span>
            </div>
          </motion.div>

          {/* Card 3: Performance/Analytics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute top-1/3 left-1/10 w-56 p-4 rounded-2xl glass-panel glass-panel-hover animate-float cursor-pointer"
            style={{ animationDuration: "5s" }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-text-muted">System Load</span>
              <Activity className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-black text-foreground">
              99.9%
            </div>
            <div className="text-[9px] text-emerald-400 mt-1 flex items-center gap-1">
              <span>↑ 0.05% Uptime</span>
              <span className="text-text-muted">vs last month</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
