"use client";

import { useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { Sparkles } from "lucide-react";

/* ------------------------------------------------------------------------ */
/*                                  Types                                   */
/* ------------------------------------------------------------------------ */

interface SpotlightButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/* ------------------------------------------------------------------------- */
/*                              Spotlight Button                             */
/* ------------------------------------------------------------------------- */

const SpotlightButton = ({
  children,
  className = "",
  onClick,
}: SpotlightButtonProps) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`
        relative overflow-hidden rounded-full
        bg-slate-950 text-white font-medium
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-slate-400
        focus:ring-offset-2 focus:ring-offset-slate-50
        active:scale-95
        px-6 py-2.5 text-sm
        sm:px-8 sm:py-3 sm:text-base
        md:px-10 md:py-4 md:text-lg

        ${className}
      `}
    >
      {/* Spotlight surface */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(
            150px circle at ${position.x}px ${position.y}px,
            rgba(255,255,255,0.12),
            transparent 60%
          )`,
        }}
      />

      {/* Border glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(
            100px circle at ${position.x}px ${position.y}px,
            rgba(34, 211, 238, 0.45),
            transparent 50%
          )`,
        }}
      />

      {/* Static ring */}
      <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   Demo                                     */
/* -------------------------------------------------------------------------- */

export default function Spotlight() {
  return (
    <div className="bg-slate-950 flex items-center justify-center p-6 sm:p-8">
      <SpotlightButton onClick={() => console.log("Clicked!")}>
        <Sparkles size={16} className="text-cyan-400" />
        Explore Features
      </SpotlightButton>
    </div>
  );
}
