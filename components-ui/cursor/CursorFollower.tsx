"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CursorFollower() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isInside, setIsInside] = useState(false);

  // Mouse position (raw)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing ring
  const springConfig = { damping: 25, stiffness: 700 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setIsInside(inside);

      if (!inside) return;

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive");

      setIsHovering(Boolean(isClickable));
    };

    const handleMouseLeave = () => {
      setIsInside(false);
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative bg-white cursor-none flex flex-col items-center justify-center p-12  overflow-hidden"
    >
      {/* Render cursor ONLY when inside container */}
      {isInside && (
        <>
          {/* Small dot */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />

          {/* Trailing ring */}
          <motion.div
            className="fixed top-0 left-0 border border-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
              x: ringX,
              y: ringY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              width: isHovering ? 64 : 32,
              height: isHovering ? 64 : 32,
              backgroundColor: isHovering ? "white" : "transparent",
              borderWidth: isHovering ? 0 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          />
        </>
      )}

      {/* Demo Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
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
