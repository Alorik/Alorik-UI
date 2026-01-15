"use client"

import InstallationBlock from "@/components-ui/install/install";
import { ArrowRight, Check, CheckCircle2, ChevronRight, Copy, Terminal } from "lucide-react";
import { useState } from "react";

export default function InstallationPage() {



const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className=" mx-auto relative rounded-xl bg-[#0f1117] border border-slate-800 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
        </div>

        <button
          onClick={handleCopy}
          className="text-xs text-slate-400 hover:text-white transition flex items-center gap-1"
        >
          {copied ? (
            <Check size={12} className="text-emerald-500" />
          ) : (
            <Copy size={12} />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre className="p-4 text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

  return (
    <div className=" mx-auto py-12 px-6">
      {/* Header */}
      <div className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          Installation
        </h1>
        <p className="text-lg text-slate-600">
          Get started with Alorik UI by setting up a new Next.js project.
        </p>
      </div>

      <div className="space-y-12">
        {/* Step 1: Create App */}
        <section className="relative pl-8 border-l border-slate-200 space-y-4">
          <div className="absolute -left-[9px] top-0 bg-white p-1">
             <div className="w-2.5 h-2.5 rounded-full bg-slate-200 border-2 border-white ring-1 ring-slate-300" />
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="text-slate-400 font-normal">01.</span> Create Project
          </h3>
          <p className="text-slate-600 text-sm leading-6">
            Start by creating a new Next.js application using `create-next-app`.
          </p>

          <InstallationBlock
            defaultTab="npm"
            commands={{
              npm: "npx create-next-app@latest",
              pnpm: "pnpm create next-app",
              yarn: "yarn create next-app",
              bun: "bun create next-app",
            }}
          />
        </section>

        {/* Step 2: Configuration (Terminal) */}
        <section className="relative pl-8 border-l border-slate-200 space-y-4">
          <div className="absolute -left-[9px] top-0 bg-white p-1">
             <div className="w-2.5 h-2.5 rounded-full bg-slate-200 border-2 border-white ring-1 ring-slate-300" />
          </div>

          <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
             <span className="text-slate-400 font-normal">02.</span> Configuration
          </h3>
          <p className="text-slate-600 text-sm leading-6">
            You will be asked a few questions. We recommend the following defaults:
          </p>

          {/* Simulated Terminal Window */}
          <div className="bg-[#0f172a] rounded-xl shadow-lg border border-slate-800 overflow-hidden text-sm font-mono leading-relaxed p-5 text-slate-300">
             <div className="space-y-1">
                <PromptLine question="What is your project named?" answer="my-app" />
                <PromptLine question="Would you like to use TypeScript?" answer="Yes" />
                <PromptLine question="Would you like to use ESLint?" answer="Yes" />
                <PromptLine question="Would you like to use Tailwind CSS?" answer="Yes" />
                <PromptLine question="Would you like to use `src/` directory?" answer="Yes" />
                <PromptLine question="Would you like to use App Router? (recommended)" answer="Yes" />
                <PromptLine question="Would you like to customize the default import alias (@/*)?" answer="No" />
             </div>
          </div>
        </section>

        {/* Step 3: Run */}
        <section className="relative pl-8 border-l-0 border-slate-200 space-y-4">
           {/* End dot */}
          <div className="absolute -left-[9px] top-0 bg-white p-1">
             <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-white ring-1 ring-slate-900" />
          </div>

          <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
             <span className="text-slate-400 font-normal">03.</span> Run the app
          </h3>
          <p className="text-slate-600 text-sm leading-6">
            Navigate into your project directory and start the development server.
          </p>

          <InstallationBlock
            defaultTab="npm"
            commands={{
              npm: "cd my-app && npm run dev",
              pnpm: "cd my-app && pnpm dev",
              yarn: "cd my-app && yarn dev",
              bun: "cd my-app && bun dev",
            }}
          />

          <div className="pt-4">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-lg border border-emerald-100">
                <CheckCircle2 size={16} />
                You are ready to start building!
             </div>
          </div>
        </section>
<section id="installation" className="space-y-6 scroll-mt-24">


        <p className="text-slate-600 max-w-xl">
          Install the required dependencies to start using Alorik UI.
        </p>

        <CodeBlock
          code={`npm install framer-motion lucide-react clsx tailwind-merge`}
        />

        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm text-amber-800 flex gap-3 max-w-xl">
          <Terminal size={16} className="mt-0.5 shrink-0" />
          <p>
            Alorik UI assumes Tailwind CSS is already configured in your
            project.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}

// --- Helper Component for the Terminal Lines ---

function PromptLine({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="flex flex-wrap md:items-center gap-x-3">
      <span className="text-sky-400 shrink-0">?</span>
      <span className="text-slate-200">{question}</span>
      <span className="text-slate-500 hidden md:inline">›</span>
      <span className="text-sky-400">{answer}</span>
    </div>
  );
}

