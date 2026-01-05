"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

export default function StarlightTimeline() {
  const containerRef = useRef(null);

  // 1. Track scroll progress relative to this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // 2. Tighter Spring Physics
  // Increased stiffness (200) and damping (30) to make the beam track faster
  // and lag less, ensuring it visually hits the dots when they trigger.
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-4 flex justify-center">
      <div ref={containerRef} className="relative max-w-2xl w-full">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Project Roadmap
          </h1>
          <p className="text-slate-500">
            Scroll down to trace the signal path.
          </p>
        </div>

        {/* --- THE TIMELINE TRACK --- */}
        <div className="absolute left-8 md:left-10 top-24 bottom-24 w-0.5 bg-slate-800" />

        {/* --- THE GLOWING BEAM --- */}
        <motion.div
          style={{
            scaleY,
            transformOrigin: "top",
          }}
          className="absolute left-8 md:left-10 top-24 bottom-24 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 z-10 box-shadow-glow"
        >
          {/* The "Head" of the beam - a glowing dot leading the way */}
          <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        </motion.div>

        {/* Timeline Items */}
        <div className="space-y-4">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>

        {/* Extra space at bottom to allow scrolling past the end */}
        <div className="h-40" />
      </div>
    </div>
  );
}

const timelineData = [
  {
    title: "Initialization",
    description:
      "The system boots up, establishing a secure connection to the main server grid.",
  },
  {
    title: "Discovery",
    description:
      "Scanning the local environment for compatible modules and data streams.",
  },
  {
    title: "Integration",
    description:
      "Merging external datasets with internal logic cores. Synchronization complete.",
  },
  {
    title: "Deployment",
    description:
      "Finalizing protocols and launching the application to the live environment.",
  },
];

const TimelineItem = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }} // Cards appear a bit earlier
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-16 py-8 md:pl-24"
    >
      {/* Connector Dot 
          LOGIC:
          - We use a strict viewport margin to align the trigger with the visual beam tip.
          - margin: "100% 0px -50% 0px" sets the trigger line exactly at the vertical center.
          - The dot stays gray/empty until it crosses that center line.
      */}
      <motion.div
        className="absolute left-[25px] md:left-[33px] top-10 w-4 h-4 rounded-full bg-slate-950 border-2 z-10 flex items-center justify-center transition-colors"
        initial={{ borderColor: "rgba(71, 85, 105, 1)" }} // Initial: Slate-600 (Dark Gray)
        whileInView={{ borderColor: "rgba(34, 211, 238, 1)" }} // Active: Cyan-400
        viewport={{ margin: "100% 0px -50% 0px" }} // Trigger exactly at center
        transition={{ duration: 0.2 }} // Fast transition for immediate feedback
      >
        <motion.div
          className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_2px_rgba(34,211,238,0.5)]"
          initial={{ opacity: 0, scale: 0 }} // Starts completely empty
          whileInView={{ opacity: 1, scale: 1 }} // Pops in when reached
          viewport={{ margin: "100% 0px -50% 0px" }}
          transition={{ duration: 0.2, delay: 0.05 }} // Slight delay to let border color change first
        />
      </motion.div>

      {/* Content Card */}
      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 group">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-xl font-bold text-white">{data.title}</h3>
        </div>
        <p className="text-slate-400 leading-relaxed">{data.description}</p>
      </div>
    </motion.div>
  );
};
