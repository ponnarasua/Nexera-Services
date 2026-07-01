"use client";

import React from "react";
import { Cpu } from "lucide-react";

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  
  if (t.includes("react")) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4 h-4 shrink-0" style={{ minWidth: "16px" }}>
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  
  if (t.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-zinc-900 dark:text-white" style={{ minWidth: "16px" }}>
        <path d="M18.62 17.55L9.68 6.07H8v11.85h1.76v-8.77l8.28 10.66c.21-.18.42-.37.58-.57zM16.4 6.07h1.76v5.82L16.4 9.42z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    );
  }
  
  if (t.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#68a063]" style={{ minWidth: "16px" }}>
        <path d="M12 2L3.5 6.9v9.8L12 22l8.5-5.3v-9.8L12 2zM10.8 17.8l-4.5-2.8v-5l4.5 2.8v5zm1.2-6.2l-4.5-2.8L12 6l4.5 2.8-4.5 2.8zm5.2 3.4l-4.5 2.8v-5l4.5-2.8v5z" />
      </svg>
    );
  }
  
  if (t.includes("supabase")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#3ecf8e]" style={{ minWidth: "16px" }}>
        <path d="M21.36 11.02a.75.75 0 00-.51-.87L13.1 7.65V1.26a.75.75 0 00-1.25-.56L2.64 11.98a.75.75 0 00.51.87l7.75 2.5v6.39a.75.75 0 001.25.56l9.21-11.28z" />
      </svg>
    );
  }
  
  if (t.includes("typescript")) {
    return (
      <svg viewBox="0 0 100 100" className="w-4 h-4 shrink-0 rounded" style={{ minWidth: "16px" }}>
        <rect width="100" height="100" fill="#3178c6" rx="12" />
        <path d="M42 34h-14v8h6v24h8V42h6v-8H42zm24 6c-4 0-7 2-7 6s3 5 7 6c3 1 4 2 4 4s-2 3-5 3c-3 0-5-1-6-3l-5 4c3 4 8 6 11 6c7 0 12-4 12-10s-3-7-8-8c-3-1-5-2-5-4s2-2 4-2c2 0 4 1 5 2l4-5c-3-3-6-4-8-4z" fill="white" />
      </svg>
    );
  }
  
  if (t.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#336791]" style={{ minWidth: "16px" }}>
        <path d="M12.1 2.5c-4.4 0-7.8 2.2-9.4 5.3-.6 1.1-.9 2.4-.9 3.8 0 2.2.8 4.2 2.2 5.7.8.9 1.8 1.6 3 2.1.8.3 1.6.5 2.5.6V22h1.4v-2c1.4.1 2.7-.1 3.9-.6l2.1 2.1 1-.7-2.1-2.1c1.3-.9 2.4-2.2 3.1-3.7.8-1.8 1.1-3.8 1.1-5.9 0-3.6-2.1-6.6-5.9-6.6zm-1.8 11.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" />
      </svg>
    );
  }
  
  if (t.includes("drizzle")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#c5f74f]" style={{ minWidth: "16px" }}>
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    );
  }
  
  if (t.includes("express")) {
    return (
      <span className="w-8 h-4 shrink-0 bg-zinc-950 dark:bg-white rounded px-1 text-white dark:text-zinc-950 font-mono font-black flex items-center justify-center text-[7px] tracking-tighter" style={{ minWidth: "22px", height: "14px" }}>
        EX
      </span>
    );
  }
  
  if (t.includes("gemini")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" style={{ minWidth: "16px" }}>
        <defs>
          <linearGradient id="gemini-grad-marquee-next" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9bc5ff" />
            <stop offset="50%" stopColor="#2b66ff" />
            <stop offset="100%" stopColor="#ff9bc5" />
          </linearGradient>
        </defs>
        <path d="M12 2C12 2 13 8 18 8C13 8 12 14 12 14C12 14 11 8 6 8C11 8 12 2 12 2Z" fill="url(#gemini-grad-marquee-next)" />
        <path d="M17 13C17 13 17.5 16 20 16C17.5 16 17 19 17 19C17 19 16.5 16 14 16C16.5 16 17 13 17 13Z" fill="url(#gemini-grad-marquee-next)" />
      </svg>
    );
  }
  
  if (t.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#38bdf8]" style={{ minWidth: "16px" }}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }
  
  if (t.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#2496ed]" style={{ minWidth: "16px" }}>
        <path d="M13.983 8.871h-1.996V6.874h1.996v1.997zM11.102 8.871H9.11V6.874h1.992v1.997zm-2.88 0H6.228V6.874h1.994v1.997zm-2.887 0H2.441V6.874h1.994v1.997zm2.887-2.889H6.228V3.986h1.994v1.996zm2.88-2.887h-1.992V1.099h1.992v1.998zm0 2.887H9.11V3.986h1.992v1.996zm2.881 0h-1.996V3.986h1.996v1.996zm2.887 2.889h-1.993V6.874h1.993v1.997zM23.23 9.403c-.225-.333-.538-.6-.91-.767-.37-.167-.78-.235-1.19-.2l-1.077.094V5.731l-.01-.01H1.056c-.058 0-.11.022-.158.051-.048.028-.088.073-.11.127l-.022.054V17.06c0 .12.042.23.116.32a.541.541 0 00.373.19h15.938c.642 0 1.258-.216 1.76-.61.503-.394.869-.942 1.047-1.562.36-.126.685-.34.945-.618.261-.279.444-.623.53-1.002.324-.316.559-.724.675-1.173.116-.449.126-.922.029-1.376-.097-.455-.31-.873-.618-1.218-.309-.346-.71-.595-1.164-.725z" />
      </svg>
    );
  }
  
  return <Cpu size={14} className="text-[#ffcd75] shrink-0" />;
};

const items = [
  "React 19", "Next.js 15", "Node.js Core", "Supabase", "TypeScript", "PostgreSQL",
  "Drizzle ORM", "Express Servers", "Gemini-3.5-flash", "Tailwind CSS", "Docker Containers"
];

export default function LogoCarousel() {
  return (
    <section className="py-8 bg-zinc-100 dark:bg-zinc-950 border-y border-zinc-200/80 dark:border-white/5 overflow-hidden relative z-10 group">
      <div className="flex w-full overflow-hidden select-none">
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center gap-6 whitespace-nowrap">
          {items.concat(items).concat(items).map((node, i) => (
            <div 
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 backdrop-blur-md text-xs font-mono tracking-wider text-zinc-700 dark:text-zinc-300"
            >
              {getTechIcon(node)}
              {node}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
