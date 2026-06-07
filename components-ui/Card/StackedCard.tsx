"use client";

import { motion } from "framer-motion";
import { CreditCard, ScanLine, Wifi } from "lucide-react";

export default function StackedCards() {
  return (
    <div className="flex items-center justify-center h-125 bg-slate-100">
      <motion.div
        className="relative w-72 h-44 group perspective-1000"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        
        {/* --- Card 3: RIGHT (Back Layer - Rose) --- */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-linear-to-br from-rose-500 to-rose-600 shadow-xl border border-rose-400/50 flex flex-col justify-between p-5 text-white z-0"
          variants={{
            rest: { x: 0, y: 0, rotate: 0, scale: 0.95, opacity: 0.8 },
            hover: { x: 80, y: -20, rotate: 20, scale: 1, opacity: 1 },
          }}
          transition={{
            duration: 3.9,
            type: "spring",
            stiffness: 200,
            damping: 35,
          }}
          style={{ transformOrigin: "bottom center" }}
        >
          <div className="flex justify-between items-center opacity-70">
            <div className="w-8 h-5 rounded bg-white/20" />
            <Wifi size={18} />
          </div>
          <div className="space-y-1">
            <div className="h-2 w-12 rounded bg-white/30" />
            <div className="h-2 w-24 rounded bg-white/30" />
          </div>
        </motion.div>


        {/* --- Card 2: LEFT (Middle Layer - Dark) -- */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-slate-900 shadow-xl border border-slate-700 flex flex-col justify-between p-5 text-slate-200 z-10"
          variants={{
            rest: { x: 0, y: 0, rotate: 0, scale: 0.95, opacity: 0.8 },
            hover: { x: -80, y: -20, rotate: -20, scale: 1, opacity: 1 },
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 35,
          }}
          style={{ transformOrigin: "bottom center" }}
        >
          <div className="flex justify-between items-center text-slate-500">
            <ScanLine size={20} />
            <div className="text-xs font-mono tracking-widest">**** 4242</div>
          </div>
          <div className="flex justify-between items-end">
            <div className="h-8 w-12 rounded bg-yellow-600/20 border border-yellow-600/50" />
          </div>
        </motion.div>

        
        {/* --- Card 1: UP (Front Layer - White/Clean) -- */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-white shadow-2xl border border-slate-100 flex flex-col justify-between p-6 z-20"
          variants={{
            rest: { y: 0, scale: 1 },
            hover: { y: -50, scale: 1.05 },
          }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 35,
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-slate-50 text-slate-600 rounded-lg">
                <CreditCard size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Main Card</h3>
                <p className="text-[10px] text-slate-500 font-medium">
                  Active Status
                </p>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          </div>

          {/* Body */}
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-3xl font-bold text-slate-900 tracking-tight">
                $8,240.00
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <motion.div
                className="bg-emerald-500 h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ delay: 0.4 }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-medium text-slate-400">
              <span>Limit</span>
              <span>$12k</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
