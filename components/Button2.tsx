"use client"
import { motion } from "motion/react";

const StarlightButton = ({children, onClick}) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-7  py-2 rounded-lg bg-slate-800 text-slate-300 font-medium"
      >
        <span className="text-slate-300 font-medium relative z-10 py-7">
          {children}
        </span>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <rect
            x="1"
            y="1"
            width="99%"
            height="98%"
            rx="8"
            ry="8"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
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
            stroke="url(#gradient-final)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, strokeDashoffset: -100 }}
            transition={{
              pathLength: { duration: 1.3, repeat: Infinity, ease: "linear" },
              opacity: { duration: 0.2 },
            }}
          />
          <defs>
            <linearGradient
              id="gradient-final"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#4fd1c5" stopOpacity="0" />
              <stop offset="50%" stopColor="#4fd1c5" />
              <stop offset="100%" stopColor="#63b3ed" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.button>
    </div>
  );
}


export default function Button2() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8">
      {/* Button Instance */}
      <StarlightButton onClick={() => console.log("Exploring...")}>
        Explore Universe
      </StarlightButton>
      </div>
  )
}


