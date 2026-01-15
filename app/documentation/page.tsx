import DocumentLeftSIdebar from "@/components/documentation-components/left-header";
import DocumentationContent from "@/components/documentation-components/main-content";
import Navbar from "@/components/landingpage-components/Navbar";

export default function AlorikDocs() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-gray-100 ">
      <Navbar />
      <div className="flex">
        <DocumentLeftSIdebar />

        <DocumentationContent />
      </div>
    </div>
  );
}
