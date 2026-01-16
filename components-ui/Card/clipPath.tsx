"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Code, Figma } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
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
/*                               Theme Config                                 */
/* -------------------------------------------------------------------------- */

const THEMES: Record<Theme, ThemeConfig> = {
  cyan: {
    bg: "bg-cyan-400",
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
/*                              ClipPath Card                                 */
/* -------------------------------------------------------------------------- */

const ClipPathCard = ({
  title,
  subtitle,
  icon: Icon,
  theme = "cyan",
}: ClipPathCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  /* ---------------------------- Mouse Tracking ---------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics for nicer movement
  const springConfig = { stiffness: 120, damping: 18, mass: 0.2 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const activeTheme = THEMES[theme];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative h-80 w-72 cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
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
        animate={{
          clipPath: isHovered
            ? `circle(150% at ${springX.get()}px ${springY.get()}px)`
            : `circle(0% at ${springX.get()}px ${springY.get()}px)`,
        }}
        transition={{
          duration: 0.45,
          ease: "circOut",
        }}
      >
        <div className="flex justify-between items-start">
          <div
            className={`p-3 rounded-xl bg-black/10 backdrop-blur-sm ${activeTheme.text}`}
          >
            <Icon size={24} />
          </div>

          <div
            className={`p-2 rounded-full bg-black/10 backdrop-blur-sm ${activeTheme.text}`}
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
/*                                   Demo                                     */
/* -------------------------------------------------------------------------- */

export default function ClipPath() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row items-center justify-center p-8 gap-8">
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
