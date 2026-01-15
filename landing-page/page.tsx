import AlorikHero from "@/components/landingpage-components/about";
import Footer from "@/components/landingpage-components/footer";

import Navbar from "@/components/landingpage-components/Navbar";
import ShowcaseComponents from "@/components/landingpage-components/showcase-components";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <AlorikHero />
      <ShowcaseComponents />
      <Footer />
    </>
  );
}
