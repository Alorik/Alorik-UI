import {
  Terminal,
  Copy,
  Layers,

  Code2,
  Paintbrush,
} from "lucide-react";
import { FAQSection } from "./faq";

export default function IntroductionPage() {
  return (
    <div className="mx-auto py-10 px-6">
      <div className="space-y-16">
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

        {/* New Section: The Philosophy (Replaces "Why copy paste") */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Ownership over Abstraction
            </h2>
            <div className="prose prose-slate text-slate-600">
              <p>
                Traditional component libraries are often &quot;black
                boxes.&quot; You pass props in, and you hope the right styles
                come out. When you need to change something core to the design,
                you end up fighting the library&apos;s constraints.
              </p>
              <p>
                Alorik UI inverts this.{" "}
                <strong>
                  We provide the source code, not the abstraction.
                </strong>
              </p>
              <p>
                By copying the code, you decouple your project from external
                dependencies. Updates happen on your terms, styling is fully
                transparent, and you never have to wait for a library maintainer
                to fix a bug.
              </p>
            </div>
          </div>

          {/* Visual Workflow (Replaces the specific NPM question) */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="font-semibold text-slate-900 mb-6">How it works</h3>

            <div className="space-y-8 relative">
              {/* Connecting Line */}
              <div className="absolute left-[19px] top-2 bottom-6 w-0.5 bg-slate-200" />

              {/* Step 1 */}
              <div className="relative flex gap-5">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
                  <Copy size={18} className="text-slate-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">
                    Pick & Copy
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">
                    Find the component you need and copy the source code to your
                    clipboard.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-5">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
                  <Code2 size={18} className="text-slate-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">
                    Paste & Install
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">
                    Paste it into your project. If it uses external utils (like
                    clsx), install them once.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-5">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 border border-slate-900 shadow-sm">
                  <Paintbrush size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">
                    Make it yours
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">
                    It&apos;s your code now. Tweak the Tailwind classes, change
                    the motion variants, or rewrite the logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection />
    </div>
  );
}
