import { Terminal, Copy, Layers } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div className=" mx-auto py-10 px-6">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="space-y-4 border-b border-slate-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Introduction
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            Design systems, without the rigidity. Build expressive interfaces
            with thoughtful defaults and complete customization freedom.
          </p>
        </div>

        {/* Core Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-600">
          <div className="space-y-2">
            <div className="p-2 w-fit rounded-lg bg-slate-100 text-slate-900 mb-3">
              <Layers size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Curated Collection</h3>
            <p className="text-sm leading-6 text-slate-500">
              Beautifully crafted, ready-to-use components designed for
              real-world application needs.
            </p>
          </div>
          <div className="space-y-2">
            <div className="p-2 w-fit rounded-lg bg-slate-100 text-slate-900 mb-3">
              <Terminal size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Zero Runtime</h3>
            <p className="text-sm leading-6 text-slate-500">
              No npm install. No heavy bundles. You own the code completely from
              day one.
            </p>
          </div>
          <div className="space-y-2">
            <div className="p-2 w-fit rounded-lg bg-slate-100 text-slate-900 mb-3">
              <Copy size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Copy & Paste</h3>
            <p className="text-sm leading-6 text-slate-500">
              Select what you need, paste it into your project, and customize it
              to fit your brand.
            </p>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Why copy-paste?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              Alorik UI is <strong>not</strong> a traditional component library.
              Most libraries lock you into an abstraction layer that makes
              simple customizations frustratingly difficult. You often end up
              fighting the library to implement your specific design
              requirements.
            </p>
            <p className="mt-4">
              Instead, we treat code as a starting point. By copying the source
              directly into your project:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li>You avoid dependency bloat and version conflicts.</li>
              <li>You have full control over styling and behavior.</li>
              <li>
                Components can evolve naturally alongside your application.
              </li>
            </ul>
          </div>
        </div>

        {/* Callout / FAQ style box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-2">
            Is this an npm package?
          </h3>
          <p className="text-slate-600 text-sm leading-6">
            No. There is no{" "}
            <code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded text-slate-800">
              npm i alorik-ui
            </code>
            . You don&apos;t add it as a dependency. You use it as a reference
            to build your own internal UI library tailored specifically to your
            product.
          </p>
        </div>
      </div>
    </div>
  );
}
