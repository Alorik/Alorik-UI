import FloatingNav from "@/components-ui/Navigation/FloatingNav";
import AlorikHero from "@/components/about";
import AlorikLogo from "@/components/logo";

export default function LandingPage() {
  return (
    <>
      <div className="mt-5 z-100 ">
        <AlorikLogo />
      </div>
      <FloatingNav />
      <AlorikHero />
    </>
  );
}
