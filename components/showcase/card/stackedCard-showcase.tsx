import StackedCards from "@/components-ui/Card/StackedCard";
import StackedCardCode from "@/components/code-snippets/card/stackedcard-code";
import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function StackedCardShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <div>
        <ComponentPlayground
          id="stacked-card"
          title="Stacked Card"
          description="A layered card interaction that unfolds on hover — the center card rises and scales while the side cards drift apart, revealing visual hierarchy."
          code={`import { StackedCard } from "@/components/alorik/card";
                  
                  export default function Home() {
                    return <StackedCard />;
                  }`}
        >
          <StackedCards />
        </ComponentPlayground>
      </div>

      <div>
        <StackedCardCode />
      </div>
    </>
  );
}
