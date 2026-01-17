"use client";
import { Check, Code, Copy, Eye } from "lucide-react";
import { useEffect, useState } from "react";

interface ComponentPlaygroundProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}

export default function ComponentPlayground({
  title,
  description,
  children,
  code,
}: ComponentPlaygroundProps) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const id = title.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id={id} className="mb-16 scroll-mt-32">
      <div className=" top-20 z-999 mb-6 bg-white/80  border-b border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          {title}
        </h3>
        {description && <p className="text-slate-500 mt-2">{description}</p>}
        <div className="border border-slate-200 mt-2" />
      </div>

      {/* FIXED: Removed overflow-hidden, adjusted structure */}
      <div className="border border-slate-200 rounded-xl bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/50">
          <div className="flex bg-slate-200/50 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === "preview"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Eye size={14} /> Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === "code"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Code size={14} /> Code
            </button>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === "code" && (
              <button
                onClick={handleCopy}
                className="text-xs text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1.5 px-2 py-1 rounded hover:bg-slate-100"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy Code"}
              </button>
            )}
          </div>
        </div>

        {/* FIXED: Allow cursor to escape, removed problematic overflow */}
        <div className="relative rounded-b-xl overflow-hidden">
          {activeTab === "preview" ? (
            <div className="min-h-[300px] flex items-center justify-center p-12 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]">
              <div className="absolute inset-0 bg-white/30 pointer-events-none" />
              <div className="relative z-10">{children}</div>
            </div>
          ) : (
            <div className="bg-[#0f1117] p-6 overflow-x-auto min-h-[300px]">
              <pre className="text-sm font-mono text-slate-300 leading-relaxed">
                <code>{code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
