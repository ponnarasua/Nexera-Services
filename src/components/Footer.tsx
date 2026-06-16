import React from "react";
import Image from "next/image";
import logo from "@/app/logo.png";
import logoName from "@/app/Name.png";
import { Mail } from "lucide-react";

const links = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Why Choose Us", href: "#solutions" },
    { label: "Careers", href: "#" },
  ],
  services: [
    { label: "Software Development", href: "#services" },
    { label: "Educational Solutions", href: "#services" },
    { label: "Cloud Systems", href: "#services" },
    { label: "AI Integration", href: "#services" },
  ],
  solutions: [
    { label: "Academies & Schools", href: "#solutions" },
    { label: "Established Businesses", href: "#solutions" },
    { label: "Startups MVP", href: "#solutions" },
  ],
  portfolio: [
    { label: "Student Platform", href: "#portfolio" },
    { label: "Itinerary Planner", href: "#portfolio" },
    { label: "PDF Analyzer", href: "#portfolio" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background pt-20 pb-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-primary/2 blur-[100px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" className="flex items-center gap-2 group w-fit">
            <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
              <Image 
                src={logo} 
                alt="Nexera Logo" 
                width={32} 
                height={32} 
                className="object-contain" 
              />
            </div>
            <div className="relative h-6 w-24 flex items-center overflow-hidden">
              <Image 
                src={logoName} 
                alt="Nexera" 
                className="object-contain h-full w-auto" 
              />
            </div>
          </a>

          <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-sm">
            Building the Future Through Technology. Nexera Services bridges the gap
            between traditional operations and scaling digital systems.
          </p>

          <a
            href="mailto:nexeraser@gmail.com"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-foreground hover:text-accent-primary dark:hover:text-accent-secondary transition-colors"
          >
            <Mail className="w-4 h-4 text-accent-secondary" />
            nexeraser@gmail.com
          </a>
        </div>

        {/* Links Grid Column */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Company</h4>
            <ul className="space-y-2.5">
              {links.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-text-muted hover:text-foreground transition-colors font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Services</h4>
            <ul className="space-y-2.5">
              {links.services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-text-muted hover:text-foreground transition-colors font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Solutions</h4>
            <ul className="space-y-2.5">
              {links.solutions.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-text-muted hover:text-foreground transition-colors font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Portfolio</h4>
            <ul className="space-y-2.5">
              {links.portfolio.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-text-muted hover:text-foreground transition-colors font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="w-full px-6 md:px-12 lg:px-20 border-t border-card-border/60 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-text-muted font-bold select-none gap-4">
        <span>&copy; 2026 Nexera Services. All Rights Reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
          <a href="#" className="hover:text-foreground">SLA Agreement</a>
        </div>
      </div>
    </footer>
  );
}
