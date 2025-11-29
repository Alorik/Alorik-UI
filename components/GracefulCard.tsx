"use client"

import { motion } from "motion/react";

const GracefulCard = ({ subtitle, title, description, color = "indigo" }) => {
  const colors = {
    indigo: "from-indigo-500/20 via-purple-200 to-slate-900",
    emerald: "from-emerald-500/20 via-teal-500/10 to-slate-900",
    rose: "from-rose-500/20 via-pink-500/10 to-slate-900",
  };

  const accentColor = colors[color] || colors.indigo;
  
  return (
    <motion.div className="cursor-pointer "></motion.div>
  )
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