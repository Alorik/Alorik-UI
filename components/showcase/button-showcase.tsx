import BeamButton from "@/components-ui/Button/BeamButton";
import ComponentPlayground from "../documentation-components/component-Playground";
import Dummy from "./dummy";

export default function ButtonShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <ComponentPlayground
        title="Beam Button"
        description="A glowing button with animated beam effects."
        code={`import { BeamButton } from "@/components/alorik/buttons";
  
  export default function Home() {
    return <BeamButton />;
  }`}
      >
        <BeamButton />
      </ComponentPlayground>
      <Dummy />
    </>
  );
}
