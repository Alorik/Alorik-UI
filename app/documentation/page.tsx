import DocumentLeftSIdebar from "@/components/documentation-components/left-header";
import DocumentationContent from "@/components/documentation-components/main-content";

export default function AlorikDocs() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-gray-100 flex">
      {/* MOBILE HEADER */}
      <DocumentLeftSIdebar />

      <DocumentationContent />
      {/* COMPONENTS SHOWCASE */}
    </div>
  );
}
