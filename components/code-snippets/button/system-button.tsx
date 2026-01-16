import CodeShowCase from "@/components-ui/code-showcase";

const code = String.raw`"use client";

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
  collapsedHeight = 180,
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
        <span className="text-xs font-medium text-slate-400 font-mono">
          {title}.{language}
        </span>
      </div>

      <pre className="p-5 text-sm text-slate-300 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}
`;

export default function SystemButtonCode() {
  return (
    <div>
      <CodeShowCase title="System-Button" code={code} />
    </div>
  );
}
