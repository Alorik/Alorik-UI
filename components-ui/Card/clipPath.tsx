"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Code, Figma } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types                                    */
/* -------------------------------------------------------------------------- */

type Theme = "cyan" | "lime" | "rose";

interface ClipPathCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  theme?: Theme;
}

interface ThemeConfig {
  bg: string;
  text: string;
  sub: string;
}

/* -------------------------------------------------------------------------- */
/* Theme Config                                 */
/* -------------------------------------------------------------------------- */

const THEMES: Record<Theme, ThemeConfig> = {
  cyan: {
    bg: "bg-emerald-400",
    text: "text-slate-900",
    sub: "text-slate-800",
  },
  lime: {
    bg: "bg-lime-400",
    text: "text-slate-900",
    sub: "text-slate-800",
  },
  rose: {
    bg: "bg-rose-500",
    text: "text-white",
    sub: "text-rose-100",
  },
};

/* -------------------------------------------------------------------------- */
/* ClipPath Card                                 */
/* -------------------------------------------------------------------------- */

const ClipPathCard = ({
  title,
  subtitle,
  icon: Icon,
  theme = "cyan",
}: ClipPathCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  /* ---------------------------- Motion Values ---------------------------- */

  // 1. Track raw mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Track the radius of the reveal circle (0 = closed, 350 = open)
  const radius = useMotionValue(0);

  /* ---------------------------- Physics Config --------------------------- */

  // Smooth mouse follow
  const springX = useSpring(x, { stiffness: 1, damping: 1 });
  const springY = useSpring(y, { stiffness: 1, damping: 1 });

  // Smooth expansion/contraction of the revea
  const springRadius = useSpring(radius, { stiffness: 250, damping: 25 });

  // 3. Create the clip-path string directly from motion values
  // This bypasses React re-renders for maximum performance
  const clipPath = useMotionTemplate`circle(${springRadius}px at ${springX}px ${springY}px)`;

  /* ---------------------------- Event Handlers --------------------------- */

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    // Expand radius to cover the card
    radius.set(400);
  };

  const handleMouseLeave = () => {
    // Collapse radius back to 0
    radius.set(0);
  };

  const activeTheme = THEMES[theme];

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative h-80 w-72 cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-slate-900 shadow-2xl"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Base Layer (Dark)                                                   */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-400">
            <Icon size={24} />
          </div>
          <ArrowUpRight className="text-slate-600" />
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            {subtitle}
          </span>
          <h3 className="mt-2 text-3xl font-light text-slate-300">{title}</h3>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Reveal Layer (Vibrant)                                              */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        className={`absolute inset-0 flex flex-col justify-between p-8 ${activeTheme.bg}`}
        style={{
          clipPath, // Bind the optimized template directly to style
        }}
      >
        <div className="flex justify-between items-start">
          <div
            className={`p-3 rounded-xl bg-black/10 backdrop-blur-md ${activeTheme.text}`}
          >
            <Icon size={24} />
          </div>

          <div
            className={`p-2 rounded-full bg-black/10 backdrop-blur-md ${activeTheme.text}`}
          >
            <ArrowUpRight size={20} />
          </div>
        </div>

        <div>
          <span
            className={`text-xs font-bold uppercase tracking-widest ${activeTheme.sub}`}
          >
            {subtitle}
          </span>
          <h3 className={`mt-2 text-3xl font-bold ${activeTheme.text}`}>
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Demo                                     */
/* -------------------------------------------------------------------------- */

export default function ClipPath() {
  return (
    <div className="bg-slate-150 flex flex-col md:flex-row items-center justify-center p-8 gap-8 rounded-xl w-full min-h-[500px]">
      <ClipPathCard
        title="Frontend"
        subtitle="Development"
        icon={Code}
        theme="cyan"
      />

      <ClipPathCard
        title="Product"
        subtitle="Design"
        icon={Figma}
        theme="rose"
      />
    </div>
  );
}
