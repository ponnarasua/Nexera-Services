"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Sun, Moon, Monitor, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, Theme } from "@/context/ThemeContext";
import Image from "next/image";
import logoImg from "@/app/logo.png";
import nameImg from "@/app/Name.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close theme dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scrollspy and Header Scroll Styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = ["hero", "about", "services", "solutions", "why-choose-us", "timeline", "faqs", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl rounded-full border transition-all duration-500 z-50 ${
        scrolled 
          ? "border-zinc-200/80 dark:border-white/10 bg-white/80 dark:bg-zinc-950/70 backdrop-blur-xl py-3 px-6 shadow-sm dark:shadow-[0_15px_35px_rgba(0,0,0,0.6)]" 
          : "border-zinc-200/30 dark:border-white/5 bg-white/30 dark:bg-zinc-950/30 backdrop-blur-md py-4 px-6"
      }`} id="site-header">
        <div className="w-full flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer select-none group"
            id="header-logo-container"
          >
            <Image src={logoImg} alt="Nexera Logo" className="h-8 w-8 object-contain group-hover:scale-105 transition-transform duration-300" />
            <Image src={nameImg} alt="NEXERA" className="h-4 w-auto object-contain invert dark:invert-0 transition-all duration-300" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/5 rounded-full px-1.5 py-1" id="desktop-nav">
            {[
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "solutions", label: "Solutions" },
              { id: "why-choose-us", label: "Why Nexera" },
              { id: "timeline", label: "Process" },
              { id: "faqs", label: "FAQ" },
              { id: "contact", label: "Connect" }
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-[10px] sm:text-[11px] font-mono font-medium px-4 py-1.5 rounded-full transition-all cursor-pointer relative ${
                    isActive 
                      ? "text-zinc-900 dark:text-white bg-zinc-200/60 dark:bg-white/10 shadow-sm" 
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Theme Selector & CTA button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-sm"
                title={`Theme: ${theme}`}
                suppressHydrationWarning
              >
                {!mounted ? (
                  <span className="w-3.5 h-3.5 block" />
                ) : (
                  <>
                    {theme === "light" && <Sun size={14} />}
                    {theme === "dark" && <Moon size={14} />}
                    {theme === "system" && <Monitor size={14} />}
                  </>
                )}
              </button>
              
              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-32 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-950 p-1.5 shadow-xl z-50 font-mono text-[11px]"
                  >
                    {[
                      { value: "light", label: "Light", icon: Sun },
                      { value: "dark", label: "Dark", icon: Moon },
                      { value: "system", label: "System", icon: Monitor },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = theme === item.value;
                      return (
                        <button
                          key={item.value}
                          onClick={() => {
                            setTheme(item.value as Theme);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-left cursor-pointer transition-colors ${
                            isSelected 
                              ? "bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white font-bold" 
                              : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white"
                          }`}
                        >
                          <Icon size={12} />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Mobile hamburger menu and theme trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                const themes: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
                const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
                setTheme(themes[nextIndex]);
              }}
              className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-white/10 rounded-lg bg-white/5 cursor-pointer"
              title={`Cycle theme: Current ${theme}`}
              suppressHydrationWarning
            >
              {!mounted ? (
                <span className="w-[15px] h-[15px] block" />
              ) : (
                <>
                  {theme === "light" && <Sun size={15} />}
                  {theme === "dark" && <Moon size={15} />}
                  {theme === "system" && <Monitor size={15} />}
                </>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-white/10 rounded-lg bg-white/5 cursor-pointer"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-6 shadow-2xl md:hidden"
            id="mobile-nav-drawer"
          >
            <div className="space-y-1.5">
              {[
                { id: "about", label: "About Us" },
                { id: "services", label: "Core Services" },
                { id: "solutions", label: "Audience Solutions" },
                { id: "why-choose-us", label: "Sovereign Privileges" },
                { id: "timeline", label: "Deployment Timeline" },
                { id: "faqs", label: "SLA & Security FAQs" },
                { id: "contact", label: "Interactive Blueprint" }
              ].map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left text-xs font-mono py-2.5 border-b border-zinc-100 dark:border-white/5 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <span className={isActive ? "text-[#ffcd75] font-bold" : "text-zinc-600 dark:text-zinc-300 group-hover:text-[#ffcd75]"}>
                      {link.label}
                    </span>
                  </button>
                );
              })}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
