import BreadCrumb from "@/components-ui/Navigation/BreadCrumb";
import BreadCrumbNavCode from "@/components/code-snippets/navbar/BreadCrumb-code";
import ComponentPlayground from "@/components/documentation-components/component-Playground";

export default function BreadCrumbNavbarShowcase() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Components</h2>
      <div className="h-px w-full bg-slate-200 mb-10" />

      <div>
        <ComponentPlayground
          id="breadCrumb"
          title="Breadcrumb Navbar"
          description="A dynamic breadcrumb navigation where items respond to hover focus, subtly guiding attention while maintaining clear navigation context."
          code={`import { BreadCrumb } from "@/components-ui/Navbar";
                      export default function Home() {
                        return <BreadCrumb />;
                      }`}
        >
          <BreadCrumb />
        </ComponentPlayground>
      </div>

      <div>
        <BreadCrumbNavCode />
      </div>
    </>
  );
}
