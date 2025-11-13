"use client";
import { motion } from "motion/react";
import React from "react";


export default function Button1() {
  return (
    <div
      className="[perspective:1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(6,90,212, 0.2) 1px, transparent 0 )`,
        backgroundSize: "18px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        whileHover={{
          rotateX: 22,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(219, 64, 136, 0.4)",
        }}
        whileTap={{
          y: -10,
          borderWidth: 2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className=" group border py-4 px-12 rounded-xl text-xl bg-gray-950 border-pink-950 hover:scale-104 transition duration:200 hover:border-2 hover:border-pink-700"
      >
        <span className="inline-block transition-transform duration-500 ease-in-out group-hover:scale-120">
          click me!!
        </span>
      </motion.button>
    </div>
  );
}
