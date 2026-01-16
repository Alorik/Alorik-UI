import StarlightButtonDisplay from "@/components-ui/Button/starlight";
import CodeShowCase from "@/components-ui/code-showcase";

const code = String.raw`"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface StarlightButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

/* -------------------------------------------------------------------------- */
/*                               Button Component                              */
/* -------------------------------------------------------------------------- */

const StarlightButton = ({ children, onClick }: StarlightButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-7 py-3 rounded-lg text-slate-300 font-medium"
    >
      <span className="relative z-10 text-slate-300 font-medium">
        {children}
      </span>

      {/* Animated Border */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Static border */}
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

        {/* Animated gradient stroke */}
        <motion.rect
          x="1"
          y="1"
          width="99%"
          height="98%"
          rx="8"
          ry="8"
          fill="none"
          stroke="url(#starlight-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            strokeDashoffset: -100,
          }}
          transition={{
            pathLength: {
              duration: 1.3,
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
`;


export default function StarLightButtonCode() {
  return (
    <div>
      <CodeShowCase title="StarLight-Button" code={code} />
    </div>
  );
}