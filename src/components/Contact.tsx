"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, Sparkles, Calendar, 
  Clock, ShieldCheck, 
  Mail, Star, ChevronRight
} from "lucide-react";
import ParticleOrbCanvas from "./ParticleOrbCanvas";

interface RoadmapStep {
  step: string;
  duration: string;
  desc: string;
}

interface RoadmapResult {
  success: boolean;
  message: string;
  generatedRoadmap: RoadmapStep[];
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Custom Software Development");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  // Field-level validation errors
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [messageErr, setMessageErr] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [roadmapResult, setRoadmapResult] = useState<RoadmapResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateFields = () => {
    let valid = true;
    setNameErr(""); setEmailErr(""); setMessageErr("");
    if (!name.trim() || name.trim().length < 2) { setNameErr("Please enter your full name (at least 2 characters)."); valid = false; }
    if (!email.trim() || !emailRegex.test(email.trim())) { setEmailErr("Please enter a valid email address."); valid = false; }
    if (!message.trim() || message.trim().length < 10) { setMessageErr("Please describe your requirements (at least 10 characters)."); valid = false; }
    return valid;
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;

    setIsSubmitting(true);
    setRoadmapResult(null);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          service,
          budget: budget.trim() ? (budget.trim().startsWith("₹") ? budget.trim() : `₹${budget.trim()}`) : "Flexible",
          message
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to submit inquiry.");
      }

