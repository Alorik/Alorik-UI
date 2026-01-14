import ComponentShowcase from "./component-showcase";
import InstallationContent from "./installation-conenten";

export default function DocumentationContent() {
  return (
    <div className="p-8">
      <InstallationContent />
      {/* Components */}
      <ComponentShowcase />

      {/* Layouts */}
    </div>
  );
}
