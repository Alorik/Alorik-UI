"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Star, Calendar, Flag, Zap, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type TimelineColor =
  | "bg-blue-500"
  | "bg-amber-500"
  | "bg-purple-500"
  | "bg-emerald-500"
  | "bg-rose-500"
  | "bg-cyan-500"
  | "bg-indigo-500";

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: TimelineColor;
}

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
}

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2018",
    title: "Foundation",
    description: "The initial concept was prototyped in a small garage studio.",
    icon: Flag,
    color: "bg-blue-500",
  },
  {
    id: 2,
    year: "2019",
    title: "Seed Round",
    description: "Raised $2M seed funding to build the core engineering team.",
    icon: Zap,
    color: "bg-amber-500",
  },
  {
    id: 3,
    year: "2020",
    title: "Alpha Launch",
    description: "Released the first private beta to 500 select users.",
    icon: Star,
    color: "bg-purple-500",
  },
  {
    id: 4,
    year: "2021",
    title: "Series A",
    description: "Secured $15M to scale operations and marketing globally.",
    icon: Trophy,
    color: "bg-emerald-500",
  },
  {
    id: 5,
    year: "2022",
    title: "1M Users",
    description:
      "Hit the one million active user milestone faster than projected.",
    icon: Calendar,
    color: "bg-rose-500",
  },
  {
    id: 6,
    year: "2023",
    title: "Ecosystem",
    description: "Launched the developer API and plugin marketplace.",
    icon: Zap,
    color: "bg-cyan-500",
  },
  {
    id: 7,
    year: "2024",
    title: "Global Summit",
    description:
      "Hosted the first annual developer conference in San Francisco.",
    icon: Flag,
    color: "bg-indigo-500",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Timeline                                   */
/* -------------------------------------------------------------------------- */

export default function Timeline2() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 30,
    damping: 120,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center p-8">
      <div className="max-w-4xl mx-auto w-full mb-12">
        <h2 className="text-3xl font-bold text-white">Our Journey</h2>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-slate-800 rounded-full overflow-hidden z-10">
          <motion.div
            style={{ scaleX, transformOrigin: "left" }}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
          />
        </div>

        {/* Timeline Scroll */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto pt-12 pb-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="w-4 flex-shrink-0" />

          {timelineEvents.map((event, index) => (
            <TimelineCard key={event.id} event={event} index={index} />
          ))}

          <div className="w-4 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Timeline Card                                */
/* -------------------------------------------------------------------------- */

const TimelineCard = ({ event, index }: TimelineCardProps) => {
  const Icon = event.icon;

  return (
    <motion.div
      className="relative flex-shrink-0 w-80 snap-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Connector */}
      <div className="absolute left-8 -top-12 h-12 w-0.5 bg-slate-800 group-hover:bg-slate-700 transition-colors">
        <div className="absolute -top-1.5 -left-[5px] w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950 group-hover:bg-cyan-500 transition-colors" />
      </div>

      {/* Card */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none">
            {event.year}
          </span>

          <div className={`${event.color} bg-opacity-10 p-3 rounded-xl`}>
            <Icon
              size={20}
              className={event.color
                .replace("bg-", "text-")
                .replace("-500", "-400")}
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-300 tracking-tight group-hover:text-white transition-colors">
          {event.title}
        </h3>

        <p className="mt-4 text-slate-400 leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};
