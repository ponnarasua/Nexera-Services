"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import FaqAccordion from "@/components/FaqAccordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  // Cursor radial glow tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-white selection:bg-[#ffcd75]/25 selection:text-[#ffcd75] relative overflow-x-hidden font-sans radial-glow" id="app-root">
      
      {/* Grid Overlay background */}
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none z-0" />

      {/* Decorative ambient gold lighting blobs */}
      <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-[#ffcd75]/10 dark:bg-[#ffcd75]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-[#ffcd75]/10 dark:bg-[#ffcd75]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] bg-[#ffcd75]/8 dark:bg-[#ffcd75]/2 rounded-full blur-[120px] pointer-events-none" />

      <Navbar />
      <main className="flex flex-col flex-1 w-full relative z-10">
        <Hero />
        <LogoCarousel />
        <About />
        <Services />
        <Solutions />
        <WhyChooseUs />
        <ProcessTimeline />
        <FaqAccordion />
        <Contact />
      </main>
      <Footer />
      
    </div>
  );
}
