"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Starlight Button Component ---
// Uses SVG path animation for a "drawing" border effect
const StarlightButton = ({ children, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-8 py-3 rounded-lg bg-slate-950/50 group overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 text-white font-medium flex items-center gap-2">
        {children}{" "}
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </span>

      {/* Moving Beam Border using SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <rect
          x="1"
          y="1"
          width="99%"
          height="98%"
          rx="8"
          ry="8"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <motion.rect
          x="1"
          y="1"
          width="99%"
          height="98%"
          rx="8"
          ry="8"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, strokeDashoffset: -100 }}
          transition={{
            pathLength: { duration: 1.5, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.2 },
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4fd1c5" stopOpacity="0" />
            <stop offset="50%" stopColor="#4fd1c5" />
            <stop offset="100%" stopColor="#63b3ed" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.button>
  );
};

/**
 * Main App
 */
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8">
      {/* Button Instance */}
      <StarlightButton onClick={() => console.log("Exploring...")}>
        Explore Universe
      </StarlightButton>

      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
