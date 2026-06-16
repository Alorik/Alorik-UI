"use client";
import { motion, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type AccentColor =
  | "midnight"
  | "abyss"
  | "shadow"
  | "twilight"
  | "void"
  | "eclipse"
  | "nebula"
  | "phantom"
  | "depth"
  | "cosmos";

interface GracefulCardProps {
  subtitle: string;
  title: string;
  description: string;
  color?: AccentColor;
}

/* ------------------------------------------------------------------------- */
/*                               Color Palette                               */
/* ------------------------------------------------------------------------- */

const COLORS: Record<AccentColor, string> = {
  midnight: "from-slate-900 via-indigo-400 to-slate-900",
  abyss: "from-gray-900 via-purple-400 to-gray-900",
  shadow: "from-black via-blue-500 to-black",
  twilight: "from-slate-950 via-violet-400 to-slate-950",
  void: "from-neutral-900 via-cyan-400 to-neutral-900",
  eclipse: "from-zinc-900 via-rose-400 to-zinc-900",
  nebula: "from-slate-900 via-fuchsia-400 to-slate-900",
  phantom: "from-gray-950 via-emerald-400 to-gray-950",
  depth: "from-black via-teal-500 to-black",
  cosmos: "from-slate-950 via-pink-400 to-slate-950",
};

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                              */
/* -------------------------------------------------------------------------- */

const slideUp: Variants = {
  rest: { y: 0 },
  hover: { y: -8 },
};

const revealText: Variants = {
  rest: { height: 0, opacity: 0 },
  hover: { height: "auto", opacity: 1 },
};

/* ------------------------------------------------------------------------- */
/*                              Graceful Card                                */
/* ------------------------------------------------------------------------- */

const GracefulCard = ({
  subtitle,
  title,
  description,
  color = "void",
}: GracefulCardProps) => {
  const accentColor = COLORS[color];

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group cursor-pointer relative h-96 w-72 overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 transition-colors hover:border-slate-700"
    >
      {/* Background gradient layer */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${accentColor} opacity-50 transition-transform duration-700 group-hover:scale-110`}
      />

      {/* Subtle noise / blur overlay */}
      <div className="absolute inset-0 opacity-5 bg-linear-to-br from-white/10 via-transparent to-white/10 backdrop-blur-3xl" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="mb-4 h-px w-full bg-linear-to-r from-slate-500/30 to-transparent" />

        <motion.div variants={slideUp} transition={{ duration: 0.4 }}>
          <span className="text-xl uppercase tracking-widest text-slate-400">
            {subtitle}
          </span>

          <h3 className="mb-2 text-3xl font-light text-slate-200 group-hover:text-white transition-colors">
            {title}
          </h3>

          <motion.div
            variants={revealText}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm leading-relaxed text-slate-400 pt-2">
              {description}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/*  top shimmer */}
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/50 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   Demo                                     */
/* -------------------------------------------------------------------------- */

export default function GracefulHoverCard() {
  return (
    <div className="relative flex items-center justify-center">
      <GracefulCard
        subtitle="Strategy"
        title="Vision"
        description="Defining the long-term trajectory and core values that drive the brand forward."
        color="midnight"
      />
    </div>
  );
}
