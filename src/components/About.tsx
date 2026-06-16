"use client";

import React from "react";
import { Zap, ShieldCheck, Users, Headphones, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Innovation Driven",
    desc: "Deploying next-gen technologies, AI integrations, and automated pipelines.",
    icon: Zap,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    title: "Scalable Solutions",
    desc: "Architected to grow from MVP stage to high-traffic global enterprise scale.",
    icon: ShieldCheck,
    color: "text-accent-secondary bg-accent-secondary/10",
  },
  {
    title: "User-Centered Design",
    desc: "Crafting modern, accessible, and intuitive user experiences for all profiles.",
    icon: Users,
    color: "text-accent-primary bg-accent-primary/10",
  },
  {
    title: "Long-Term Support",
    desc: "Providing rigorous updates, continuous monitoring, and proactive maintenance.",
    icon: Headphones,
    color: "text-emerald-500 bg-emerald-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent-primary/5 blur-[100px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card-bg/50 text-xs font-bold uppercase tracking-wider text-accent-primary dark:text-accent-secondary">
            About Company
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Technology That Moves <br />
            <span className="text-gradient">Organizations Forward</span>
          </h2>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Nexera Services delivers innovative software solutions designed to help
              organizations modernize operations, improve efficiency, and prepare for
              future growth.
            </p>
            <p>
              We build scalable applications, intelligent systems, and digital platforms
              that transform how businesses and educational institutions operate.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl glass-panel glass-panel-hover flex gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${feat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm mb-1">{feat.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D-Like Glass Digital Engine Illustration */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            
            {/* Outer Rotating Isometric Grid & Rings */}
            <div className="absolute inset-0 border border-dashed border-card-border rounded-full animate-spin-slow opacity-30" />
            <div className="absolute inset-8 border border-accent-primary/20 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
            
            {/* Isometric Glass Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute w-44 h-28 glass-panel rounded-2xl p-4 flex flex-col justify-between -rotate-12 translate-x-[-40px] translate-y-[-50px] shadow-2xl border-accent-secondary/30"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-accent-secondary">Cloud Network</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-ping" />
              </div>
              <div className="h-4 w-2/3 bg-card-border rounded-full" />
              <div className="h-2 w-full bg-card-border/50 rounded-full" />
            </motion.div>

            {/* Pulsing Core Sphere */}
            <div className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary opacity-20 blur-xl animate-pulse" />
            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute w-24 h-24 rounded-full glass-panel flex items-center justify-center border-accent-primary/40 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg">
                <Users className="w-6 h-6 animate-pulse" />
              </div>
            </motion.div>

            {/* Isometric Glass Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute w-40 h-24 glass-panel rounded-2xl p-4 flex flex-col justify-between rotate-12 translate-x-[50px] translate-y-[60px] shadow-2xl border-accent-primary/30"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] uppercase font-bold text-emerald-400">Validated</span>
              </div>
              <div className="flex gap-1">
                <div className="h-2 w-4 bg-emerald-500/20 rounded" />
                <div className="h-2 w-8 bg-emerald-500/20 rounded" />
                <div className="h-2 w-6 bg-emerald-500/20 rounded" />
              </div>
            </motion.div>

            {/* Connected Tech Node Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100">
              <line x1="20" y1="35" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-accent-secondary" />
              <line x1="80" y1="65" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-accent-primary" />
              <circle cx="20" cy="35" r="1.5" className="fill-accent-secondary animate-pulse" />
              <circle cx="80" cy="65" r="1.5" className="fill-accent-primary animate-pulse" />
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
}
