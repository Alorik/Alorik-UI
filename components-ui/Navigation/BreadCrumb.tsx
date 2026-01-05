"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "products", label: "Products" },
  { id: "electronics", label: "Electronics" },
  { id: "laptops", label: "Laptops" },
  { id: "macbook", label: "MacBook Pro M3" },
];


export default function BreadCrumb() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <nav aria-label="BreadCrumb">
        <ol className="flex items-center gap-2 px-6 py-4 rounded-xl  bg-slate-900/50 border border-slate-800">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            const isDimmed = hoveredIndex !== null && index > hoveredIndex;
            return (
              <React.Fragment key={index}>
                {index > 0 && (
                  <motion.li
                    className="text-slate-600 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isDimmed ? 0.2 : 1,
                      x: 0,
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ChevronRight size={14} strokeWidth={3} />
                  </motion.li>
                )}
                {/* items */}
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isDimmed ? 0.3 : 1,
                    filter: isDimmed ? "blur(1px)" : "blur(0px)",
                    x: 0,
                  }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex items-center cursor-pointer"
                >
                  <div
                    className={`
                    flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200
                    ${
                      isLast
                        ? "bg-slate-800 text-slate-100 font-medium"
                        : "text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50"
                    }
                    `}
                  >
                    {item.icon && <item.icon size={14} />}
                    <span className="text-sm">{item.label}</span>
                  </div>

                  {/* Active Indicator Dot (Only appears on hover) */}
                  {!isLast && hoveredIndex === index && (
                    <motion.div
                      layoutId="active-breadcrumb"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}