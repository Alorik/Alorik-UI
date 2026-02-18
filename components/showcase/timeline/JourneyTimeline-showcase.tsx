import Timeline2 from "@/components-ui/Timeline/Journey-timeline";
import JourneyTimelineCode from "@/components/code-snippets/timeline/journey-timeline-code";
import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function JourneyTimelineShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <div>
        <ComponentPlayground
          title="Journey Timeline"
          description="A motion-based card system where focus shifts on hover — the active card expands while surrounding cards subtly shrink and fade back."
          code={`import { JourneyTimeline } from "@/components/alorik/card";
                      export default function Home() {
                        return <JourneyTimeline />;
                      }`}
        >
          <Timeline2 />
        </ComponentPlayground>
      </div>

      <div>
        <JourneyTimelineCode />
      </div>
    </>
  );
}
