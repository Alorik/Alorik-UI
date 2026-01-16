import FloatingNav from "@/components-ui/Navigation/FloatingNav";
import FloatingNavCode from "@/components/code-snippets/navbar/floating-navbar-code";
import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function FloatingNavShowcase() {
  return <>
   <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
        <div className="h-px w-full bg-slate-200 mb-10" />
  
        <div>
          <ComponentPlayground
            title="Expandable Card"
            description="A motion-based card system where focus shifts on hover — the active card expands while surrounding cards subtly shrink and fade back."
            code={`import { ExpandableCardCode } from "@/components/alorik/card";
                    export default function Home() {
                      return <ExpandableCardCode />;
                    }`}
          >
            <FloatingNav />
          </ComponentPlayground>
        </div>
  
        <div>
          <FloatingNavCode />
        </div>
  </>
}