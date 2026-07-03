"use client";

import React, { useState } from "react";

export default function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center overflow-hidden group"
    >
      {/* Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(34, 211, 238, 0.15),
            transparent 80%
          )`,
        }}
      />

      {/* Inner Core */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            200px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(56, 189, 248, 0.3),
            transparent 80%
          )`,
        }}
      />
    </div>
  );
}
