import BeamButton from "@/components/BeamButton";
import Button1 from "@/components/Button1";
import Button2 from "@/components/Button2";
import SlideButton from "@/components/SlideUpButton";
import Input from "@/components/Input1";
import GracefulHoverCard from "@/components/GracefulCard";
import StackCard from "@/components/StackedCard";
import HoverReveal from "@/components/NavRecveal";

export default function Home() {
  return (
    <div>
      <Input />
      <Button1 />
      <Button2 />
      <BeamButton />
      <SlideButton />
      <GracefulHoverCard />
      <StackCard />
      {/* <HoverReveal /> */}
    </div>
  );
}
