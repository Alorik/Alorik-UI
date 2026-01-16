import CodeShowCase from "@/components-ui/code-showcase";

const code = String.raw`"use client";

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
/* Types                                                                      */
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
/* Theme Config                                                               */
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
/* ClipPath Card                                                              */
/* -------------------------------------------------------------------------- */

const ClipPathCard = ({
  title,
  subtitle,
  icon: Icon,
  theme = "cyan",
}: ClipPathCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  /* ---------------------------- Motion Values ---------------------------- */

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const radius = useMotionValue(0);

  /* ---------------------------- Physics ---------------------------------- */

  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });
  const springRadius = useSpring(radius, { stiffness: 260, damping: 30 });

  const clipPath = useMotionTemplate\`circle(\${springRadius}px at \${springX}px \${springY}px)\`;

  /* ---------------------------- Events ----------------------------------- */

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => radius.set(420);
  const handleMouseLeave = () => radius.set(0);

  const activeTheme = THEMES[theme];

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative h-80 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl"
    >
      {/* Base Layer */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-400">
            <Icon size={24} />
          </div>
          <ArrowUpRight className="text-slate-600" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-slate-500">
            {subtitle}
          </span>
          <h3 className="mt-2 text-3xl font-light text-slate-300">
            {title}
          </h3>
        </div>
      </div>

      {/* Reveal Layer */}
      <motion.div
        className={\`absolute inset-0 flex flex-col justify-between p-8 \${activeTheme.bg}\`}
        style={{ clipPath }}
      >
        <div className="flex items-start justify-between">
          <div className={\`p-3 rounded-xl bg-black/10 backdrop-blur-md \${activeTheme.text}\`}>
            <Icon size={24} />
          </div>

          <div className={\`p-2 rounded-full bg-black/10 backdrop-blur-md \${activeTheme.text}\`}>
            <ArrowUpRight size={20} />
          </div>
        </div>

        <div>
          <span className={\`text-xs font-bold uppercase tracking-widest \${activeTheme.sub}\`}>
            {subtitle}
          </span>
          <h3 className={\`mt-2 text-3xl font-bold \${activeTheme.text}\`}>
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Demo                                                                       */
/* -------------------------------------------------------------------------- */

export default function ClipPathDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 rounded-xl bg-slate-100 p-8 min-h-[500px]">
      <ClipPathCard title="Frontend" subtitle="Development" icon={Code} />
      <ClipPathCard title="Product" subtitle="Design" icon={Figma} theme="rose" />
    </div>
  );
};
`;

export default function ClipPathCardCode() {
  return (
    <CodeShowCase title="Clip-Path Reveal Card" language="tsx" code={code} />
  );
}
