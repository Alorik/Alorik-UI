"use client"

import { motion } from "framer-motion";
import { Flag, Star, Rocket, Trophy, Globe, Zap } from "lucide-react";

const events = [
  {
    year: "2020",
    title: "The Inception",
    description: "Founded in a garage with a vision to democratize AI for everyone. The core engine v1.0 was released.",
    icon: Flag,
    color: "bg-blue-500",
  },
  {
    year: "2021",
    title: "Series A Funding",
    description: "Secured $10M to expand the engineering team and scale infrastructure globally.",
    icon: Rocket,
    color: "bg-purple-500",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Opened offices in Tokyo, London, and Berlin. User base grew by 400% year-over-year.",
    icon: Globe,
    color: "bg-cyan-500",
  },
  {
    year: "2023",
    title: "Product Breakthrough",
    description: "Launched the 'Neural Sync' feature, revolutionizing real-time data processing speeds.",
    icon: Zap,
    color: "bg-amber-500",
  },
  {
    year: "2024",
    title: "Market Leader",
    description: "Recognized as the top innovator in the sector. Integration with major enterprise partners complete.",
    icon: Trophy,
    color: "bg-emerald-500",
  },
  {
    year: "2025",
    title: "The Next Frontier",
    description: "R&D begins on quantum-resistant encryption modules for the next generation of web security.",
    icon: Star,
    color: "bg-rose-500",
  },
];


const TimelineItem = ({ event, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div>
      
    </div>
  )
}