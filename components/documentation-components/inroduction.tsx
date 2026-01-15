export default function IntroductionPage() {
  return (
    <>
      <section id="introduction" className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Introduction
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          <strong>Design systems, without the rigidity.</strong>
          <br />
          Alorik UI helps developers build expressive, modern interfaces with
          motion-first components, thoughtful defaults, and complete
          customization freedom.
        </p>

        <p className="text-slate-600 max-w-3xl">
          Alorik UI is a curated collection of beautifully crafted,
          copy-paste-ready components designed for real-world applications.
          Every component is flexible, accessible, and built to scale with your
          product — not fight it.
        </p>

        <p className="text-slate-600 max-w-3xl">
          This is <strong>not</strong> a traditional component library. Instead,
          Alorik UI is a <strong>component toolkit</strong> that lets you own
          your UI completely, without external constraints or runtime
          dependencies.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 pt-6">
          What does “not a component library” mean?
        </h2>

        <p className="text-slate-600 max-w-3xl">
          Alorik UI is not shipped as an installable npm package. You don’t add
          it as a dependency or lock yourself into version upgrades. Instead,
          you select the components you need and copy them directly into your
          codebase.
        </p>

        <p className="text-slate-600 max-w-3xl">
          This approach gives you full control over styling and behavior,
          removes dependency bloat, and allows components to evolve naturally
          with your application.
        </p>

        <p className="text-slate-600 max-w-3xl">
          Use Alorik UI as a foundation to build your own tailored component
          systems, designed specifically for your product.
        </p>
      </section>
    </>
  );
}