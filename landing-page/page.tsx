import FloatingNav from "@/components-ui/Navigation/FloatingNav";
import AlorikHero from "@/components/about";
import AlorikLogo from "@/components/logo";
import ShowcaseComponents from "@/components/showcase-components";

export default function LandingPage() {
  return (
    <>
      <div className="container mt-5 ml-2 ">
        <AlorikLogo />
      </div>
      {/* <FloatingNav /> */}
      <AlorikHero />
      <ShowcaseComponents />
    </>
  );
}
