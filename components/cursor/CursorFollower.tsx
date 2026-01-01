"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);

  // Mouse Position Motion Values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Spring for the "Ring" (The trailing part)
  const springConfig = { damping: 25, stiffness: 700 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering a clickable element
      const target = e.target;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive");

      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-white cursor-none flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* --- CUSTOM CURSOR --- 
          pointer-events-none is crucial so it doesn't block clicks
      */}

      {/* 1. The Small Dot (Instant Track) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. The Fluid Ring (Smooth Track) */}
      <motion.div
        className="fixed top-0 left-0 border border-black rounded-full pointer-events-none z-[999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          height: isHovering ? 64 : 32,
          width: isHovering ? 64 : 32,
          backgroundColor: isHovering ? "white" : "transparent",
          borderWidth: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />

      {/* --- DEMO CONTENT --- */}
      <div className="z-10 flex flex-col items-center gap-8">
        <button className="interactive px-8 py-4 bg-black text-white rounded-full font-medium flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
          Hover Me <ArrowRight size={18} />
        </button>

        <button className="interactive px-8 py-4 border border-black/20 rounded-full font-medium text-black transition-colors hover:bg-gray-100">
          Secondary Action
        </button>
      </div>
    </div>
  );
}
