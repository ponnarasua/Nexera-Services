"use client";

import React from "react";
import { Terminal, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import logoImg from "@/app/logo.png";
import nameImg from "@/app/Name.png";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-10 bg-[#09090b] pt-24 pb-12 border-t border-white/15 text-white" id="site-footer">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        
        {/* Large embedded top CTA card */}
        <div className="w-full rounded-[32px] border border-white/15 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-12 text-center relative overflow-hidden group hover:border-[#ffcd75]/30 transition-colors" id="footer-top-cta-card">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffcd75]/30 to-transparent" />
          
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4">
            <Star size={11} className="fill-[#ffcd75] text-[#ffcd75]" />
            let&apos;s collaborate
          </span>

          <h3 className="text-3xl sm:text-4xl font-medium tracking-tighter leading-[1.0] text-white mb-4">
            Ready to transform your <br className="hidden sm:inline" />
            <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">digital presence today?</span>
          </h3>

          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto mb-8 font-sans leading-relaxed">
            Request your custom structural roadmap below or immediately schedule an architect callback.
          </p>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-zinc-950 font-mono text-xs font-bold py-3.5 px-6 rounded-full cursor-pointer hover:bg-[#ffcd75] hover:text-zinc-950 transition-all shadow-[0_0_15px_rgba(255,205,117,0.15)] inline-flex items-center gap-2"
          >
            Get Custom Blueprint
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Branding, sitemaps and social links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/5 pt-12">
          
          {/* Column 1: Branding */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2 cursor-pointer select-none group">
              <Image src={logoImg} alt="Nexera Logo" className="h-8 w-8 object-contain group-hover:scale-105 transition-transform duration-300" />
              <Image src={nameImg} alt="NEXERA" className="h-4 w-auto object-contain transition-all duration-300" />
            </div>
            <p className="text-[11px] text-zinc-500 font-sans leading-relaxed max-w-xs">
              Next-generation systems architecture development. Deployed completely using type-safe frameworks and secure server-side proxies.
            </p>
            <div className="text-[10px] text-zinc-600 font-mono">
              © {new Date().getFullYear()} Nexera Services. All operational rights reserved.
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2.5 text-left">
            <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Sitemap Node</h5>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <button onClick={() => scrollToSection("hero")} className="text-zinc-500 hover:text-[#ffcd75] transition-colors text-left cursor-pointer">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-zinc-500 hover:text-[#ffcd75] transition-colors text-left cursor-pointer">About Us</button>
              <button onClick={() => scrollToSection("services")} className="text-zinc-500 hover:text-[#ffcd75] transition-colors text-left cursor-pointer">Services</button>
              <button onClick={() => scrollToSection("solutions")} className="text-zinc-500 hover:text-[#ffcd75] transition-colors text-left cursor-pointer">Solutions</button>
              <button onClick={() => scrollToSection("timeline")} className="text-zinc-500 hover:text-[#ffcd75] transition-colors text-left cursor-pointer">Process</button>
            </div>
          </div>

          {/* Column 3: Contact & Links */}
          <div className="md:col-span-4 space-y-3.5 text-left">
            <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Global Channels</h5>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
              Get in touch directly via secure remote email channels, or follow our continuous repository releases.
            </p>
            
            <div className="flex flex-col gap-1.5 text-[10px] font-mono text-zinc-500">
              <a href="mailto:nexeraser@gmail.com" className="hover:text-[#ffcd75] transition-colors flex items-center gap-1.5">
                <Mail size={12} className="text-[#ffcd75]" />
                nexeraser@gmail.com
              </a>
              <p className="text-zinc-600 text-[10px] font-sans leading-relaxed mt-1">
                Reach out directly via email for project inquiries, consultations, or partnership opportunities.
              </p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

// Small sub-component for layout consistency
function Star({ size, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 16}
      height={size || 16}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
