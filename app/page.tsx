import BeamButton from "@/components/Button/BeamButton";
import Button1 from "@/components/Button/Button1";
import Button2 from "@/components/Button/Button2";
import ExpandableCard from "@/components/Card/ExpandableCards";
import GracefulHoverCard from "@/components/Card/GracefulCard";
import HoveredCard from "@/components/Card/HoveredCard";
import StackCard from "@/components/Card/StackedCard";
import CursorFollower from "@/components/cursor/CursorFollower";
import AnimatedList from "@/components/DataDisplay/AnimatedList";
import Timeline2 from "@/components/DataDisplay/Timeline2";
import GridBackground from "@/components/Hero/GridBackground";

import ParticlesHero from "@/components/Hero/ParticlesHero";
import InputComponent from "@/components/Input1";
import BreadCrumb from "@/components/Navigation/BreadCrumb";
import FloatingNav from "@/components/Navigation/FloatingNav";
import SlideButton from "@/components/SlideUpButton";


export default function Home() {
  return (
    <div>
      <InputComponent />
     <Button1 />
      <Button2 />
      <BeamButton />
      <SlideButton />
      <GracefulHoverCard />
      <StackCard />
      <ExpandableCard />
      <HoveredCard />
      <BreadCrumb />
      <Timeline2 />
      <ParticlesHero />
      <GridBackground />
      <AnimatedList />
      <FloatingNav />
      <CursorFollower />
      {/* <HoverReveal /> */}
    </div>
  );
}
