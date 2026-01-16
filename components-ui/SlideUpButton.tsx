"use client";
import { motion } from "framer-motion";

const AgencyButton = ({ children }: { children: string }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="rounded-full transition-colors overflow-hidden px-8 py-3 bg-slate-950 border-2 border-slate-700 group relative hover:border-slate-500"
    >
      <div className="relative overflow-hidden font-bold text-slate-200">
        {/* layer1 */}
        <div className="flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
          {children}
        </div>
        {/* layer2 */}
        <div className="inset-0 absolute translate-y-[150%] group-hover:translate-y-0 ease-in-out flex items-center justify-center gap-2 transition-transform duration-300">

          <span className="text-white">Proceed</span>
        </div>
      </div>
    </motion.button>
  );
};

export default function SlideButton() {
  return (
    <div className="bg-slate-950 flex flex-col items-center rounded-2xl justify-center p-8">
      <AgencyButton>Get in touch</AgencyButton>
    </div>
  );
}
