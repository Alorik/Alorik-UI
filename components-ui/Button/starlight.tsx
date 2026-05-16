"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface StarlightButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*                               Button Component                             */
/* -------------------------------------------------------------------------- */

const StarlightButton = ({
  children,
  onClick,
  className = "",
}: StarlightButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative rounded-lg font-medium text-slate-300
        bg-transparent overflow-hidden
        px-6 py-2.5 text-sm
        sm:px-8 sm:py-3 sm:text-base
        md:px-10 md:py-3.5 md:text-lg
        focus:outline-none focus:ring-2 focus:ring-cyan-400
        active:scale-95

        ${className}
      `}
    >
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center whitespace-nowrap">
        {children}
      </span>

      {/* Animated Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      >
        {/* Static border */}
        <rect
          x="1"
          y="1"
          width="99%"
          height="98%"
          rx="10"
          ry="10"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />

        {/* Animated gradient stroke */}

        <motion.rect
          x="1"
          y="1"
          width="99%"
          height="98%"
          rx="10"
          ry="10"
          fill="none"
          stroke="url(#starlight-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            strokeDashoffset: -120,
          }}
          transition={{
            pathLength: {
              duration: 1.4,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: { duration: 0.2 },
          }}
        />

        <defs>
          <linearGradient
            id="starlight-gradient"
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
  );
};

/* -------------------------------------------------------------------------- */
/*                                   Demo                                     */
/* -------------------------------------------------------------------------- */

export default function StarlightButtonDisplay() {
  return (
    <div className="rounded-xl bg-slate-950 flex items-center justify-center p-6 sm:p-8">
      <StarlightButton onClick={() => console.log("Exploring...")}>
        Explore Universe
      </StarlightButton>
    </div>
  );
}
