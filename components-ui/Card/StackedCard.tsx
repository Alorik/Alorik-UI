"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";

type AccentColor = "indigo" | "rose" | "emerald" | "orange";

interface StackedCardProps {
  title: string;
  date: string;
  category: string;
  color?: AccentColor;
}

const StackedCard = ({
  title,
  date,
  category,
  color = "indigo",
}: StackedCardProps) => {
  // Enhanced distinct colors for better visual separation
  const colorStyles: Record<
    AccentColor,
    { back: string; front: string; text: string }
  > = {
    indigo: {
      back: "bg-indigo-500",
      front: "from-indigo-500 to-indigo-600",
      text: "text-indigo-600",
    },
    rose: {
      back: "bg-rose-500",
      front: "from-rose-500 to-rose-600",
      text: "text-rose-600",
    },
    emerald: {
      back: "bg-emerald-500",
      front: "from-emerald-500 to-emerald-600",
      text: "text-emerald-600",
    },
    orange: {
      back: "bg-orange-500",
      front: "from-orange-500 to-orange-600",
      text: "text-orange-600",
    },
  };

  const theme = colorStyles[color];

  return (
    <motion.div
      className="relative w-72 h-80 group cursor-pointer perspective-1000"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* 3rd Layer (Bottom) - Heaviest Rotation */}
      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-40 ${theme.back} shadow-sm`}
        variants={{
          rest: { scale: 0.85, rotate: 0, y: 0 },
          hover: { scale: 1, rotate: -12, y: 10, x: -10 },
        }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
      />

      {/* 2nd Layer (Middle) - Medium Rotation */}
      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-70 ${theme.back} shadow-md`}
        variants={{
          rest: { scale: 0.92, rotate: 0, y: 0 },
          hover: { scale: 1, rotate: -6, y: 5, x: -5 },
        }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      />

      {/* 1st Layer (Top) - Main Content */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-white p-6 flex flex-col justify-between z-10 shadow-xl border border-slate-100"
        variants={{
          rest: { y: 0, rotate: 0 },
          hover: { y: -10, rotate: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Top Header */}
        <div className="flex justify-between items-start">
          <div className={`p-2 rounded-lg bg-slate-50 ${theme.text}`}>
            <Layers size={20} />
          </div>
          <span className="text-slate-400 text-xs font-medium border border-slate-200 px-2 py-1 rounded-full">
            {date}
          </span>
        </div>

        {/* Middle Content */}
        <div className="space-y-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${theme.text}`}
          >
            {category}
          </p>
          <h3 className="text-2xl font-bold text-slate-800 leading-tight">
            {title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
            A comprehensive collection of UI components for modern applications.
          </p>
        </div>

        {/* Bottom Footer / Action */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
          <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
            View Details
          </span>
          <motion.div
            variants={{
              rest: { x: 0, opacity: 0.5 },
              hover: { x: 5, opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
            className={theme.text}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Example Usage ---
export default function StackCardShowcase() {
  return (
    <div className="w-full min-h-[500px] flex items-center justify-center bg-slate-50 p-12 gap-12 flex-wrap">
      {/* <StackedCard
        title="Design Systems"
        category="UI Assets"
        date="2024"
        color="indigo"
      /> */}

      {/* Example showing another color variant */}
      <StackedCard
        title="Marketing Kit"
        category="Campaigns"
        date="Q3 2024"
        color="rose"
      />
    </div>
  );
}
