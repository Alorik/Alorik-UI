"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Trash2, CheckCircle2 } from "lucide-react";

export default function AnimatedList() {
  const [items, setItems] = useState([
    { id: 1, title: "Review Pull Request", color: "bg-blue-500" },
    { id: 2, title: "Production Deployment", color: "bg-amber-500" },
    { id: 3, title: "Update Documentation", color: "bg-emerald-500" },
    { id: 4, title: "Design System Sync", color: "bg-purple-500" },
  ]);

  return (
    <div className="min-h-screen items-center flex justify-center">
      <div className="w-full max-w-md space-y-3">
        <h2 className="text-xl font-bold text-white mb-10 py-4">
          Activity Feed
        </h2>
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex justify-between items-center group"
            >
              <div
                className={`w-8 h-8 rounded-lg  bg-opacity-20 flex items-center justify-center text-white`}
              >
                <CheckCircle2 size={24} />
              </div>
              <div>
                <span className="font-medium text-slate-200">{item.title}</span>
              </div>
              <button
                onClick={() => setItems(items.filter((i) => i.id !== item.id))}
                className="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={20} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        {items.length === 0 && (
          <p className="text-center text-slate-500 py-8">
            All tasks completed.
          </p>
        )}
      </div>
    </div>
  );
}
