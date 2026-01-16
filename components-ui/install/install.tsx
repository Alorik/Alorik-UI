"use client";
import  { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InstallationBlockProps {
  commands: Record<string, string>;
  defaultTab?: string;
  showTerminalIcon?: boolean;
  className?: string;
}

export default function InstallationBlock({
  commands,
  defaultTab = "npm",
  showTerminalIcon = true,
  className = "",
}: InstallationBlockProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`w-full border border-slate-200 rounded-xl overflow-hidden bg-white ${className}`}
    >
      {/* Header / Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/50 px-2 pt-2">
        {showTerminalIcon && (
          <div className="pl-3 pr-2 py-2">
            <Terminal className="w-4 h-4 text-slate-400" />
          </div>
        )}

        <div className="flex items-center gap-1">
          {Object.keys(commands).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative px-3 py-1.5 text-xs font-medium rounded-t-lg transition-colors
                ${
                  activeTab === tab
                    ? "text-slate-900 bg-white shadow-sm border border-b-0 border-slate-200 -mb-px z-10"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Code Content */}
      <div className="relative group">
        <div className="px-5 py-4 font-mono text-sm overflow-x-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.15 }}
              className="text-slate-700 flex items-center gap-2"
            >
              <span className="text-slate-400 select-none">$</span>
              <span className="whitespace-nowrap">{commands[activeTab]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleCopy}
          className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-white border border-slate-200 text-slate-400 opacity-0 group-hover:opacity-100 transition-all hover:text-slate-700 hover:border-slate-300 focus:opacity-100"
          aria-label="Copy command"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <Copy className="w-3.5 h-3.5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
