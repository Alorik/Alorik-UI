import StarlightButtonDisplay from "@/components-ui/Button/starlight";
import StarLightButtonCode from "@/components/code-snippets/button/starlight-code";


import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function StarLightButtonShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <div>
        <ComponentPlayground
          title="Starlight Button"
          description="A luminous button with an animated starlight border that flows endlessly, creating a subtle yet futuristic interaction."
          code={`import { StarLightButton } from "@/components/alorik/buttons";
          
          export default function Home() {
            return <StarLightButton />;
          }`}
        >
          <StarlightButtonDisplay />
        </ComponentPlayground>
      </div>

      <div>
        <StarLightButtonCode />
      </div>
    </>
  );
}