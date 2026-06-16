"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Play, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import HlsVideoBackground from "@/components/HlsVideoBackground";

export default function HlsLandingPage() {
  // Big Buck Bunny HLS Test Stream URL
  const hlsStreamUrl = "https://test-streams.mux.dev/x36xhz/x36xhz.m3u8";

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between text-white select-none">
      {/* 1. Full-screen Video Background */}
      <HlsVideoBackground src={hlsStreamUrl} />

      {/* 2. Glassmorphic Navigation Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full px-6 py-4 flex items-center justify-between border-b border-white/5 bg-black/10 backdrop-blur-md sticky top-0 z-50"
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center font-bold text-sm tracking-tight text-white group-hover:scale-105 transition-transform duration-200 shadow-md">
            N
          </div>
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-accent-secondary transition-colors duration-200">
            Nexera <span className="text-accent-secondary font-black">Studio</span>
          </span>
        </Link>

        {/* Back navigation */}
        <Link
          href="/"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-accent-secondary/50 bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-bold text-white transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main</span>
        </Link>
      </motion.header>

      {/* Spacer to force content to the bottom */}
      <div className="flex-1" />

      {/* 3. Hero Content Positioned in Bottom-Left Corner */}
      <main className="w-full max-w-4xl px-8 sm:px-12 md:px-16 pb-12 sm:pb-16 md:pb-20 relative z-30 select-text">
        <div className="space-y-6 max-w-2xl text-left">
          
          {/* Subtle glowing tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-[10px] sm:text-xs font-black uppercase tracking-widest text-accent-secondary shadow-lg animate-float"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-secondary animate-pulse" />
            <span>Interactive Media Node</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white"
          >
            Immersive Stream <br />
            <span className="text-gradient">Architectures.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-white/75 text-sm sm:text-base leading-relaxed max-w-lg"
          >
            Experience lightning-fast HTTP Live Streaming (HLS) wrapped inside premium
            glassmorphic elements. Seamlessly scale video overlays for web platforms.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => alert("Stream initialized!")}
              className="px-6 py-3.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all select-none cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Initialize Stream</span>
            </button>

            <Link
              href="https://github.com/ponnarasua/Nexera-Services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-white/10 hover:border-white/20 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all select-none cursor-pointer"
            >
              <span>Explore Code</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
