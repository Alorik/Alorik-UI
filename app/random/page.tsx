
"use client";

import { motion } from "framer-motion";
import { CreditCard, ScanLine, Wifi } from "lucide-react";

export default function Random() {
  return (
    <div className="flex items-center justify-center h-125 bg-slate-100">
      <motion.div
        className="relative w-72 h-44 group perspective-1000"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >

        {/* -- Card 3: RIGHT (Back Layer - Rose) --- */}
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




        
      </motion.div>
    </div>
  );
}
