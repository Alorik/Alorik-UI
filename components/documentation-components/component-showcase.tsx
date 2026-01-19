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
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
        <div className="h-px w-full bg-slate-200 mb-10" />

        {/* Beam Button */}
        <ComponentPlayground
          title="Beam Button"
          description="A high-impact call-to-action with a flowing beam animation that draws attention without distraction."
          code={`import { BeamButton } from "@/components/alorik/buttons";

export default function Home() {
  return <BeamButton />;
}`}
        >
          <BeamButton />
        </ComponentPlayground>

        {/* Starlight Button */}
        <ComponentPlayground
          title="Starlight Button"
          description="A luminous button featuring an endless animated border, inspired by subtle starlight motion."
          code={`import { StarlightButtonDisplay } from "@/components/alorik/buttons";

export default function Home() {
  return <StarlightButtonDisplay />;
}`}
        >
          <StarlightButtonDisplay />
        </ComponentPlayground>

        {/* Scale / Move Button */}
        <ComponentPlayground
          title="Move Button"
          description="A motion-driven button that reacts to hover with depth, tilt, and tactile feedback."
          code={`import { ScaleButton } from "@/components/alorik/buttons";

export default function Home() {
  return <ScaleButton />;
}`}
        >
          <ScaleButton />
        </ComponentPlayground>

        {/* Input */}
        <ComponentPlayground
          title="Interactive Input"
          description="A responsive input field with animated glow feedback that reacts naturally to user interaction."
          code={`import { InputComponent } from "@/components/alorik";

export default function Home() {
  return <InputComponent />;
}`}
        >
          <InputComponent />
        </ComponentPlayground>

        {/* Graceful Card */}
        <ComponentPlayground
          title="Graceful Card"
          description="A refined card component with elegant hover reveals and smooth visual transitions."
          code={`import { GracefulCard } from "@/components/alorik/Card";

export default function Home() {
  return <GracefulCard />;
}`}
        >
          <GracefulHoverCard />
        </ComponentPlayground>

        {/* Hovered Card */}
        <ComponentPlayground
          title="Hovered Card"
          description="A focus-driven card layout where the active card stands out while others subtly fade and scale down."
          code={`import { HoveredCard } from "@/components/alorik/Card";

export default function Home() {
  return <HoveredCard />;
}`}
        >
          <HoveredCard />
        </ComponentPlayground>

        {/* Stacked Card */}
        <ComponentPlayground
          title="Stacked Card"
          description="A layered card stack that expands on hover, creating depth through motion and spatial separation."
          code={`import { StackedCard } from "@/components/alorik/Card";

export default function Home() {
  return <StackedCard />;
}`}
        >
          <StackCard />
        </ComponentPlayground>

        {/* Cursor Follower */}
        <ComponentPlayground
          title="Cursor Follower"
          description="A container-scoped cursor interaction that responds fluidly to movement and hover context."
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
