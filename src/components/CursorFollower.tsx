"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position of mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring settings for lagging outer circle
  const springConfig = { damping: 40, stiffness: 280, mass: 0.6 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    // Prevent rendering on touch devices
    const isHoverSupported = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isHoverSupported) return;

    const moveMouse = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Stagger check for interactive elements using delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.tagName === "SELECT" || 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[role='button']");

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  // Do not render on mobile/touch screens
  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Lagging Outer Circle */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.2 : 1,
          borderColor: isHovering ? "var(--accent-secondary)" : "var(--accent-primary)",
          backgroundColor: isHovering ? "rgba(34, 211, 238, 0.05)" : "rgba(0, 0, 0, 0)",
          opacity: isVisible ? 0.75 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute w-8 h-8 rounded-full border border-accent-primary pointer-events-none"
      />

      {/* Responsive Core Pointer Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "var(--accent-tertiary)" : "var(--accent-secondary)",
          opacity: isVisible ? 0.9 : 0,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="absolute w-2.5 h-2.5 rounded-full pointer-events-none mix-blend-difference"
      />
    </div>
  );
}
