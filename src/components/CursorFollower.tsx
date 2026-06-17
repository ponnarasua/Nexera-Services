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
 
  // Spring settings for organic trailing effect
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
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
 
    // Listen for hovering on interactive items
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
      {/* Lagging Ring & Glow Follower */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          borderColor: isHovering 
            ? "var(--accent-secondary)" 
            : "rgba(129, 140, 248, 0.4)", // Translucent indigo
          backgroundColor: isHovering 
            ? "rgba(34, 211, 238, 0.08)" // Translucent cyan tint on hover
            : "rgba(129, 140, 248, 0.02)",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="absolute w-10 h-10 rounded-full border border-solid pointer-events-none shadow-[0_0_15px_rgba(99,102,241,0.05)]"
      />
    </div>
  );
}
