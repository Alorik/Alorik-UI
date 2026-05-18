"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AgencyButtonProps {
  children: ReactNode;
}

const AgencyButton = ({ children }: AgencyButtonProps) => {
  // slideup button
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="
        group
        relative
        overflow-hidden
        rounded-full
        bg-slate-950
        border-2 border-slate-700
        transition-all duration-300
        hover:border-slate-500
        active:scale-95
        px-6 py-2.5 text-sm
        sm:px-8 sm:py-3 sm:text-base
        md:px-10 md:py-3.5 md:text-lg
      "
    >
      <div className="relative h-[1.2em] overflow-hidden font-semibold text-slate-200">
        {/* Layer 1 (default text) */}
        <div
          className="
            flex items-center justify-center gap-2
            transition-transform duration-300 ease-in-out
            group-hover:-translate-y-[150%]
          "
        >
          {children}
        </div>

        {/* Layer 2 (hover text) */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center gap-2
            translate-y-[150%]
            transition-transform duration-300 ease-in-out
            group-hover:translate-y-0
            text-white
          "
        >
          Proceed
        </div>
      </div>
    </motion.button>
  );
};

export default function SlideButton() {
  return (
    <div className="bg-slate-950 flex items-center justify-center rounded-2xl p-6 sm:p-8">
      <AgencyButton>Get in touch</AgencyButton>
    </div>
  );
}
