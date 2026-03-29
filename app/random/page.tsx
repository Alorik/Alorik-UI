import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactNode } from "react";
import AlorikFeatures from "./midlow";

interface IconWithTooltipProps {
  icon: ReactNode;
  name: string;
}

export default function Mid() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-25">
        <div className="my-5">
          <div className="bg-linear-to-r from-emerald-300 via-black to-emerald-300 bg-clip-text mb-5">
            <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] text-center lg:max-w-2xl text-transparent">
              Craft Interfaces That Feel Alive and Responsive
            </h1>
          </div>
          <div className="bg-linear-to-r from-gray-500 via-black to-gray-500 from-5% via-30% to-55% bg-clip-text">
            <p className="font-medium text-xl sm:text-xl md:text-xl lg:text-xl leading-[1.05] tracking-[-0.03em] text-center lg:max-w-2xl text-transparent">
              A modern UI library crafted for developers who care about
              performance, aesthetics, and motion — all in perfect balance.
            </p>
          </div>
        </div>
        <div className="flex gap-4 ">
          <IconWithTooltip name="React" icon={<FaReact size={40} />} />

          <IconWithTooltip name="Next.js" icon={<RiNextjsFill size={40} />} />

          <IconWithTooltip
            name="Framer Motion"
            icon={<TbBrandFramerMotion size={40} />}
          />

          <IconWithTooltip
            name="TypeScript"
            icon={<BiLogoTypescript size={40} />}
          />

          <IconWithTooltip
            name="Tailwind CSS"
            icon={<RiTailwindCssFill size={40} />}
          />
        </div>
      </div>
      <AlorikFeatures />
    </div>
  );
}

const IconWithTooltip = ({ icon, name }: IconWithTooltipProps) => {
  return (
    <div className="group relative flex flex-col items-center justify-center cursor-pointer">
      {/* The Icon (Scale & Color on hover) */}
      <div className="text-slate-500 transition-all duration-300 group-hover:text-black group-hover:scale-110">
        {icon}
      </div>

      {/* The Tooltip (Pop-up Animation) */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 scale-75 translate-y-4 transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
        <div className="relative px-3 py-1.5 bg-slate-900 border border-white/10 text-slate-200 text-xs font-semibold tracking-wide rounded-lg shadow-xl whitespace-nowrap">
          {name}
          {/* Little arrow pointing down */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-b border-r border-white/10 rotate-45" />
        </div>
      </div>
    </div>
  );
};
