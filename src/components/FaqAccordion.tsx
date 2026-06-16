"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does development take?",
    a: "MVPs and landing pages typically take 2 to 4 weeks, while complex systems like custom ERPs or student databases take 8 to 12 weeks. We map out detailed weekly milestones during discovery so you always know what to expect."
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes! We offer monthly maintenance packages which include core server upgrades, security patches, database backups, performance tuning, and immediate support ticketing responses."
  },
  {
    q: "Can you modernize existing systems?",
    a: "Absolutely. We specialize in migrating legacy databases, manual spreadsheets, or older software stacks to modern Next.js and PostgreSQL web systems with zero data loss and minimal operational downtime."
  },
  {
    q: "Do you build custom software?",
    a: "Yes, every system we deliver is 100% custom-written to fit your business requirements and organization logic. We avoid templated builders to guarantee maximum speed, styling control, and scaling stability."
  },
  {
    q: "What industries do you serve?",
    a: "We work across education (private academies, colleges, tutoring centers), service businesses, tech startups, e-commerce, logistics, and professional teams. If you have data to organize or processes to automate, we can help."
  }
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background/50 border-t border-card-border">
      {/* Decorative background glow */}
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card-bg/50 text-xs font-bold uppercase tracking-wider text-accent-primary dark:text-accent-secondary">
            FAQ Help
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Frequently Asked <br />
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
            Got questions about our services or workflows? We compiled details on major
            points. For anything else, reach out directly.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl glass-panel overflow-hidden border border-card-border/80 transition-all duration-300"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm sm:text-base hover:bg-foreground/2 dark:hover:bg-white/2 select-none group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-accent-primary dark:text-accent-secondary shrink-0" />
                    <span className="text-foreground/90 group-hover:text-foreground">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-accent-primary dark:text-accent-secondary" : ""
                    }`} 
                  />
                </button>

                {/* Animated Body panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-card-border/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
