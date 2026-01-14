import InstallationBlock from "@/components-ui/install/install";
import ComponentShowcase from "./component-showcase";

export default function DocumentationContent() {
  return (
    <div className="p-8">
      {/* Getting Started */}
      <div id="introduction" className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Introduction
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
          Alorik is a collection of re-usable components built with Motion and
          Tailwind CSS. It&apos;s not a component library. It&apos;s a
          collection of copy and paste components that you can copy into your
          apps.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
            Browse Components
          </button>
          <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">
            Read the Philosophy
          </button>
        </div>
      </div>

      <div id="installation" className="mb-16">
        <h2 className="text-5xl font-bold mb-8">Installation</h2>
        <div>
          <p className="font-semibold text-3xl">Install Nextjs</p>
          <InstallationBlock
            defaultTab="npm"
            commands={{
              npm: "npx create-next-app@latest",
            }}
          />

          <p className="font-semibold mb-1 text-lg"> On Installation:</p>
          <div className="bg-gray-200 flex-col gap-2 p-4 rounded-xl">
            <div>
              {" "}
              <span className="text-blue-600">What</span> is your project named?
              my-app
            </div>
            <div>
              <span className="text-blue-600">Would</span> you like to use
              TypeScript? No / Yes
            </div>
            <div>
              <span className="text-blue-600">Would</span> you like to use
              ESLint? No / Yes
            </div>
            <div>
              <span className="text-blue-600">Would</span> you like to use
              Tailwind CSS? No / Yes
            </div>
            <div>
              <span className="text-blue-600">Would</span> you like to use
              `src/` directory? No / Yes
            </div>
            <div>
              <span className="text-blue-600">Would</span> you like to use App
              Router? (recommended) No / Yes
            </div>
            <div>
              <span className="text-blue-600">Would</span>
              you like to customize the default import alias (@/*)? No / Yes
            </div>
            <div>
              <span className="text-blue-600">What</span> import alias would you
              like configured? @/<span className="text-red-500">*</span>
            </div>
          </div>
          <p className="font-semibold mb-1 text-lg mt-2">Start the app</p>
          <div className="bg-gray-200 flex-col gap-2 p-4 rounded-xl mb-4">
            <div>
              {" "}
              <span className="text-blue-600">What</span> is your project named?
              my-app
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1 text-lg mt-2">
              {" "}
              Start your build process
            </p>
            <div className="bg-gray-200 flex-col gap-2 p-4 rounded-xl">
              npm run dev
            </div>
          </div>
        </div>
      </div>

      <ComponentShowcase />
      {/* Components */}
      <div id="beam-button" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Beam Button</h2>
        <p>Your beam button content...</p>
      </div>

      <div id="system-button" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">System Button</h2>
        <p>Your system button content...</p>
      </div>

      {/* Layouts */}
    </div>
  );
}
