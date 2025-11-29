"use client"

import { motion } from "motion/react";

const GracefulCard = ({ subtitle, title, description, color = "indigo" }) => {
  const colors = {
    indigo: "from-indigo-500/20 via-purple-200 to-slate-900",
    emerald: "from-emerald-500 via-teal-500 to-slate-900",
    rose: "from-rose-500 via-pink-500 to-slate-900",
  };

  const accentColor = colors[color] || colors.indigo;

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
        className={`absolute inset-0 bg-gradient-to-br ${
          colors[color] || colors.indigo
        } opacity-50 transition-transform duration-700 group-hover:scale-110`}
      />

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
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row items-center justify-center p-8">
      <GracefulCard
        subtitle="Strategy"
        title="Vision"
        description="Defining the long-term trajectory and core values that drive the brand forward."
        color="indigo"
      />
    </div>
  );
}