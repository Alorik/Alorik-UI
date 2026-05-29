"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useRef } from "react";
import type { KeyboardEvent, ChangeEvent } from "react";

export default function InputComponent() {
  const [value, setValue] = useState<string>("");
  const [glowColor, setGlowColor] = useState<string>("rgba(59, 130, 246, 0.8)");

  const controls = useAnimation();
  const glowControls = useAnimation();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const colors: string[] = [
    "rgba(59, 130, 246, 0.8)", // blue
    "rgba(139, 92, 246, 0.8)", // purple
    "rgba(236, 72, 153, 0.8)", // pink
    "rgba(245, 158, 11, 0.8)", // amber
    "rgba(16, 185, 129, 0.8)", // green
    "rgba(6, 182, 212, 0.8)", // cyan
    "rgba(249, 115, 22, 0.8)", // orange
  ];

  /* -------------------------------------------------------------------------- */
  /*                               Event Handlers                               */
  /* -------------------------------------------------------------------------- */

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setGlowColor(randomColor);

    if (e.key === " ") {
      controls.start({
        scale: 1.02,
        transition: { duration: 0.5 },
      });

      glowControls.start({
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.3, 1],
        transition: { duration: 0.5 },
      });
    } else if (e.key.length === 1) {
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.4, ease: "easeInOut" },
      });

      glowControls.start({
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.2, 1],
        transition: { duration: 0.4 },
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  /* -------------------------------------------------------------------------- */
  /*                                   Render                                   */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="relative flex items-center justify-center overflow-visible px-10 py-8">
      {/* Glow Background */}
      <motion.div
        animate={glowControls}
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
          opacity: 0.5,
        }}
      />

      {/* Input */}
      <div className="relative z-10">
        <motion.input
          ref={inputRef}
          type="text"
          placeholder="Type something magical..."
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          animate={controls}
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="min-w-75 rounded-lg border-2 border-gray-600 bg-black px-6 py-3 text-lg text-white shadow-2xl outline-none placeholder-gray-400 backdrop-blur-md"
        />
      </div>
    </div>
  );
}