      const data = await response.json();
      setRoadmapResult(data);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Failed to submit inquiry. Please try again.";
      setError(errorMsg);
      // Fallback local calculations
      setTimeout(() => {
        setRoadmapResult({
          success: true,
          message: "Local offline dispatcher initialized.",
          generatedRoadmap: [
            { step: "Phase 1: Discovery & Concept Scope", duration: "1-2 weeks", desc: `Discovery sessions, system-boundary blueprints for your custom ${service} project.` },
            { step: "Phase 2: High-Fidelity UI Design", duration: "1-2 weeks", desc: "Crafting beautiful obsidian glassmorphic screens featuring Playfair typography." },
            { step: "Phase 3: Agile Development Sprints", duration: "3-4 weeks", desc: "Bi-weekly sprint iterations accompanied by interactive preview links." },
            { step: "Phase 4: Launch & SLA Orchestration", duration: "Ongoing support", desc: "Zero-downtime containerized launch with automated error reporting." }
          ]
        });
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleMeet = () => {
    const formattedBudget = budget.trim() ? (budget.trim().startsWith("₹") ? budget.trim() : `₹${budget.trim()}`) : "Flexible";
    window.location.href = `mailto:nexeraser@gmail.com?subject=Nexera Services - Consultation Inquiry (${service})&body=Hi Nexera Team,%0D%0A%0D%0AMy name is ${name || "Client"} and I would like to schedule a 30-minute Google Meet consultation to explore modern solutions for my business.%0D%0A%0D%0ADetails:%0D%0A- Company: ${company || "N/A"}%0D%0A- Phone: ${phone || "Not provided"}%0D%0A- Preferred Service: ${service}%0D%0A- Estimated Budget: ${formattedBudget}%0D%0A%0D%0ALooking forward to connecting!`;
  };

  return (
    <section className="py-24 border-b border-zinc-150 dark:border-white/5 relative z-10 text-zinc-900 dark:text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
            07 // DYNAMIC SYSTEM CONFIG
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter leading-[1.0] text-zinc-900 dark:text-white">
            Launch Your Sprint Roadmap.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
            Describe your organizational targets below. Nexera will instantly render a personalized 4-Phase project blueprint schematic.
          </p>
        </div>

        {/* Form Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="contact-form-layout">
          {/* Left Panel: Contact Fields */}
          <div className="lg:col-span-7 bg-white/70 dark:bg-zinc-950/70 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between" id="inquiry-form-card">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffcd75]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                  <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
                  Interactive Form Ingress
                </span>
              </div>

              <h4 className="text-2xl font-sans font-medium tracking-tighter leading-none bg-gradient-to-br from-zinc-900 via-zinc-800 to-[#ffcd75] dark:from-white dark:via-white dark:to-[#ffcd75] bg-clip-text text-transparent mb-3">
                Initiate Project Blueprint
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6">
                Describe your operational bottlenecks, registrar volumes, or AI automation goals. Nexera will formulate a tailored sprint roadmap.
              </p>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => { setName(e.target.value); if (nameErr) setNameErr(""); }}
                      onBlur={() => { if (!name.trim() || name.trim().length < 2) setNameErr("Please enter your full name (at least 2 characters)."); }}
                      placeholder="Your full name"
                      className={`w-full bg-white/50 dark:bg-white/5 border rounded-xl px-4 py-3 text-xs text-zinc-800 dark:text-white focus:outline-none focus:border-[#ffcd75] transition-all ${nameErr ? "border-red-400 dark:border-red-500" : "border-zinc-200 dark:border-white/10"}`}
                    />
                    {nameErr && <p className="text-[10px] text-red-500 mt-1 font-sans">{nameErr}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (emailErr) setEmailErr(""); }}
                      onBlur={() => { if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) setEmailErr("Please enter a valid email address."); }}
                      placeholder="you@example.com"
                      className={`w-full bg-white/50 dark:bg-white/5 border rounded-xl px-4 py-3 text-xs text-zinc-800 dark:text-white focus:outline-none focus:border-[#ffcd75] transition-all ${emailErr ? "border-red-400 dark:border-red-500" : "border-zinc-200 dark:border-white/10"}`}
                    />
                    {emailErr && <p className="text-[10px] text-red-500 mt-1 font-sans">{emailErr}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">Company / University</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company or institution"
                      className="w-full bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-zinc-800 dark:text-white focus:outline-none focus:border-[#ffcd75] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-zinc-800 dark:text-white focus:outline-none focus:border-[#ffcd75] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">Custom Service Selection</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-zinc-800 dark:text-white focus:outline-none focus:border-[#ffcd75] transition-all cursor-pointer"
                  >
                    <option value="Custom Software Development" className="text-zinc-800 dark:text-white bg-white dark:bg-zinc-900">Custom Software Development</option>
                    <option value="Web Development" className="text-zinc-800 dark:text-white bg-white dark:bg-zinc-900">Web Development</option>
                    <option value="Educational Solutions" className="text-zinc-800 dark:text-white bg-white dark:bg-zinc-900">Educational Solutions</option>
                    <option value="Business Automation" className="text-zinc-800 dark:text-white bg-white dark:bg-zinc-900">Business Automation</option>
                    <option value="Cloud Solutions" className="text-zinc-800 dark:text-white bg-white dark:bg-zinc-900">Cloud Solutions</option>
                    <option value="AI Systems" className="text-zinc-800 dark:text-white bg-white dark:bg-zinc-900">AI Systems</option>
                  </select>
                </div>

                {/* Budget Limit typing box in Rupees */}
                <div className="p-4 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Budget Limit (in ₹):</span>
                    <span className="text-xs font-mono font-bold text-[#ffcd75]">
                      {budget.trim() ? (budget.trim().startsWith("₹") ? budget.trim() : `₹${budget.trim()}`) : "Flexible"}
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs font-mono text-[#ffcd75] font-bold">₹</span>
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9,\s-]/g, ""); // Allow digits, commas, spaces, dashes
                        setBudget(val);
                      }}
                      placeholder="e.g. 1,50,000"
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl pl-7 pr-4 py-2 text-xs text-zinc-800 dark:text-white focus:outline-none focus:border-[#ffcd75] transition-all font-mono"
                    />
                  </div>
                  <p className="text-[10px] text-zinc-500 font-sans italic mt-1.5">
                    Type your expected or limit project allocation directly in Indian Rupees (leave blank for flexible).
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">Message Details *</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); if (messageErr) setMessageErr(""); }}
                    onBlur={() => { if (!message.trim() || message.trim().length < 10) setMessageErr("Please describe your requirements (at least 10 characters)."); }}
                    placeholder="Describe key requirements, deadlines, or integrations required..."
                    className={`w-full bg-white/50 dark:bg-white/5 border rounded-xl px-4 py-3 text-xs text-zinc-800 dark:text-white focus:outline-none focus:border-[#ffcd75] transition-all resize-none ${messageErr ? "border-red-400 dark:border-red-500" : "border-zinc-200 dark:border-white/10"}`}
                  />
                  {messageErr && <p className="text-[10px] text-red-500 mt-1 font-sans">{messageErr}</p>}
                </div>

                {error && (
                  <div className="p-3 text-xs text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl">
                    {error}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none bg-[#ffcd75] text-zinc-950 font-mono text-xs font-bold py-3.5 px-6 rounded-xl cursor-pointer hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all flex items-center justify-center gap-2 shrink-0 disabled:bg-zinc-700 disabled:text-zinc-500"
                    id="submit-inquiry-form-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="animate-spin" size={14} />
                        Compiling Schematic...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Build Custom Blueprint
                      </>
                    )}
                  </button>

                  <span className="text-zinc-400 dark:text-zinc-600 text-xs font-mono text-center hidden sm:inline">or</span>

                  <button
                    type="button"
                    onClick={handleScheduleMeet}
                    className="flex-1 sm:flex-none bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/10 font-mono text-xs font-bold py-3.5 px-6 rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    id="google-meet-cta-btn"
                  >
                    <Calendar size={14} className="text-[#ffcd75]" />
                    Schedule Google Meet Call
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Panel: Canvas-based Orb / dynamic blueprint */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-sidebar-blueprint">
            <AnimatePresence mode="wait">
              {roadmapResult ? (
                <motion.div
                  key="roadmap"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/70 dark:bg-zinc-950/70 p-6 rounded-3xl border border-[#ffcd75] dark:border-[#ffcd75]/30 flex-1 flex flex-col justify-between relative overflow-hidden"
                  id="dynamic-blueprint-card"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcd75]/5 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#ffcd75] bg-[#ffcd75]/10 border border-[#ffcd75]/20 px-2.5 py-0.5 rounded-full mb-3">
                      <Sparkles size={11} className="animate-pulse" />
                      DYNAMIC SCHEMATIC RENDER
                    </span>
                    <h5 className="text-lg font-sans font-medium text-zinc-900 dark:text-white mb-1">
                      Blueprint: {service}
                    </h5>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                      Formulated on {new Date().toLocaleDateString()} for allocations: <strong className="text-[#ffcd75]">{budget.trim() ? (budget.trim().startsWith("₹") ? budget.trim() : `₹${budget.trim()}`) : "Flexible / TBD"}</strong>
                    </p>

                    {/* Vertical timeline steps */}
                    <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200 dark:before:bg-white/10 pl-1.5 mt-6" id="dynamic-roadmap-timeline">
                      {roadmapResult.generatedRoadmap.map((item: RoadmapStep, i: number) => (
                        <div key={i} className="relative pl-6 group">
                          <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white dark:bg-zinc-950 border border-[#ffcd75] group-hover:bg-[#ffcd75] transition-colors" />
                          
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-xs font-sans font-bold text-zinc-900 dark:text-white leading-none">{item.step}</span>
                              <span className="text-[9px] font-mono text-[#ffcd75] bg-[#ffcd75]/5 px-1.5 py-0.5 rounded border border-[#ffcd75]/10">{item.duration}</span>
                            </div>
                            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 font-mono">STATUS: BLUEPRINT_OK</span>
                    <button
                      onClick={handleScheduleMeet}
                      className="text-xs font-mono font-semibold text-[#ffcd75] hover:text-zinc-900 dark:hover:text-white inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      Confirm & Schedule
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="static-info"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/70 dark:bg-zinc-950/70 p-6 rounded-3xl border border-zinc-200 dark:border-white/10 flex-1 flex flex-col justify-between relative overflow-hidden"
                  id="contact-info-card"
                >
                  {/* Particle Orb Canvas */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <ParticleOrbCanvas />
                  </div>

                  <div className="relative z-10 space-y-4 mt-2">
                    <div>
                      <h5 className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-1">
                        Nexera Ingress Node
                      </h5>
                      <h4 className="text-lg font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
                        Secure & Compliant Architecture
                      </h4>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-2.5 items-start">
                        <ShieldCheck size={14} className="text-[#ffcd75] shrink-0 mt-0.5" />
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans text-left">
                          <strong className="text-zinc-800 dark:text-white font-medium">100% Isolated Server Sessions:</strong> All client queries run inside isolated server environments. No API keys are leaked client-side.
                        </p>
                      </div>

                      <div className="flex gap-2.5 items-start">
                        <Clock size={14} className="text-[#ffcd75] shrink-0 mt-0.5" />
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans text-left">
                          <strong className="text-zinc-800 dark:text-white font-medium">SLA-Backed Performance:</strong> Custom APIs yield sub-15ms response latencies, backed by persistent container health diagnostics.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-zinc-200 dark:border-white/5 text-[11px] font-mono text-zinc-500 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <Mail size={12} className="text-[#ffcd75] shrink-0" />
                      <span className="text-zinc-600 dark:text-zinc-400">Email Channel: nexeraser@gmail.com</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
