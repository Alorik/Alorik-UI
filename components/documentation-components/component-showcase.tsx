"use client";

import BeamButton from "@/components-ui/Button/BeamButton";
import StarlightButtonDisplay from "@/components-ui/Button/starlight";
import ScaleButton from "@/components-ui/Button/scale-button";
import InputComponent from "@/components-ui/Input/InputComponent";
import GracefulHoverCard from "@/components-ui/Card/GracefulCard";
import HoveredCard from "@/components-ui/Card/HoveredCard";
import StackCard from "@/components-ui/Card/StackedCard";
import CursorFollower from "@/components-ui/cursor/CursorFollower";

import ComponentPlayground from "./component-Playground";

export default function ComponentShowcase() {
  return (
    <div className="space-y-24">
      {/* COMPONENTS */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
        <div className="h-px w-full bg-slate-200 mb-10" />

        <ComponentPlayground
          id="beambutton"
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
          id="sys"
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
          id="move"
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
          id="input"
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
          id="graceful"
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
          id="hovercard"
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
          id="stacked"
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
          id="cursor"
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
