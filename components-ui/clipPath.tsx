"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, Code, Figma, Terminal } from "lucide-react";

/**
 * CLIP PATH REVEAL CARD
 * * Concept:
 * Two distinct layers (Dark & Vibrant).
 * The Vibrant layer is clipped by a circle that follows the mouse.
 * On hover, the circle expands to reveal the full layer.
 */
const ClipPathCard = ({ title, subtitle, icon: Icon, theme = "cyan" }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement for the mask
  const springConfig = { stiffness: 100, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Theme configurations
  const themes = {
    cyan: { bg: "bg-cyan-400", text: "text-slate-900", sub: "text-slate-800" },
    lime: { bg: "bg-lime-400", text: "text-slate-900", sub: "text-slate-800" },
    rose: { bg: "bg-rose-500", text: "text-white", sub: "text-rose-100" },
  };
  const activeTheme = themes[theme] || themes.cyan;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  // Logic to expand mask on hover
  // We use a CSS variable for the mask size to animate it easily
  const [maskSize, setMaskSize] = useState(0);

  useEffect(() => {
    if (isHovered) {
      setMaskSize(300); // Expand to fill
    } else {
      setMaskSize(0); // Shrink to nothing
    }
  }, [isHovered]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative h-80 w-72 cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
    >
      {/* --- LAYER 1: BASE (Dark) --- 
          Visible by default.
      */}
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

      {/* --- LAYER 2: REVEAL (Vibrant) --- 
          Hidden by clip-path. Reveals on hover.
      */}
      <motion.div
        className={`absolute inset-0 flex flex-col justify-between p-8 ${activeTheme.bg}`}
        style={{
          // The Mask Logic
          clipPath: useTransform(
            [springX, springY],
            ([currentX, currentY]) =>
              `circle(${
                isHovered ? "150%" : "0px"
              } at ${currentX}px ${currentY}px)`
          ),
        }}
        // We add a transition to the clip-path via layout or separate animation if needed,
        // but Framer's useTransform coupled with state-based radius usually needs direct animation.
        // SIMPLIFICATION: Framer Motion doesn't animate CSS strings in 'style' well with springs directly mixed with state.
        // Let's use the 'animate' prop for the radius specifically.
        animate={{
          clipPath: `circle(${
            isHovered ? "150%" : "0%"
          } at ${x.get()}px ${y.get()}px)`,
        }}
        transition={{
          type: "tween",
          ease: "circOut",
          duration: 0.5,
        }}
      >
        {/* Same content, but styled differently for the reveal state */}
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

export default function App() {
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
