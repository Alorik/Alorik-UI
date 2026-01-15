"use client";

import { motion } from "motion/react";

const StackedCard = ({
  title,
  date,
  category,
  color = "rose",
}: {
  title: string;
  date: string;
  category: string;
  color: string;
}) => {
  const colors = {
    indigo: "bg-gradient-to-r from-indigo-400 to-indigo-900",
    rose: "bg-rose-500",
    emerald: "bg-emerald-500",
  };

  const accentColor = colors[color] || colors.rose;

  return (
    <motion.div
      className="relative w-72 h-80 group cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* layer1 */}

      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-40 ${accentColor}`}
        variants={{
          rest: { scale: 0.9, rotate: 0, y: 0 },
          hover: { scale: 1, rotate: -10, y: 10 },
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
      />
      {/* layer2 */}
      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-70 ${accentColor}`}
        variants={{
          rest: { scale: 0.95, rotate: 0, y: 0 },
          hover: { scale: 1, rotate: 5, y: -5 },
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      />
      {/* layer3 */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between z-10"
        variants={{
          rest: { y: 0 },
          hover: { y: -25 },
        }}
      >
        <div className=" flex flex-col justify-between gap-20">
          <div className="flex justify-end items-center">
            <div className="text-slate-500 font-medium text-sm border border-slate-600 px-2 py-1 rounded-xl">
              {date}
            </div>
          </div>
          <div className="bg-clip-text bg-gradient-to-r from-slate-400 from-10% to-slate-700 to-90% text-transparent font-bold">
            {category}
            <p className="text-slate-300 mt-3 text-3xl">{title}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function StackCard() {
  return (
    <div>
      <div className="w-full rounded-2xl bg-slate-950 flex flex-col md:flex-row items-center justify-center p-8">
        <StackedCard
          title="Design Systems"
          category="UI Assets"
          date="2024"
          color="indigo"
        />
      </div>
    </div>
  );
}
