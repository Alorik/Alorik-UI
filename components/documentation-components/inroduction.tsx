import { Terminal, Copy, Layers, Code2, Paintbrush } from "lucide-react";
import { FAQSection } from "./faq";

export default function IntroductionPage() {
  return (
    <div className="mx-auto py-10 px-6">
      <div className="space-y-16">
        {/* ------------------------------------------------------------------ */}
        {/* Header                                                             */}
        {/* ------------------------------------------------------------------ */}
        <div className="space-y-4 border-b border-slate-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Introduction
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            Design systems without rigidity. Build expressive, modern interfaces
            with thoughtful defaults and complete customization freedom.
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Core Philosophy                                                     */}
        {/* ------------------------------------------------------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-600">
          <div className="space-y-2">
            <div className="p-2 w-fit rounded-lg bg-slate-100 text-slate-900 mb-3">
              <Layers size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Curated Collection</h3>
            <p className="text-sm leading-6 text-slate-500">
              Carefully designed, production-ready components built for
              real-world interfaces — not demos or experiments.
            </p>
          </div>

          <div className="space-y-2">
            <div className="p-2 w-fit rounded-lg bg-slate-100 text-slate-900 mb-3">
              <Terminal size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Zero Runtime</h3>
            <p className="text-sm leading-6 text-slate-500">
              No npm installs. No runtime dependencies. You own the code
              completely from day one.
            </p>
          </div>

          <div className="space-y-2">
            <div className="p-2 w-fit rounded-lg bg-slate-100 text-slate-900 mb-3">
              <Copy size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Copy & Paste</h3>
            <p className="text-sm leading-6 text-slate-500">
              Pick what you need, paste it into your project, and adapt it to
              match your product and brand.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Philosophy                                                          */}
        {/* ------------------------------------------------------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Ownership over Abstraction
            </h2>

            <div className="prose prose-slate text-slate-600">
              <p>
                Traditional component libraries often behave like black boxes.
                You pass props in and hope the output aligns with your design
                system.
              </p>

              <p>
                When you need to change something fundamental — layout,
                animation, or accessibility — you end up fighting the library
                instead of building your product.
              </p>

              <p>
                Alorik UI flips this model.{" "}
                <strong>We provide the source code, not an abstraction.</strong>
              </p>

              <p>
                By copying the components directly into your codebase, you
                decouple from external constraints. Styling is transparent,
                logic is understandable, and updates happen on your terms.
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Workflow                                                          */}
          {/* ---------------------------------------------------------------- */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="font-semibold text-slate-900 mb-6">How it works</h3>

            <div className="space-y-8 relative">
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
                    Choose the component you need and copy the source code
                    directly.
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
                    Paste it into your project. Install small utilities only if
                    the component requires them.
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
                    This is your code now. Adjust Tailwind classes, motion
                    values, or rewrite the logic entirely.
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
