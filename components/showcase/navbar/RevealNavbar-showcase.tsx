import NavReveal from "@/components-ui/Navigation/NavRecveal";
import NavRevealCode from "@/components/code-snippets/navbar/reveal-navbar-code";
import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function RevealNavbarShowcase() {
  return <>
     <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
          <div className="h-px w-full bg-slate-200 mb-10" />
    
          <div>
            <ComponentPlayground
              title="Expandable Card"
              description="A motion-based card system where focus shifts on hover — the active card expands while surrounding cards subtly shrink and fade back."
              code={`import { RevealNavbarShowcase } from "@/components/alorik/card";
                      export default function Home() {
                        return <RevealNavbarShowcase />;
                      }`}
            >
              <NavReveal/>
            </ComponentPlayground>
          </div>
    
          <div>
            <NavRevealCode />
          </div>
  </>
}