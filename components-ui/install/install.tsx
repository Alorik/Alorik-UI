"use client";
import React, { useState } from "react";
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

  const availableTabs = Object.keys(commands);

  return (
    <div className={`w-full max-w-2xl mb-4 ${className}`}>
      {/* Header / Tabs */}
      <div className="flex items-center gap-1 border-b border-slate-200 bg-slate-50/50 px-2 pt-2">
        {availableTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative px-4 py-2 text-xs font-medium rounded-t-lg transition-colors
              ${
                activeTab === tab
                  ? "text-slate-900 bg-white shadow-sm border border-b-0 border-slate-200 -mb-px z-10"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-100/50"
              }
            `}
          >
            {tab}
            {/* Seamless cover for the bottom border when active */}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white" />
            )}
          </button>
        ))}

        {showTerminalIcon && (
          <div className="ml-auto pr-2">
            <Terminal className="w-4 h-4 text-slate-400" />
          </div>
        )}
      </div>

      {/* Code Content */}
      <div className="relative bg-white border border-t-0 border-slate-200 rounded-b-lg overflow-hidden">
        <div className="px-4 py-3 font-mono text-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="text-slate-700"
            >
              <span className="text-slate-400 select-none">$ </span>
              {commands[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Copy command"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Check className="w-4 h-4 text-green-600" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Copy className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
