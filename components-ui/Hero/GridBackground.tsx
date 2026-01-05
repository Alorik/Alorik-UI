"use client";
import React, { useState } from "react";

/**
 * Spotlight Hero (Background Only)
 * * Mechanics:
 * 1. Base Grid: A static, faint grid pattern using CSS gradients.
 * 2. Mouse Tracking: We track coordinates relative to the container.
 * 3. Radial Gradient: We apply a dynamic background style that creates the "flashlight" reveal.
 */

export default function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // We can assume full screen for hero, but bounding rect is safer
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center overflow-hidden group"
    >
      {/* --- 1. BASE GRID PATTERN --- 
          Static dark grid lines.
      */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* --- 2. SPOTLIGHT OVERLAY --- 
          This layer follows the mouse. It uses a radial gradient to "reveal" 
          a brighter background color (or highlight) where the mouse is.
      */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), transparent 80%)`,
        }}
      />

      {/* Additional smaller, brighter core for the spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.3), transparent 80%)`,
        }}
      />
    </div>
  );
}
