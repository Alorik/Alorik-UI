import GracefulHoverCard from "@/components-ui/Card/GracefulCard";
import GracefulCardCode from "@/components/code-snippets/card/gracefulCard-code";
import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function GracefulCardShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <div>
        <ComponentPlayground
          title="Graceful Card"
          description="An elegant card component that uses subtle motion and layered depth to reveal content gracefully on hover."
          code={`import { StarLightButton } from "@/components/alorik/buttons";
                
                export default function Home() {
                  return <StarLightButton />;
                }`}
        >
          <GracefulHoverCard />
        </ComponentPlayground>
      </div>

      <div>
        <GracefulCardCode />
      </div>
    </>
  );
}
