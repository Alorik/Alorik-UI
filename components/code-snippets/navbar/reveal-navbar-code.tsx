import CodeShowCase from "@/components-ui/code-showcase";

const code = String.raw`"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface Project {
  title: string;
  category: string;
  color: TailwindColor;
  description: string;
}

type TailwindColor =
  | "bg-indigo-500"
  | "bg-emerald-500"
  | "bg-orange-500"
  | "bg-rose-500";

interface ProjectItemProps {
  project: Project;
  index: number;
  setHoveredProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const projects: Project[] = [
  {
    title: "Orion Space",
    category: "Branding",
    color: "bg-indigo-500",
    description: "Identity system for a Mars exploration initiative.",
  },
  {
    title: "Cyber Flow",
    category: "Development",
    color: "bg-emerald-500",
    description: "WebGL fluid simulations for financial data.",
  },
  {
    title: "Apex Tower",
    category: "Architecture",
    color: "bg-orange-500",
    description: "Sustainable skyscraper design in Neo-Tokyo.",
  },
  {
    title: "Zenith Labs",
    category: "Product",
    color: "bg-rose-500",
    description: "Next-gen haptic feedback wearables.",
  },
];

/* -------------------------------------------------------------------------- */
/*                               Project Item                                 */
/* -------------------------------------------------------------------------- */

const ProjectItem = ({
  project,
  index,
  setHoveredProject,
}: ProjectItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHoveredProject(project)}
      className="group flex items-center justify-between border-b border-slate-800 py-10 px-4 cursor-pointer transition-colors hover:bg-slate-900/50"
    >
      <div className="flex flex-col">
        <span className="text-xs font-mono text-slate-500 mb-2 group-hover:text-cyan-400 transition-colors">
          0{index + 1} / {project.category}
        </span>
        <h3 className="text-4xl md:text-5xl font-light text-slate-300 group-hover:text-white transition-all group-hover:translate-x-4 duration-300">
          {project.title}
        </h3>
      </div>

      <div className="opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-400">
        <ArrowUpRight size={32} />
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Main Component                                */
/* -------------------------------------------------------------------------- */

export default function HoverReveal() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    x.set(e.clientX - rect.left - 128); // center X
    y.set(e.clientY - rect.top - 100); // center Y
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-slate-950 flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="w-full max-w-3xl relative z-10">
        <div className="mb-12 border-b border-slate-800 pb-4">
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest">
            Selected Works
          </h2>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              index={index}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>
      </div>

      {/* Floating Reveal Card */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-48 w-64 rounded-xl overflow-hidden shadow-2xl z-0 border border-white/10"
        style={{ x: springX, y: springY }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: hoveredProject ? 1 : 0,
          opacity: hoveredProject ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
          animate={{
            backgroundColor: hoveredProject
              ? getTailwindHex(hoveredProject.color)
              : "#1e293b",
          }}
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

          {hoveredProject && (
            <motion.div
              key={hoveredProject.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10"
            >
              <h4 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                {hoveredProject.title}
              </h4>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                {hoveredProject.description}
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Color Helper                                 */
/* -------------------------------------------------------------------------- */

function getTailwindHex(color: TailwindColor): string {
  const map: Record<TailwindColor, string> = {
    "bg-indigo-500": "#6366f1",
    "bg-emerald-500": "#10b981",
    "bg-orange-500": "#f97316",
    "bg-rose-500": "#f43f5e",
  };

  return map[color];
}
`;


export default function NavRevealCode() {
  return <>
  <CodeShowCase title="Navbar Reveal" code={code} />
  </>
}