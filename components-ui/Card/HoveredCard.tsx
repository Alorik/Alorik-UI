"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    title: "The Summit",
    description: "Peak performance training.",
    color: "bg-indigo-500",
  },
  {
    title: "Liquid Flow",
    description: "Adaptive fluid dynamics.",
    color: "bg-cyan-500",
  },
  {
    title: "Aero State",
    description: "Lightweight architecture.",
    color: "bg-emerald-500",
  },
  {
    title: "Solar Core",
    description: "Renewable energy systems.",
    color: "bg-orange-500",
  },
];

const Card = ({ item, index, hovered, setHovered }) => {
  return (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="relative h-64 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-6"
      animate={{
        scale: hovered !== null && hovered !== index ? 0.95 : 1,
        opacity: hovered !== null && hovered !== index ? 0.5 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`absolute -right-4 -top-4 h-32 w-32 rounded-full ${item.color} opacity-20 blur-3xl`}
      />

      <div className="relative z-10 flex h-full flex-col justify-end">
        <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-slate-400">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default function HoveredCard() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
