"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Copy,
  Check,
  Menu,
  X,
  Sparkles,
  Command,
  Box,
  Layout,
  Type,
} from "lucide-react";
import BeamButton from "@/components-ui/Button/BeamButton";
import Button1 from "@/components-ui/Button/Button1";

// --- 1. INLINE COMPONENTS FOR PREVIEW ---


// --- 2. DOCS UI COMPONENTS ---

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl bg-[#0f1117] border border-slate-800 overflow-hidden group">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-1"
        >
          {copied ? (
            <Check size={12} className="text-emerald-500" />
          ) : (
            <Copy size={12} />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-xs font-mono text-slate-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const ComponentPreview = ({ title, children, code }) => (
  <div
    className="mb-12 scroll-mt-24"
    id={title.toLowerCase().replace(" ", "-")}
  >
    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
      <Box size={20} className="text-gray-500" />
      {title}
    </h3>
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
      <div className="p-12 flex items-center justify-center min-h-[200px] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]">
        {children}
      </div>
      <div className="border-t border-slate-200 p-0">
        <CodeBlock code={code} />
      </div>
    </div>
  </div>
);

// --- 3. MAIN LAYOUT ---

export default function AlorikDocs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("introduction");

  const sidebarLinks = [
    {
      category: "Getting Started",
      items: ["Introduction", "Installation", "Theming"],
    },
    {
      category: "Components",
      items: ["Beam Button", "System Button", "Ghost Keyboard"],
    },
    { category: "Layouts", items: ["Hero Section", "Features Grid"] },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-gray-100 flex">
      {/* MOBILE HEADER */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 flex items-center px-4 justify-between">
        <span className="font-bold text-lg tracking-tight">Alorik UI</span>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-40 h-screen w-64 border-r border-slate-200 bg-white
          transition-transform duration-300 lg:translate-x-0 pt-20 lg:pt-8 px-6
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="mb-8 hidden lg:block">
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs">
              A
            </div>
            Alorik
          </h1>
          <p className="text-xs text-slate-500 mt-1">Documentation v1.0</p>
        </div>

        <nav className="space-y-8">
          {sidebarLinks.map((section) => (
            <div key={section.category}>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                {section.category}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActiveSection(item.toLowerCase())}
                      className={`text-sm block transition-colors w-full text-left ${
                        activeSection === item.toLowerCase()
                          ? "text-gray-600 font-medium translate-x-1"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0 pt-24 lg:pt-12 px-6 lg:px-12 max-w-5xl pb-24">
        {/* HERO HEADER */}
        <div className="mb-16 border-b border-slate-200 pb-10">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Introduction
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
            Alorik is a collection of re-usable components built with Radix UI
            and Tailwind CSS. It's not a component library. It's a collection of
            copy and paste components that you can copy into your apps.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
              Browse Components
            </button>
            <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">
              Read the Philosophy
            </button>
          </div>
        </div>

        {/* INSTALLATION */}
        <section className="mb-20 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Installation</h2>
          <p className="text-slate-600">
            Install the core dependencies to get started.
          </p>
          <CodeBlock
            code={`npm install framer-motion lucide-react clsx tailwind-merge`}
          />

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm text-amber-800 flex items-start gap-3">
            <Terminal size={16} className="mt-0.5 shrink-0" />
            <p>
              Alorik assumes you have Tailwind CSS already configured in your
              project.
            </p>
          </div>
        </section>

        {/* COMPONENTS SHOWCASE */}
        <section className="space-y-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Components
            </h2>
            <div className="w-full h-px bg-slate-200 mb-8" />
          </div>

          <ComponentPreview
            title="Beam Button"
            code={`import { BeamButton } from "@/components/alorik/buttons";\n\nexport default function Home() {\n  return <BeamButton />\n}`}
          >
            <BeamButton />
          </ComponentPreview>

          <ComponentPreview
            title="System Button"
            code={`import { Button1 } from "@/components/alorik/buttons";\n\nexport default function Home() {\n  return <Button1 />\n}`}
          >
            <Button1 />
          </ComponentPreview>
        </section>
      </main>

      {/* TABLE OF CONTENTS (Right Sidebar) */}
      <div className="hidden xl:block w-64 border-l border-slate-200 p-8 h-screen sticky top-0">
        <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
          On This Page
        </h5>
        <ul className="space-y-3 text-sm text-slate-500">
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Introduction
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Installation 
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Components
            </a>
          </li>
          <li className="pl-4 border-l border-slate-200">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Beam Button
            </a>
          </li>
          <li className="pl-4 border-l border-slate-200">
            <a href="#" className="hover:text-gray-600 transition-colors">
              System Button
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
