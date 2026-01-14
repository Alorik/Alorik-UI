"use client";

import { useState } from "react";
import { Box, Check, Copy, Terminal } from "lucide-react";
import BeamButton from "@/components-ui/Button/BeamButton";
import StarlightButtonDisplay from "@/components-ui/Button/Button2";
import ScaleButton from "@/components-ui/Button/Button1";
import InputComponent from "@/components-ui/InputComponent";
import GracefulHoverCard from "@/components-ui/Card/GracefulCard";
import HoveredCard from "@/components-ui/Card/HoveredCard";
import StackCard from "@/components-ui/Card/StackedCard";
import ParticlesHero from "@/components-ui/Hero/ParticlesHero";
import GridBackground from "@/components-ui/Hero/GridBackground";
import CursorFollower from "@/components-ui/cursor/CursorFollower";

interface ComponentsPreviewProps {
  title: string;
  children: React.ReactNode;
  code: string;
}

// 🔑 Single source of truth for section IDs
const toSectionId = (label: string) => label.toLowerCase().replace(/\s+/g, "-");

/* ----------------------------- Code Block ----------------------------- */

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl bg-[#0f1117] border border-slate-800 overflow-hidden">
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

/* -------------------------- Component Preview -------------------------- */

const ComponentPreview = ({
  title,
  children,
  code,
}: ComponentsPreviewProps) => (
  <section id={toSectionId(title)} className="mb-16 scroll-mt-24">
    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
      <Box size={18} className="text-slate-500" />
      {title}
    </h3>

    <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
      <div className="p-12 flex items-center justify-center min-h-[220px] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]">
        {children}
      </div>

      <div className="border-t border-slate-200">
        <CodeBlock code={code} />
      </div>
    </div>
  </section>
);

/* ------------------------------ Page ------------------------------ */

export default function ComponentShowcase() {
  return (
    <div className="space-y-24">
      {/* INSTALLATION */}
      <section id="installation" className="space-y-6 scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-900">Installation</h2>

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

      {/* COMPONENTS */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
        <div className="h-px w-full bg-slate-200 mb-10" />

        <ComponentPreview
          title="Beam Button"
          code={`import { BeamButton } from "@/components/alorik/buttons";

export default function Home() {
  return <BeamButton />;
}`}
        >
          <BeamButton />
        </ComponentPreview>

        <ComponentPreview
          title="System Button"
          code={`import { StarlightButtonDisplay} from "@/components/alorik/buttons";
export default function Home() {
  return < StarlightButtonDisplay/>;
}`}
        >
          <StarlightButtonDisplay />
        </ComponentPreview>
        <ComponentPreview
          title="Move Button"
          code={`import { ScaleButton } from "@/components/alorik/buttons";
export default function Home() {
  return <ScaleButton />;
}`}
        >
          <ScaleButton />
        </ComponentPreview>

        {/* Text-Input */}
        <ComponentPreview
          title="Input Field"
          code={`import { InputComponent } from "@/components/alorik";
export default function Home() {
  return <InputComponent />;
}`}
        >
          <InputComponent />
        </ComponentPreview>

        {/* Cards */}
        <ComponentPreview
          title="GracefulCard"
          code={`import { GracefulCard } from "@/components/alorik/Card";
export default function Home() {
  return <GracefulCard />;
}`}
        >
          <GracefulHoverCard />
        </ComponentPreview>
        <ComponentPreview
          title="HoveredCard"
          code={`import { HoveredCard } from "@/components/alorik/Card";
export default function Home() {
  return <HoveredCard />;
}`}
        >
          <HoveredCard />
        </ComponentPreview>
        <ComponentPreview
          title="StackedCard"
          code={`import { StackedCard } from "@/components/alorik/Card";
export default function Home() {
  return <StackedCard />;
}`}
        >
          <StackCard />
        </ComponentPreview>
      </section>
    </div>
  );
}
