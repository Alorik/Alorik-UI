import InstallationBlock from "@/components-ui/install/install";

export default function InstallationPage() {
  return (
    <>
      <section id="installation" className="mb-16">
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
      </section>
    </>
  );
}