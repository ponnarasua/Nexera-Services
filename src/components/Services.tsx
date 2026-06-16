"use client";

import React, { useState } from "react";
import { 
  Terminal,
  Globe, 
  Smartphone, 
  Cloud, 
  Bot, 
  Settings, 
  ArrowUpRight,
  Check,
  Clock,
  Layers,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    icon: Terminal,
    desc: "Enterprise databases, customized workflow automation pipelines, and scalable APIs.",
    bullets: ["Enterprise System Integration", "Database Architectures", "Custom REST/GraphQL APIs", "Workflow Automation triggers"],
    gradient: "from-accent-primary/15 to-accent-tertiary/15",
    glowColor: "rgba(99, 102, 241, 0.12)",
    duration: "4 - 8 Weeks",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "GraphQL", "Docker"],
    deliverableDetail: "Enterprise-grade software custom tailored to your business rules. Includes fully documented API routers, normalized SQL schemas, and security-hardened server protocols."
  },
  {
    title: "SaaS & Web Product Engineering",
    icon: Globe,
    desc: "Full-stack SaaS solutions, subscription billing setups, and custom management dashboards.",
    bullets: ["Full-Stack Next.js Apps", "Multi-tenant SaaS Platforms", "Stripe Billing Integrations", "Optimized Admin Dashboards"],
    gradient: "from-accent-tertiary/15 to-accent-primary/15",
    glowColor: "rgba(139, 92, 246, 0.12)",
    duration: "3 - 6 Weeks",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe", "Prisma"],
    deliverableDetail: "High-performance modular SaaS products. Features robust support for multi-tenant subscription tiers, subscription billing hooks, user workspaces, and headless CMS integrations."
  },
  {
    title: "Mobile Application Engineering",
    icon: Smartphone,
    desc: "Native iOS/Android applications, RN/Expo cross-compiling, and store submission.",
    bullets: ["iOS & Android Apps", "RN / Expo Cross-Platform", "App Store Submission", "Mobile API Syncing"],
    gradient: "from-accent-secondary/15 to-accent-primary/15",
    glowColor: "rgba(6, 182, 212, 0.12)",
    duration: "4 - 7 Weeks",
    techStack: ["React Native", "Expo", "App Store Connect", "Push Notifications"],
    deliverableDetail: "Cross-platform mobile applications for iOS and Android compiled from a single source. Complete with push notifications, offline caching, biometrics, and submission guidance."
  },
  {
    title: "Cloud & DevSecOps Solutions",
    icon: Cloud,
    desc: "AWS/GCP serverless architectures, CI/CD automated deployment, and safety reviews.",
    bullets: ["AWS/GCP Deployments", "Terraform IaC Scripting", "CI/CD Deployment Pipelines", "Security (VAPT) Reviews"],
    gradient: "from-accent-primary/15 to-accent-secondary/15",
    glowColor: "rgba(99, 102, 241, 0.12)",
    duration: "2 - 3 Weeks",
    techStack: ["AWS", "Terraform", "Kubernetes", "GitHub Actions", "Docker"],
    deliverableDetail: "Secure, automated cloud staging and production clusters. Features automated deployment scripts, continuous integration checks, server load balancing, and VAPT audit readiness."
  },
  {
    title: "AI Integration & Cognitive Systems",
    icon: Bot,
    desc: "Custom LLM integrations, semantic databases, and smart chatbot workflows.",
    bullets: ["Generative AI & LLM Sync", "Pinecone Vector Search", "Semantic Q&A Databases", "Smart Chatbot Workflows"],
    gradient: "from-accent-secondary/15 to-accent-tertiary/15",
    glowColor: "rgba(6, 182, 212, 0.12)",
    duration: "3 - 5 Weeks",
    techStack: ["OpenAI API", "LangChain", "Pinecone", "Python FastAPI"],
    deliverableDetail: "Cognitive workflow modules linking Large Language Models to your private database context. Includes semantic searching, smart parsing engines, and custom model completions."
  },
  {
    title: "Maintenance & Managed IT Services",
    icon: Settings,
    desc: "24/7 server health monitoring, monthly dependencies patches, and dedicated team availability.",
    bullets: ["24/7 Uptime Monitoring", "Monthly Security Patches", "Database Backups", "SLA Support Channels"],
    gradient: "from-accent-tertiary/15 to-accent-secondary/15",
    glowColor: "rgba(167, 139, 250, 0.12)",
    duration: "Continuous / SLA",
    techStack: ["Sentry", "New Relic", "Dependabot", "Docker Compose"],
    deliverableDetail: "Full infrastructure support SLA. We run automated uptime tracking, immediate vulnerability patches, weekly automated backups, and maintain clean library dependencies."
  }
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = services[activeIdx];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background/50 border-t border-card-border">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent-secondary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card-bg/50 text-xs font-bold uppercase tracking-wider text-accent-primary dark:text-accent-secondary">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Tailored Services for <br />
            <span className="text-gradient">Digital Transformation</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
            We architect, develop, and scale modern systems that simplify operations,
            increase output, and secure digital assets.
          </p>
        </div>

        {/* Services Split Layout Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Services Selector Menu (Desktop & Mobile) */}
          <div className="lg:col-span-6 space-y-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeIdx === idx;

              return (
                <div key={service.title}>
                  <div
                    onClick={() => setActiveIdx(idx)}
                    className={`p-5 rounded-2xl border text-left cursor-pointer select-none transition-all duration-300 ${
                      isActive 
                        ? "bg-foreground/5 dark:bg-white/5 border-accent-secondary/50 shadow-lg scale-[1.01]" 
                        : "bg-transparent border-card-border/60 hover:bg-foreground/2 dark:hover:bg-white/2"
                    }`}
                  >
                    <div className="flex gap-4 items-start">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 bg-foreground/5 dark:bg-white/5 ${
                        isActive ? "text-accent-secondary border-accent-secondary/30" : "text-text-muted border-card-border"
                      }`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>

                      <div className="space-y-1 flex-1">
                        <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-foreground flex items-center justify-between">
                          {service.title}
                          <ArrowUpRight className={`w-3.5 h-3.5 transition-all duration-300 ${
                            isActive ? "opacity-100 translate-x-0.5 -translate-y-0.5 text-accent-secondary" : "opacity-30"
                          }`} />
                        </h3>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    {/* Mobile view only: Dynamic Accordion deliverables inline */}
                    <div className="lg:hidden">
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-card-border/50 space-y-4"
                          >
                            {/* Duration & Blueprint */}
                            <div className="grid grid-cols-2 gap-3 text-[11px] font-semibold text-text-muted">
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-accent-secondary" />
                                <span>{service.duration} Delivery</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-accent-tertiary" />
                                <span>Free Blueprint</span>
                              </div>
                            </div>

                            {/* Bullet Features */}
                            <div className="space-y-2">
                              <h4 className="text-[11px] font-extrabold uppercase text-foreground/80 tracking-wider">Features Included</h4>
                              <ul className="space-y-1.5">
                                {service.bullets.map((bullet) => (
                                  <li key={bullet} className="flex items-start gap-2 text-xs text-text-muted">
                                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Detailed Scope Statement */}
                            <div className="space-y-1 p-3 rounded-lg bg-foreground/2 dark:bg-white/2 border border-card-border/40">
                              <span className="text-[10px] font-bold text-accent-primary dark:text-accent-secondary block uppercase">Delivery Outline</span>
                              <p className="text-[11px] text-text-muted leading-relaxed">{service.deliverableDetail}</p>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {service.techStack.map((tech) => (
                                <span key={tech} className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-foreground/5 dark:bg-white/5 border border-card-border text-text-muted">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Glass Details Panel (Desktop Sticky Only) */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl p-8 glass-panel border-card-border shadow-2xl space-y-6"
              >
                {/* Panel Header */}
                <div className="flex justify-between items-center pb-4 border-b border-card-border/50">
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase text-accent-secondary">Service Parameters</span>
                    <h3 className="text-xl font-extrabold tracking-tight text-foreground">{activeService.title}</h3>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 bg-foreground/5 dark:bg-white/5 border-card-border text-accent-secondary`}>
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Duration & Delivery Timeframe */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-card-border bg-foreground/2 dark:bg-white/2 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-secondary uppercase">
                      <Clock className="w-4 h-4" />
                      <span>Timeline</span>
                    </div>
                    <span className="text-sm font-extrabold text-foreground">{activeService.duration}</span>
                  </div>

                  <div className="p-4 rounded-xl border border-card-border bg-foreground/2 dark:bg-white/2 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-tertiary uppercase">
                      <Sparkles className="w-4 h-4" />
                      <span>SLA / Blueprint</span>
                    </div>
                    <span className="text-sm font-extrabold text-foreground">Custom Blueprint</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase text-text-muted tracking-wider">Scope Deliverables</h4>
                  <ul className="space-y-2.5">
                    {activeService.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs font-semibold text-text-muted">
                        <div className="w-4 h-4 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detailed Deliverables Statement */}
                <div className="p-4 rounded-2xl border border-accent-primary/10 bg-accent-primary/5 space-y-2">
                  <span className="text-xs font-extrabold text-accent-primary dark:text-accent-secondary uppercase block">Service Description</span>
                  <p className="text-xs text-text-muted leading-relaxed font-semibold">{activeService.deliverableDetail}</p>
                </div>

                {/* Tech Stack used */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted uppercase">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Technologies & Frameworks</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeService.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full text-xs font-bold bg-foreground/5 dark:bg-white/5 border border-card-border text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action button linking to Contact Form */}
                <div className="pt-4 border-t border-card-border/50">
                  <a
                    href="#contact"
                    className="w-full py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-accent-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-xs"
                  >
                    Request Blueprint for {activeService.title}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
