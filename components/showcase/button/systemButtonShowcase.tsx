import SystemButton from "@/components-ui/Button/scale-button";
import SystemButtonCode from "@/components/code-snippets/system-button";
import ComponentPlayground from "@/components/documentation-components/component-Playground";


export default function SystemButtonShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <div>
        <ComponentPlayground
          title="System Button"
          description="A responsive button that subtly Systems to create a natural, tactile interaction."
          code={`import { SystemButton } from "@/components/alorik/buttons";
      
      export default function Home() {
        return <SystemButton />;
      }`}
        >
          <SystemButton />
        </ComponentPlayground>
      </div>

      <div>
        <SystemButtonCode />
      </div>
    </>
  );
}
