"use client";
import { motion } from "framer-motion";


export default function ScaleButton() {
  return (
    <div className="flex items-center justify-center w-full">
      <motion.button
        whileHover={{
          rotateX: 22,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(219, 64, 136, 0.4)",
        }}
        whileTap={{ y: -10, borderWidth: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="group border py-4 px-12 rounded-xl text-lg bg-gray-950 border-pink-950 hover:scale-104 transition duration-200 hover:border-2 hover:border-pink-700"
      >
        <span className="inline-block transition-transform duration-500 ease-in-out group-hover:scale-120 text-white">
          click me!!
        </span>
      </motion.button>
    </div>
  );
}
