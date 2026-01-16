import CodeShowCase from "@/components-ui/code-showcase";

const code = String.raw`"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface CardItem {
  id: number;
  title: string;
  category: string;
  color: string;
  description: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const items: CardItem[] = [
  {
    id: 1,
    title: "Wilderness",
    category: "Photography",
    color: "bg-slate-700",
    description: "Capturing the raw essence of nature.",
  },
  {
    id: 2,
    title: "Urban",
    category: "Architecture",
    color: "bg-slate-600",
    description: "The geometry of modern living.",
  },
  {
    id: 3,
    title: "Oceanic",
    category: "Expedition",
    color: "bg-indigo-800",
    description: "Depths of the silent blue world.",
  },
  {
    id: 4,
    title: "Alpine",
    category: "Travel",
    color: "bg-zinc-700",
    description: "Peaks that touch the stratosphere.",
  },
];

/* -------------------------------------------------------------------------- */
/*                             Expandable Cards                                */
/* -------------------------------------------------------------------------- */

const ExpandableCards = () => {
  const [hoveredId, setHoverId] = useState<number | null>(null);

  // Fallback to first card when nothing is hovered
  const activeId = hoveredId ?? items[0].id;

  return (
    <div className="flex h-96 w-full max-w-4xl gap-2 p-8">
      {items.map((item) => (
        <motion.div
          key={item.id}
          onMouseEnter={() => setHoverId(item.id)}
          onMouseLeave={() => setHoverId(null)}
          layout
          className={\`relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800 \${
            item.color
          } \${activeId === item.id ? "flex-[3]" : "flex-[1]"}\`}
          transition={{
            layout: {
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15,
            },
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {activeId === item.id ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                    {item.category}
                  </span>
                  <ArrowUpRight className="text-slate-300" size={18} />
                </div>

                <h3 className="text-2xl font-light text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
                  {item.description}
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <h3 className="rotate-[-90deg] whitespace-nowrap text-xl font-light text-slate-500 tracking-widest">
                  {item.title}
                </h3>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function ExpandableCard() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <ExpandableCards />
    </div>
  );
}
`;

export default function ExpandableCardCode() {
  return (
    <>
      <CodeShowCase language=".tsx" title="Expandable Card" code={code} />
    </>
  );
}
