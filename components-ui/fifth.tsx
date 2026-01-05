"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Fingerprint, ShieldCheck, Zap } from "lucide-react";

export default function HolographicCard() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth physics configuration
  const spring = { damping: 15, stiffness: 150 };
  const mouseX = useSpring(x, spring);
  const mouseY = useSpring(y, spring);

  // Map mouse (0-1) to rotation (-15deg to 15deg)
  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);

  // Glare position
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <div
      style={{ perspective: 1000 }}
      className="min-h-screen bg-slate-950 flex items-center justify-center p-8"
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={() => {
          x.set(0.5);
          y.set(0.5);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 shadow-2xl group"
      >
        {/* Parallax Content */}
        <div
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="relative w-20 h-20 bg-slate-950 rounded-2xl border border-slate-700 flex items-center justify-center text-cyan-400 shadow-lg mb-6">
            <Fingerprint size={40} />
            <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 rounded-full" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Secure Access</h2>
          <p className="text-slate-400 text-sm mb-6">
            Biometric encryption enabled.
          </p>

          <div className="flex gap-4 w-full">
            {[
              { I: ShieldCheck, t: "Verified" },
              { I: Zap, t: "Active" },
            ].map(({ I, t }) => (
              <div
                key={t}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-950/50 border border-slate-700/50 text-xs font-medium text-slate-300"
              >
                <I size={12} className="text-cyan-400" /> {t}
              </div>
            ))}
          </div>
        </div>

        {/* Glare Layer */}
        <motion.div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
          <motion.div
            style={{
              left: useTransform(glareX, (v) => `${v}%`),
              top: useTransform(glareY, (v) => `${v}%`),
            }}
            className="absolute w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 bg-radial-gradient from-cyan-400/20 to-transparent blur-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
