"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import logoImg from "@/app/logo.png";
import nameImg from "@/app/Name.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-white flex items-center justify-center relative overflow-hidden font-sans">

      {/* Ambient gold blobs */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-[#ffcd75]/8 dark:bg-[#ffcd75]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#ffcd75]/8 dark:bg-[#ffcd75]/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          <Image src={logoImg} alt="Nexera Logo" className="h-8 w-8 object-contain" />
          <Image src={nameImg} alt="NEXERA" className="h-4 w-auto object-contain invert dark:invert-0" />
        </motion.div>

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[120px] sm:text-[160px] font-medium tracking-tighter leading-none bg-gradient-to-br from-zinc-300 via-zinc-200 to-[#ffcd75] dark:from-zinc-700 dark:via-zinc-600 dark:to-[#ffcd75] bg-clip-text text-transparent select-none"
        >
          404
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tighter text-zinc-900 dark:text-white">
            Page not found.
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-sans leading-relaxed max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/"
            className="bg-[#ffcd75] text-zinc-950 font-mono text-xs font-bold py-3.5 px-6 rounded-xl cursor-pointer hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,205,117,0.2)]"
          >
            Back to Home
            <ArrowRight size={13} />
          </a>
          <a
            href="/#contact"
            className="bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/10 font-mono text-xs font-bold py-3.5 px-6 rounded-xl cursor-pointer transition-all"
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </div>
  );
}
