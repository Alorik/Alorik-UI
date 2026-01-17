import ClipPath from "@/components-ui/Card/clipPath";
import ClipPathCardCode from "@/components/code-snippets/card/clipcard-code";
import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function ClipPathCardShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <div>
        <ComponentPlayground
          id="clip card"
          title="Clip Path Card"
          description="A dynamic card that uses a cursor-driven clip path to uncover vivid layers, creating a bold and immersive hover experience."
          code={`import { ClipPathCard } from "@/components/alorik/card";
            
            export default function Home() {
              return <ClipPathCard />;
            }`}
        >
          <ClipPath />
        </ComponentPlayground>
      </div>

      <div>
        <ClipPathCardCode />
      </div>
    </>
  );
}
