"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Motion First",
    description: "Built-in spring physics that feel natural and responsive.",
    colSpan: "col-span-1 md:col-span-2",
    bgGradient: "from-indigo-50 to-purple-50",
    accentColor: "indigo",
    pattern: (
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
    ),
    decoration: (
      <motion.div 
        className="absolute right-8 bottom-8 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-200/40 to-purple-200/40 blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    ),
  },
  {
    title: "Type Safe",
    description: "Full TypeScript support with inferred props.",
    colSpan: "col-span-1",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "blue",
    pattern: (
      <div className="absolute right-4 top-4 font-mono text-[10px] text-blue-300 opacity-50 leading-relaxed">
        interface Props {`{`}<br/>
        &nbsp;&nbsp;variant: string<br/>
        &nbsp;&nbsp;size: number<br/>
        {`}`}
      </div>
    ),
    decoration: null,
  },
  {
    title: "Tailwind CSS",
    description: "Styled with utility classes. Zero runtime overhead.",
    colSpan: "col-span-1",
    bgGradient: "from-slate-50 to-slate-100",
    accentColor: "slate",
    pattern: (
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <div className="text-8xl font-black">CSS</div>
      </div>
    ),
    decoration: (
      <div className="absolute right-6 bottom-6">
        <div className="flex gap-1">
          {[20, 35, 25, 40].map((h, i) => (
            <div key={i} className="w-1.5 bg-slate-300 rounded-full" style={{ height: `${h}px` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Accessible",
    description: "WAI-ARIA compliant patterns for everyone.",
    colSpan: "col-span-1 md:col-span-2",
    bgGradient: "from-emerald-50 to-teal-50",
    accentColor: "emerald",
    pattern: (
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
    ),
    decoration: (
      <div className="absolute right-8 top-8 flex gap-2 opacity-40">
        <div className="w-16 h-1 bg-emerald-400 rounded-full" />
        <div className="w-12 h-1 bg-emerald-300 rounded-full" />
        <div className="w-8 h-1 bg-emerald-200 rounded-full" />
      </div>
    ),
  },
];

export default function AlorikFeatures() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-600 tracking-tight mb-6 leading-tight">
            Everything you need to build
            <br />
            world-class interfaces.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Thoughtfully designed components that handle the hard parts of UI
            engineering, so you can focus on the product.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`
                group relative overflow-hidden rounded-3xl border border-slate-200 
                bg-gradient-to-br ${feature.bgGradient}
                hover:shadow-2xl hover:shadow-slate-200/50 hover:border-slate-300 
                hover:-translate-y-1
                transition-all duration-500
                ${feature.colSpan}
              `}
            >
              {/* Background Pattern */}
              {feature.pattern}
              
              {/* Decoration */}
              {feature.decoration}

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="mt-auto pt-6">
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r from-${feature.accentColor}-400 to-${feature.accentColor}-300 opacity-60 group-hover:w-20 group-hover:opacity-100 transition-all duration-500`} />
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}