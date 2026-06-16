"use client";

import React from "react";
import { 
  ArrowRight, 
  MapPin, 
  FileText, 
  GraduationCap, 
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "student-management",
    title: "Student Management Platform",
    category: "EdTech Platform",
    description: "A secure, multi-tenant administrative portal designed for schools and academies. Facilitates real-time parent notifications, instant grading, automated attendance logs, and high-performance data queries.",
    features: ["Attendance tracking system", "Interactive grading results", "Student & Parent Dashboard", "Performance Analytics"],
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    icon: GraduationCap,
  },
  {
    id: "travel-planner",
    title: "Travel Itinerary Planner",
    category: "Consumer Web Application",
    description: "A collaborative trip planner that maps itinerary items in real time, manages shared travel wallets, splits expenses, and suggests tourist spots based on user profiles.",
    features: ["Real-time trip planning", "Shared budget tracking", "Smart destination discovery", "Collaborative itinerary editing"],
    tags: ["React Native", "Node.js", "MongoDB"],
    icon: MapPin,
  },
  {
    id: "pdf-analyzer",
    title: "AI Document PDF Analyzer",
    category: "Intelligent SaaS Tool",
    description: "A modern document intelligence platform capable of parsing large-scale PDF reports, highlighting critical figures, rendering page extracts, and resolving questions with customized AI prompts.",
    features: ["Secure AI document parsing", "Instant executive summaries", "Key statistical insights", "Custom document intelligence Q&A"],
    tags: ["Python FastAPI", "Next.js", "Pinecone Vector DB"],
    icon: FileText,
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-background/50 border-t border-card-border">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card-bg/50 text-xs font-bold uppercase tracking-wider text-accent-primary dark:text-accent-secondary">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Our Selected <br />
            <span className="text-gradient">Client Workpieces</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
            Explore a few of the robust, high-performance web products we designed,
            built, and deployed for startups and academic institutions.
          </p>
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative rounded-3xl p-8 glass-panel overflow-hidden group select-none flex flex-col justify-between min-h-[460px] hover:translate-y-[-4px] transition-all duration-300"
              >
                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background: `radial-gradient(circle 200px at 50% 50%, rgba(99, 102, 241, 0.08), transparent)`,
                  }}
                />

                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Category Badge */}
                  <span className="text-[10px] uppercase font-bold text-accent-secondary tracking-widest block mb-2">
                    {proj.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold tracking-tight mb-4 text-foreground">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {proj.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs font-semibold text-text-muted">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex gap-1.5 flex-wrap pt-4 border-t border-card-border/50 mb-6">
                    {proj.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[9px] font-bold border border-card-border bg-card-bg/40 text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary dark:text-accent-secondary hover:underline group-hover:translate-x-1 transition-transform duration-200"
                  >
                    View Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

