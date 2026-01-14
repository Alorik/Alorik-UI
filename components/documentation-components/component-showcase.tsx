"use client"
import BeamButton from "@/components-ui/Button/BeamButton";
import Button1 from "@/components-ui/Button/Button1";
import { Box, Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";


interface ComponentsPreviewProps {
  title: string;
  children: string;
  code: string;
}


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

const ComponentPreview = ({
  title,
  children,
  code,
}: ComponentsPreviewProps) => (
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




export default function ComponentShowcase() {
  return (
    <div>
      <section className="space-y-16">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
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
    </div>
  );
}