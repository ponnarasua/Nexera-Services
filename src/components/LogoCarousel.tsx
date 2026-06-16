"use client";

import React from "react";
import { 
  Database,
  Cloud,
  Layers
} from "lucide-react";

interface IconProps {
  className?: string;
}

// Standard SVG paths or Lucide Icons for clean tech display
const technologies = [
  { name: "React", icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" />
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(30 12 12)" />
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(90 12 12)" />
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(150 12 12)" />
      </svg>
    )
  },
  { name: "Next.js", icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M7 17V7l10 10V7" />
      </svg>
    )
  },
  { name: "Node.js", icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )
  },
  { name: "TypeScript", icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 7h10M12 7v10" />
      </svg>
    )
  },
  { name: "MongoDB", icon: (props: IconProps) => <Database className={props.className} /> },
  { name: "PostgreSQL", icon: (props: IconProps) => <Database className={props.className} /> },
  { name: "Supabase", icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  { name: "Firebase", icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    )
  },
  { name: "AWS", icon: (props: IconProps) => <Cloud className={props.className} /> },
  { name: "Docker", icon: (props: IconProps) => <Layers className={props.className} /> },
];

export default function LogoCarousel() {
  return (
    <section className="py-12 border-y border-card-border bg-card-bg/10 backdrop-blur-sm relative overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20 mb-6 text-center">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-text-muted">
          Our Advanced Technology Ecosystem
        </span>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden flex flex-nowrap mask-gradient">
        {/* Left and Right blur covers to hide edge cutoffs */}
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Row */}
        <div className="flex animate-marquee whitespace-nowrap min-w-full items-center gap-12 py-2">
          {technologies.concat(technologies).map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-card-border bg-card-bg/40 text-foreground/70 hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              <tech.icon className="w-5 h-5 text-accent-primary dark:text-accent-secondary" />
              <span className="text-sm font-bold tracking-tight">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
