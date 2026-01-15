"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

import BeamButton from "@/components-ui/Button/BeamButton";
import StarlightButtonDisplay from "@/components-ui/Button/Button2";
import ScaleButton from "@/components-ui/Button/Button1";
import InputComponent from "@/components-ui/InputComponent";
import GracefulHoverCard from "@/components-ui/Card/GracefulCard";
import HoveredCard from "@/components-ui/Card/HoveredCard";
import StackCard from "@/components-ui/Card/StackedCard";
import CursorFollower from "@/components-ui/cursor/CursorFollower";

import ComponentPlayground from "./component-Playground";

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

/* ------------------------------ Page ------------------------------ */

export default function ComponentShowcase() {
  return (
    <div className="space-y-24">
      {/* INSTALLATION */}

      {/* COMPONENTS */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
        <div className="h-px w-full bg-slate-200 mb-10" />

        <ComponentPlayground
          title="Beam Button"
          description="A glowing button with animated beam effects."
          code={`import { BeamButton } from "@/components/alorik/buttons";

export default function Home() {
  return <BeamButton />;
}`}
        >
          <BeamButton />
        </ComponentPlayground>

        <ComponentPlayground
          title="System Button"
          description="A system-style button with subtle interaction."
          code={`import { StarlightButtonDisplay } from "@/components/alorik/buttons";

export default function Home() {
  return <StarlightButtonDisplay />;
}`}
        >
          <StarlightButtonDisplay />
        </ComponentPlayground>

        <ComponentPlayground
          title="Move Button"
          description="A button with motion-based hover interaction."
          code={`import { ScaleButton } from "@/components/alorik/buttons";

export default function Home() {
  return <ScaleButton />;
}`}
        >
          <ScaleButton />
        </ComponentPlayground>

        <ComponentPlayground
          title="Input Field"
          description="A clean, accessible text input component."
          code={`import { InputComponent } from "@/components/alorik";

export default function Home() {
  return <InputComponent />;
}`}
        >
          <InputComponent />
        </ComponentPlayground>

        <ComponentPlayground
          title="GracefulCard"
          description="A card with smooth hover reveal animations."
          code={`import { GracefulCard } from "@/components/alorik/Card";

export default function Home() {
  return <GracefulCard />;
}`}
        >
          <GracefulHoverCard />
        </ComponentPlayground>

        <ComponentPlayground
          title="HoveredCard"
          description="A card that lifts gently on hover."
          code={`import { HoveredCard } from "@/components/alorik/Card";

export default function Home() {
  return <HoveredCard />;
}`}
        >
          <HoveredCard />
        </ComponentPlayground>

        <ComponentPlayground
          title="StackedCard"
          description="A layered card stack with depth."
          code={`import { StackedCard } from "@/components/alorik/Card";

export default function Home() {
  return <StackedCard />;
}`}
        >
          <StackCard />
        </ComponentPlayground>

        <ComponentPlayground
          title="Cursor Follower"
          description="A container-scoped custom cursor interaction."
          code={`import CursorFollower from "@/components-ui/cursor/CursorFollower";

export default function Home() {
  return <CursorFollower />;
}`}
        >
          <CursorFollower />
        </ComponentPlayground>
      </section>
    </div>
  );
}
