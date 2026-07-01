"use client";

import React, { useState } from "react";
import { Star, ChevronRight, Check } from "lucide-react";
import { SERVICES } from "@/data";

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);

  const selectedService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  const getServiceTimeline = (id: string) => {
    switch (id) {
      case "custom-software": return "6 - 8 Weeks Sprint";
      case "web-development": return "4 - 5 Weeks Sprint";
      case "educational": return "5 - 7 Weeks Sprint";
      case "business-automation": return "3 - 4 Weeks Sprint";
      case "cloud": return "4 - 6 Weeks Sprint";
      case "ai-systems": return "6 - 8 Weeks Sprint";
      default: return "4 - 8 Weeks";
    }
  };

  const getServiceTags = (id: string) => {
    switch (id) {
      case "custom-software": return ["Domain Logic", "Drizzle ORM", "Docker", "Node.js"];
      case "web-development": return ["React 19", "Vite", "Tailwind CSS", "Motion"];
      case "educational": return ["Active Directory", "D3.js Charts", "LMS Core", "CSV Parsing"];
      case "business-automation": return ["Crons", "Webhooks", "Stripe API", "Slack Webhooks"];
      case "cloud": return ["AWS/GCP", "Kubernetes", "Cloud Run", "SLA Monitors"];
      case "ai-systems": return ["Gemini-3.5-flash", "Vector Search", "Express", "Secure Key Proxy"];
      default: return ["TypeScript", "Next.js", "Server Proxy"];
    }
  };

  return (
    <section className="py-24 border-b border-zinc-100 dark:border-white/5 relative z-10 bg-zinc-100/10 dark:bg-zinc-950/20 text-zinc-900 dark:text-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
            02 // STRUCTURAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter leading-[1.0] text-zinc-900 dark:text-white">
            Bespoke Operational Services.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
            Click any capabilities node on the left to see estimated sprint delivery speeds, specialized checklists, and matching tech tags.
          </p>
        </div>

        {/* Split layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="services-interactive-grid">
          
          {/* Left selector list */}
          <div className="lg:col-span-5 space-y-2.5" id="services-selector-list">
            {SERVICES.map((item, index) => {
              const isSelected = activeServiceId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveServiceId(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected 
                      ? "bg-[#ffcd75]/10 border-[#ffcd75] text-zinc-900 dark:text-white font-semibold" 
                      : "bg-white/40 dark:bg-white/[0.01] border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/80 dark:hover:bg-white/[0.03] hover:text-zinc-900 dark:hover:text-white shadow-sm dark:shadow-none"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${isSelected ? "text-[#ffcd75]" : "text-zinc-400 dark:text-zinc-500"}`}>
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-sm font-medium tracking-tight font-sans">
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight size={14} className={isSelected ? "text-[#ffcd75]" : "text-zinc-400 dark:text-zinc-600"} />
                </button>
              );
            })}
          </div>

          {/* Right sticky details card */}
          <div className="lg:col-span-7 lg:sticky lg:top-28" id="services-details-sticky">
            <div className="bg-white/70 dark:bg-zinc-950/70 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden shadow-sm" id="service-sticky-card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcd75]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-start border-b border-zinc-200 dark:border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#ffcd75] uppercase tracking-wider block mb-1">core capability details</span>
                  <h3 className="text-xl sm:text-2xl font-sans font-medium text-zinc-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">duration threshold</span>
                  <span className="text-xs font-mono font-bold text-[#ffcd75] bg-[#ffcd75]/5 border border-[#ffcd75]/20 px-2.5 py-1 rounded-md block mt-1">
                    {getServiceTimeline(activeServiceId)}
                  </span>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                {selectedService.description}
              </p>

              {/* Features Checklist */}
              <div className="space-y-3 mb-6">
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">sprint deployment checks</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <Check className="text-emerald-500 shrink-0" size={13} />
                      <span className="text-xs text-zinc-800 dark:text-white font-sans">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2.5">technologies deployed</h4>
                <div className="flex flex-wrap gap-1.5">
                  {getServiceTags(activeServiceId).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-2.5 py-1 rounded-md shadow-sm dark:shadow-none">
                      {tag}
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
