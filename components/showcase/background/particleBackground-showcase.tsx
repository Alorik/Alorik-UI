import ParticlesHero from "@/components-ui/Hero/ParticlesHero";
import ParticlesBackgroundCode from "@/components/code-snippets/background/particles-background-code";
import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function ParticlesBackgroundShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <div>
        <ComponentPlayground
          id="particles-background"
          title="Starlight Button"
          description="A luminous button with an animated starlight border that flows endlessly, creating a subtle yet futuristic interaction."
          code={`import { ParticlesHero } from "@/components/alorik/buttons";
              
              export default function Home() {
                return <ParticlesHero />;
              }`}
        >
          <ParticlesHero />
        </ComponentPlayground>
      </div>

      <div>
        <ParticlesBackgroundCode />
      </div>
    </>
  );
}
