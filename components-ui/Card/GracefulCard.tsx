"use client"

import { motion } from "motion/react";

const GracefulCard = ({ subtitle, title, description, color = "void" }) => {
const colors = {
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

  const accentColor = colors[color] || colors.eclipse;

   const slideUp = {
     rest: { y: 0 },
     hover: { y: -8 },
   };

   const revealText = {
     rest: { height: 0, opacity: 0 },
     hover: { height: "auto", opacity: 1 },
   };
  
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group cursor-pointer relative h-96 w-72 overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 transition-colors hover:border-slate-700"
    >
      {/* bg layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-50 transition-transform duration-700 group-hover:scale-110`}
      />
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white/10 via-transparent to-white/10 backdrop-blur-3xl" />

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-slate-500/30 to-transparent" />
        <motion.div variants={slideUp} transition={{ duration: 0.4 }}>
          <div className="flex items-center">
            <span className="text-xl uppercase tracking-widest transition-colors">
              {subtitle}
            </span>
          </div>
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
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
    </motion.div>
  );
};


export default function GracefulHoverCard() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center">
      <GracefulCard
        subtitle="Strategy"
        title="Vision"
        description="Defining the long-term trajectory and core values that drive the brand forward."
        color="indigo"
      />
    </div>
  );
}