"use client";

import { motion } from "framer-motion";

export default function TextAnimation() {
  const sentence = "Motion is magic";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className="dark:text-white text-xl font-bold"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {sentence.split("").map((letter, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
