"use client";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function InputComponent() {
  const [value, setValue] = useState("");
  const controls = useAnimation();
  const inputRef = useRef(null);

  const colors = [
    "rgba(59, 130, 246, 0.8)", // blue - more vibrant
    "rgba(139, 92, 246, 0.8)", // purple
    "rgba(236, 72, 153, 0.8)", // pink
    "rgba(245, 158, 11, 0.8)", // amber
    "rgba(16, 185, 129, 0.8)", // green
    "rgba(6, 182, 212, 0.8)", // cyan
    "rgba(249, 115, 22, 0.8)", // orange
  ];

  const handleKeyDown = (e) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Input animation with background color change
    if (e.key === " ") {
      controls.start({
        scale: 1.02,
        boxShadow: `0 0 40px ${randomColor}, 0 0 100px ${randomColor}`,
        transition: { duration: 0.5 },
      });
    } else if (e.key.length === 1) {
      controls.start({
        scale: [1, 1.1, 1],
        boxShadow: `0 0 80px ${randomColor}`,
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />

      {/* Interactive typing blobs - CLOSER TO INPUT */}

      {/* Input field */}
      <div className="relative z-10">
        <motion.input
          ref={inputRef}
          type="text"
          placeholder="Type something magical..."
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.08 }}
          value={value}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onKeyDown={handleKeyDown}
          onChange={(e) => setValue(e.target.value)}
          animate={controls}
          className="border-2 border-gray-600 bg-black/40 backdrop-blur-md text-white px-6 py-3 rounded-lg outline-none text-lg placeholder-gray-400 min-w-[300px] shadow-2xl"
        />
      </div>
    </div>
  );
}
