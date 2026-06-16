"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import logo from "@/app/logo.png";
import logoName from "@/app/Name.png";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect if page is scrolled to the bottom to force active section to contact
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20% 0px -30% 0px" }
    );

    const sections = ["home", "about", "services", "solutions", "portfolio", "process", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Floating Glass Navbar Wrapper */}
      <header className="fixed top-4 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 w-full pointer-events-none flex justify-center">
        <div 
          className={`w-full px-6 py-3 flex items-center justify-between pointer-events-auto rounded-2xl acrylic-navbar ${
            scrolled 
              ? "acrylic-navbar-scrolled bg-white/50 dark:bg-black/50" 
              : "bg-white/30 dark:bg-black/30"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
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

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, idx) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveSection(item.href.replace("#", ""))}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive ? "text-accent-primary dark:text-accent-secondary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {/* Sliding Hover highlight */}
                  {hoveredIdx === idx && (
                    <motion.span
                      layoutId="hover-indicator"
                      className="absolute inset-0 bg-foreground/5 dark:bg-white/5 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {/* Active Indicator dot */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary dark:bg-accent-secondary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-card-border hover:bg-foreground/5 dark:hover:bg-white/5 text-foreground transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-800" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400 animate-spin-slow" />
              )}
            </button>

            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium border border-card-border hover:bg-foreground/5 dark:hover:bg-white/5 rounded-full transition-colors duration-200"
            >
              Schedule Meeting
            </a>
            
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-accent-primary to-accent-secondary hover:opacity-95 rounded-full transition-all duration-200 flex items-center gap-1 shadow-lg hover:shadow-accent-primary/20"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions (Menu Button & Theme Toggle) */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-card-border text-foreground hover:bg-foreground/5 dark:hover:bg-white/5 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-800" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400 animate-spin-slow" />
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-card-border text-foreground hover:bg-foreground/5 dark:hover:bg-white/5 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-8 pb-10"
          >
            <div className="flex flex-col gap-4 text-lg font-semibold mb-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSection(item.href.replace("#", ""));
                  }}
                  className="py-2 border-b border-card-border text-foreground/80 hover:text-foreground flex items-center justify-between"
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-xl border border-card-border font-medium text-foreground hover:bg-foreground/5 dark:hover:bg-white/5 transition-all"
              >
                Schedule Meeting
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
