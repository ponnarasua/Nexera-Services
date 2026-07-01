"use client";

import React, { useState } from "react";
import { Plus, X, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/data";

export default function FaqAccordion() {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  return (
    <section className="py-24 border-b border-zinc-100 dark:border-white/5 relative z-10 bg-zinc-100/10 dark:bg-zinc-950/20 text-zinc-900 dark:text-white" id="faqs">
      <div className="max-w-4xl mx-auto px-6 text-left">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
            06 // COMPLIANCE & PROTOCOL FAQS
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter leading-[1.0] text-zinc-900 dark:text-white">
            SLA & Security FAQs.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto text-center">
            Got technical questions about backend routes, key handling, or Drizzle database migrations? Inspect our protocols below.
          </p>
        </div>

        {/* Expandable accordions */}
        <div className="space-y-3" id="faq-accordions-group">
          {FAQS.map((faq, i) => {
            const isExpanded = expandedFaqIndex === i;
            return (
              <div 
                key={i} 
                className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.01] overflow-hidden shadow-sm dark:shadow-none"
                id={`faq-item-${i}`}
              >
                <button
                  onClick={() => setExpandedFaqIndex(isExpanded ? null : i)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-50 dark:hover:bg-white/[0.01] transition-all"
                >
                  <span className="text-xs sm:text-sm font-sans font-medium text-zinc-800 dark:text-white tracking-tight">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#ffcd75]">
                    {isExpanded ? <X size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 border-t border-zinc-200 dark:border-white/5 pt-3">
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                          {faq.answer}
                        </p>
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
