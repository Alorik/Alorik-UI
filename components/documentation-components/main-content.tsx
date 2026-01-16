"use client";

import Navbar from "../landingpage-components/Navbar";
import { DocsProvider, useDocs } from "./docs-context"; // Make sure useDocs is exported from here
import DocumentLeftSidebar from "./left-header";
import IntroductionPage from "./inroduction"; // Import your pages
import InstallationPage from "./installation";
import BeamButtonShowcase from "../showcase/button/beambutton-showcase";
import SystemButtonShowcase from "../showcase/button/systemButtonShowcase";
import StarLightButtonShowcase from "../showcase/button/starlightbutton-showcase";
import ClipPathCardShowcase from "../showcase/card/clipPathCard-showcase";
import GracefulCardShowcase from "../showcase/card/gracefulCard-showcase";
import HoveredCardShowcase from "../showcase/card/hoveredCard-showcase";

export default function DocumentationContent() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-gray-100">

      <DocsProvider>
        <Navbar />

        <div className="flex max-w-screen-2xl mx-auto">

          <DocumentLeftSidebar />

          <main className="flex-1 min-w-0 pt-20 lg:pt-8 px-8 lg:px-12">
            <ActivePageRenderer />
          </main>
        </div>
      </DocsProvider>
    </div>
  );
}

function ActivePageRenderer() {
  const { activeItem } = useDocs();

  switch (activeItem) {
    case "Introduction":
      return <IntroductionPage />;
    case "Installation":
      return <InstallationPage />;
    case "Beam Button":
      return <BeamButtonShowcase />;
    case "System Button":
      return <SystemButtonShowcase />;
    case "StarLight Button":
      return <StarLightButtonShowcase />;
    case "ClipPath Card":
      return <ClipPathCardShowcase />;
    case "Graceful Card":
      return <GracefulCardShowcase />;
    case "Hovered Card":
      return <HoveredCardShowcase />;

    default:
      return (
        <div className="py-20">
          <h1 className="text-3xl font-bold mb-4">{activeItem}</h1>
          <p className="text-slate-500">
            This documentation page is under construction.
          </p>
        </div>
      );
  }
}
