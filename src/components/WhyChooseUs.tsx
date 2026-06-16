"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  TrendingUp, 
  Layers, 
  ShieldAlert, 
  Zap, 
  Clock, 
  Maximize,
  Sparkles
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const stats = [
  { target: 50, suffix: "+", label: "Projects Delivered" },
  { target: 100, suffix: "%", label: "Client Satisfaction" },
  { target: 24, suffix: "/7", label: "Dedicated Support" }
];

const cards = [
  {
    title: "Future-Ready Solutions",
    desc: "Built using modern standards, modular systems, and APIs ready for tomorrow's technologies.",
    icon: TrendingUp,
    color: "text-accent-secondary border-accent-secondary/20 bg-accent-secondary/5"
  },
  {
    title: "Modern Architecture",
    desc: "Optimized folder layouts, static file generation, server rendering and decoupled API backends.",
    icon: Layers,
    color: "text-accent-primary border-accent-primary/20 bg-accent-primary/5"
  },
  {
    title: "Enterprise Security",
    desc: "Rigorous encryption, secure tokens, environment locks and SSL protection at all times.",
    icon: ShieldAlert,
    color: "text-accent-tertiary border-accent-tertiary/20 bg-accent-tertiary/5"
  },
  {
    title: "Fast Development",
    desc: "Accelerated development pipelines to ship high-fidelity software prototypes in record time.",
    icon: Zap,
    color: "text-accent-primary border-accent-primary/20 bg-accent-primary/5"
  },
  {
    title: "Dedicated Support",
    desc: "Direct channel to our software engineers, detailed maintenance docs, and live ticketing systems.",
    icon: Clock,
    color: "text-accent-secondary border-accent-secondary/20 bg-accent-secondary/5"
  },
  {
    title: "Scalable Technology",
    desc: "Kubernetes, Serverless Lambda functions, and load-balanced clusters built to grow.",
    icon: Maximize,
    color: "text-accent-tertiary border-accent-tertiary/20 bg-accent-tertiary/5"
  }
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-secondary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Top: Large Stat Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-card-border pb-16 mb-20 text-center">
          {stats.map((s) => (
            <motion.div 
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <p className="text-xs uppercase font-extrabold tracking-widest text-text-muted flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-secondary animate-pulse" />
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Lower Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card-bg/50 text-xs font-bold uppercase tracking-wider text-accent-primary dark:text-accent-secondary">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Architected to Build <br />
            <span className="text-gradient">Outstanding Tech Infrastructure</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
            We merge software design expertise with cloud engineering to deliver
            robust systems that avoid typical development delays and architectural debt.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 shrink-0 ${card.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* Title */}
                  <h3 className="font-extrabold text-lg tracking-tight mb-3">
                    {card.title}
                  </h3>
                  {/* Desc */}
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 w-full h-[1px] bg-card-border/50" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
