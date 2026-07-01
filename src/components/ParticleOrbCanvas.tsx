"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  color: string;
  size: number;
}

export default function ParticleOrbCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 300;
    let height = 300;

    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        width = Math.max(rect.width, 250);
        height = Math.max(rect.height, 250);
        canvas.width = width;
        canvas.height = height;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate spherical particles
    const particleCount = 180;
    const particles: Particle3D[] = [];
    const colors = ["#ffcd75", "#ffffff", "#fef08a", "#e4e4e7", "#ffedd5"];

    for (let i = 0; i < particleCount; i++) {
      // Golden ratio distribution for even spacing on a sphere
      const theta = Math.acos(-1 + (2 * i) / particleCount);
      const phi = Math.sqrt(particleCount * Math.PI) * theta;

      const radius = Math.min(width, height) * 0.35; // Sphere radius is 35% of bounds

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      particles.push({
        x,
        y,
        z,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 2 + 1,
      });
    }

    // Smooth target speeds for organic easing
    let currentAngleX = 0.003;
    let currentAngleY = 0.005;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left - width / 2;
      const my = e.clientY - rect.top - height / 2;
      mouseRef.current = { x: mx, y: my };
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate angles based on mouse offset if hovered
      if (hovered) {
        currentAngleX += (mouseRef.current.y * 0.00005 - currentAngleX) * 0.1;
        currentAngleY += (mouseRef.current.x * 0.00005 - currentAngleY) * 0.1;
      } else {
        currentAngleX += (0.003 - currentAngleX) * 0.05;
        currentAngleY += (0.005 - currentAngleY) * 0.05;
      }

      // Rotate particles
      const radX = currentAngleX;
      const radY = currentAngleY;

      const cosX = Math.cos(radX);
      const sinX = Math.sin(radX);
      const cosY = Math.cos(radY);
      const sinY = Math.sin(radY);

      const projected: { x: number; y: number; z: number; size: number; color: string }[] = [];

      particles.forEach((p) => {
        // Rotate around Y axis
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate around X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Save back for next frame
        p.x = x1;
        p.y = y2;
        p.z = z2;

        // Perspective projection
        const fov = 400;
        const scale = fov / (fov + z2);
        const projX = x1 * scale + width / 2;
        const projY = y2 * scale + height / 2;

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          size: p.size * scale,
          color: p.color,
        });
      });

      // Sort by depth (Z index) so back particles render first
      projected.sort((a, b) => b.z - a.z);

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        
        // Connect to a few nearby particles for structural look
        let connections = 0;
        for (let j = i + 1; j < projected.length && connections < 2; j++) {
          const p2 = projected[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 55) {
            // Fade connection alpha based on distance and depth
            const alpha = Math.max(0, (1 - dist / 55) * 0.12 * (1 - p1.z / 300));
            ctx.strokeStyle = `rgba(255, 205, 117, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            connections++;
          }
        }
      }

      // Draw particles
      projected.forEach((p) => {
        // Depth-based opacity
        const opacity = Math.max(0.15, Math.min(1, 1 - p.z / 250));
        ctx.fillStyle = p.color;
        
        ctx.beginPath();
        // Give some golden bloom glow using shadows
        ctx.shadowColor = "#ffcd75";
        ctx.shadowBlur = p.color === "#ffcd75" || p.color === "#fef08a" ? 4 : 0;
        ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
        ctx.fillStyle = p.color === "#ffcd75" ? `rgba(255, 205, 117, ${opacity})` : `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.fill();
      });

      // Clear shadows for performance on other runs
      ctx.shadowBlur = 0;

      // Draw subtle core glow
      const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.min(width, height) * 0.25);
      grad.addColorStop(0, "rgba(255, 205, 117, 0.05)");
      grad.addColorStop(1, "rgba(255, 205, 117, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.35, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hovered]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center cursor-crosshair overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      id="3d-particle-orb-container"
    >
      <canvas ref={canvasRef} className="block relative z-10" />
      {/* Absolute overlay instructions */}
      <div className="absolute bottom-1 text-center w-full select-none z-0">
        <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase opacity-60 group-hover:text-[#ffcd75] group-hover:opacity-100 transition-all">
          INTERACTIVE 3D ORB // HOVER TO ROTATE
        </span>
      </div>
    </div>
  );
}
