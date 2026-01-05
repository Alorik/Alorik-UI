"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Spotlight Button
 * * Logic:
 * 1. Tracks mouse position relative to the button.
 * 2. Updates the coordinates of a radial gradient background.
 * 3. Reveals a "border" highlight and a "surface" highlight dynamically.
 */
const SpotlightButton = ({ children, className = "" }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden rounded-full bg-slate-950 px-8 py-4 
        text-sm font-medium text-white transition-colors 
        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
        ${className}
      `}
    >
      {/* 1. The Spotlight Overlay (The "Flashlight" beam) 
          This layer creates the main glow inside the button.
      */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 60%)`,
        }}
      />

      {/* 2. The Border Highlight 
          This layer sits behind the content but creates the sharp border reveal.
          We use a slightly brighter/smaller gradient here.
      */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.4), transparent 50%)`,
        }}
      />

      {/* 3. Static Border Ring (Optional, for structure when not hovering) */}
      <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

/**
 * Main Demo
 */
export default function Spotlight() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 gap-12">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Spotlight Button</h2>
        <p className="text-slate-400">
          Hover to see the light track your cursor.
        </p>
      </div>

      <SpotlightButton onClick={() => console.log("Clicked!")}>
        <Sparkles size={16} className="text-cyan-400" />
        Explore Features
      </SpotlightButton>

      {/* Large version for testing tracking */}
      <SpotlightButton className="text-lg px-12 py-6">
        Start Free Trial
      </SpotlightButton>
    </div>
  );
}
