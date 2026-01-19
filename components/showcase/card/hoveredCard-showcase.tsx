import HoveredCard from "@/components-ui/Card/HoveredCard";
import HoveredCardCode from "@/components/code-snippets/card/hoverecard-code";
import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function HoveredCardShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <div>
        <ComponentPlayground
          title="Hovered Card"
          description="A focus-driven card layout where the active card expands on hover while surrounding cards subtly shrink and fade, guiding attention naturally."
          code={`import { HoveredCard } from "@/components/alorik/card";
                  export default function Home() {
                  return <HoveredCard />;
                  }`}
        >
          <HoveredCard />
        </ComponentPlayground>
      </div>

      <div>
        <HoveredCardCode />
      </div>
    </>
  );
}
