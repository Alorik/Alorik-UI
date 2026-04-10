"use client";
import { motion } from "framer-motion";
const BorderBeam = () => {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none rounded-[2.5rem] overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          rx="38" 
          ry="38"
          fill="none"
          stroke="transparent"
          strokeWidth="1"
        />
        <motion.rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          rx="38"
          ry="38"
          fill="none"
          stroke="url(#beam-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0.2, pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A8A0A0" stopOpacity="0" />
            <stop offset="50%" stopColor="#EDAFC3" stopOpacity="1" />
            <stop offset="100%" stopColor="#EDAFC3" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const features = [
  {
    title: "Motion First",
    description: "Built-in spring physics that feel natural and responsive.",
    colSpan: "col-span-1 md:col-span-2",
    hasBorderBeam: true, // Trigger for the infinite border
    bgGradient: "from-indigo-50/50 to-white",
    borderColor: "group-hover:border-pink-800",
    bgContent: (
      <div className="absolute right-8 bottom-8 flex gap-3">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-12 h-12 rounded-full bg-linear-to-b from-emerald-100 to-gray-200 border border-gray-200 shadow-sm"
          />
        ))}
      </div>
    ),
  },
  {
    title: "Type Safe",
    description: "Full TypeScript support with inferred props.",
    colSpan: "col-span-1",
    bgGradient: "from-blue-50/50 to-cyan-50/50",
    bgContent: (
      <>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] font-mono text-9xl font-bold tracking-tighter select-none pointer-events-none">
          TS
        </div>
        <div className="absolute right-4 top-4 font-mono text-[10px] text-blue-400 opacity-40 leading-relaxed">
          interface Props {`{`}
          <br />
          &nbsp;&nbsp;variant: string
          <br />
          &nbsp;&nbsp;size: number
          <br />
          {`}`}
        </div>
      </>
    ),
  },
  {
    title: "Tailwind CSS",
    description: "Styled with utility classes. Zero runtime overhead.",
    colSpan: "col-span-1",
    bgGradient: "from-slate-50/50 to-slate-100/50",
    bgContent: (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <div className="text-8xl font-black">CSS</div>
        </div>
      </>
    ),
  },
  {
    title: "Built for Everyone",
    description: "Inclusive components that work seamlessly for all users.",
    colSpan: "col-span-1 md:col-span-2",
    bgGradient: "from-emerald-50/50 to-teal-50/50",
    bgContent: (
      <>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-size-[20px_20px]" />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-3 opacity-30 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-70">
          <div className="h-10 px-4 rounded-lg bg-emerald-200/50 border border-emerald-200 flex items-center text-xs font-mono text-emerald-700 shadow-sm">
            Tab
          </div>
          <div className="h-10 px-4 rounded-lg bg-emerald-200/50 border border-emerald-200 flex items-center text-xs font-mono text-emerald-700 shadow-sm">
            Enter
          </div>
        </div>
      </>
    ),
  },
];

export default function AlorikFeatures() {
  return (
    <section className="py-32 px-6 bg-white border-t border-slate-100 font-sans relative overflow-hidden">
      {/* Subtle Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-xs font-medium mb-6 uppercase tracking-widest"
          >
            Philosophy
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-slate-900 via-slate-700 to-slate-500 mb-8 leading-[0.9]">
            Everything you need. <br />
            <span className="text-slate-400 font-medium">
              Nothing you don&apos;t.
            </span>
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
            A carefully curated set of components that handle the hard parts of
            UI engineering, so you can focus on shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[340px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }} // Scale & Pop effect
              transition={{
                duration: 0.4,
                ease: [0.25, 1, 0.5, 1], // Smooth spring-like ease
              }}
              className={`
                group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white
                hover:shadow-2xl hover:shadow-slate-200/50 
                ${feature.colSpan} ${feature.borderColor}
              `}
            >
              {/* Traveling Border Beam (Only for designated card) */}
              {feature.hasBorderBeam && <BorderBeam />}

              {/* 1. Ghost Gradient Layer */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out`}
              />

              {/* 2. Background Content (Scales on Hover) */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105 origin-bottom-right">
                {feature.bgContent}
              </div>

              {/* 3. Text Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-10 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm font-mono group-hover:bg-white/80 group-hover:border-slate-200 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  0{i + 1}
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-sm text-lg group-hover:text-slate-600 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
