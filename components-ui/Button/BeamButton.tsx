"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function BeamButton() {
  return (
    <div className="flex items-center justify-center px-4">
      <style>
        {`@keyframes beam-slide {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }`}
      </style>
{/* button beam */}
      <button
        className="
          group relative
          rounded-full
          bg-slate-900
          border border-slate-800
          transition-all
          hover:border-slate-700
          hover:scale-105
          active:scale-95

          px-5 py-3 text-sm
          sm:px-6 sm:py-3.5 sm:text-base
          md:px-8 md:py-4 md:text-lg
        "
      >
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Content */}
        <div className="relative flex items-center gap-2 sm:gap-3">
          <span
            className="
              font-bold tracking-tight
              bg-clip-text text-transparent
              bg-gradient-to-r from-slate-400 via-white to-slate-400
              bg-[length:200%_auto]
              animate-[beam-slide_2s_linear_infinite]

              text-base
              sm:text-lg
              md:text-2xl
            "
          >
            Unlock Potential
          </span>

          <ArrowRight
            size={18}
            className="
              text-slate-500
              transition-all
              group-hover:text-white
              group-hover:translate-x-1

              sm:size-[20px]
            "
          />
        </div>
      </button>
    </div>
  );
}
