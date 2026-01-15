import ComponentShowcase from "./component-showcase";
import IntroductionPage from "./inroduction";
import InstallationPage from "./installation";

export default function DocumentationContent() {
  return (
    <div className="p-8">
      <IntroductionPage />
      <InstallationPage />
      <ComponentShowcase />
    </div>
  );
}
