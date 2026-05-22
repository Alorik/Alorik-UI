"use client";

import { motion } from "framer-motion";

export default function ScaleButton() {
  // scale-button
  return (
    <div className="flex items-center justify-center w-full px-4">
      <motion.button
        whileHover={{
          rotateX: 18,
          rotateY: 8,
          boxShadow: "0px 20px 50px rgba(219, 64, 136, 0.4)",
        }}
        whileTap={{ y: -8, borderWidth: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="
          group
          relative
          rounded-xl
          bg-gray-950
          border border-pink-950
          text-white
          transition-all duration-200

          hover:border-pink-700
          hover:scale-105
          active:scale-95

          px-6 py-3 text-sm
          sm:px-8 sm:py-3.5 sm:text-base
          md:px-12 md:py-4 md:text-lg
        "
        style={{ transformStyle: "preserve-3d" }}
      >
        <span
          className="
            inline-block
            transition-transform duration-500 ease-in-out
            group-hover:scale-110
          "
        >
          click me!!
        </span>
      </motion.button>
    </div>
  );
}
