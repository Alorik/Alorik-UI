import FloatingNav from "@/components-ui/Navigation/FloatingNav";
import AlorikHero from "@/components/landingpage-components/about";
import AlorikLogo from "@/components/landingpage-components/logo";
import ShowcaseComponents from "@/components/landingpage-components/showcase-components";

export default function LandingPage() {
  return (
    <>
      <div className="container mt-5 ml-2 ">
        <AlorikLogo />
      </div>
      <FloatingNav />
      <AlorikHero />
      <ShowcaseComponents />
    </>
  );
}
