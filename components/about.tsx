"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";
import BeamButton from "@/components-ui/Button/BeamButton";
import Button1 from "@/components-ui/Button/Button1";

export default function AlorikHero() {
  const containerRef = useRef(null);
  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-white overflow-hidden flex items-center selection:bg-indigo-100 font-sans text-slate-900"
    >
      {/* 1. INFINITE GRID BACKGROUND (Light) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{
            transform:
              "perspective(500px) rotateX(60deg) translateY(-100px) scale(3)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-100/40 via-purple-100/20 to-transparent blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply" />
      </div>

      {/* 2. SPLIT LAYOUT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 pb-20">
        {/* --- LEFT COLUMN: TEXT CONTENT --- */}
        <div className="flex flex-col items-start text-left">
          {/* Animated Pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-8 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-300"></span>
            </span>
            <span>Introducing more components</span>
            <ArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform text-slate-400"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-6xl max-w-lg font-bold leading-tighter mb-5 text-transparent bg-clip-text bg-linear-to-r from-10% to-60% from-slate-900 via-green-900 to-slate-900"
          >
            Where aesthetics meet performance
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-700 max-w-lg mb-10 tracking-tight leading-relaxed font-medium"
          >
            The component library for developers who value{" "}
            <span className="text-slate-900 font-bold">aesthetics</span> as
            much as performance. Light mode optimized. Motion included.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-row items-center gap-4"
          >
            <button className="h-12 px-8 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-slate-900/20">
              <Terminal size={16} /> Get Started
            </button>
            <button className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-900 font-medium text-sm hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
              View Components
            </button>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: 3D VISUAL --- */}
        <BeamButton />
        <Button1 />
      </div>
    </div>
  );
}
