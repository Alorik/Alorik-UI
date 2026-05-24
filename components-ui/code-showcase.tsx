"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";

interface CodeShowCaseProps {
  code: string;
  title?: string;
  language?: string;
  collapsedHeight?: number;
}

export default function CodeShowCase({
  code,
  title = "Example Code",
  language = "tsx",
  collapsedHeight = 180, // Default collapsed height in pixels
}: CodeShowCaseProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="my-8 border w-full border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs font-medium text-slate-400 font-mono">
            {title}.{language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          aria-label="Copy code"
        >
          {isCopied ? (
            <Check size={16} className="text-emerald-500" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>

      <div className="relative font-mono text-[13px] leading-relaxed">
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : collapsedHeight }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth bezier
          className="overflow-hidden bg-slate-950 p-5 text-slate-300"
        >
          <pre className="whitespace-pre-wrap wrap-break-word">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </motion.div>

        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950 to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="border-t border-slate-800 bg-slate-900/50 p-2 flex justify-center relative z-10">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white py-1.5 px-4 rounded-full hover:bg-slate-800 transition-all"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.span
                key="less"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-2"
              >
                Show Less <ChevronUp size={14} />
              </motion.span>
            ) : (
              <motion.span
                key="more"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="flex items-center gap-2"
              >
                Show More <ChevronDown size={14} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
