"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, User, Briefcase, Mail, LayoutGrid } from "lucide-react";
import { useRouter } from "next/navigation"; // Changed import

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "About", icon: User, path: "/about" },
  { name: "Documentation", icon: Briefcase, path: "/documentation" },
  { name: "Components", icon: LayoutGrid, path: "/components" },
  { name: "Contact", icon: Mail, path: "/contact" },
];

export default function FloatingNav() {
  const router = useRouter();
  const [active, setActive] = useState("Home");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const difference = latest - lastY;

    if (difference > 0 && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastY(latest);

    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current);
    }

    scrollTimer.current = setTimeout(() => {
      setHidden(false);
    }, 400);
  });

  const handleNavClick = (item: (typeof navItems)[0]) => {
    setActive(item.name);
    router.push(item.path);
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white/10 bg-gray-200 backdrop-blur-xl shadow-2xl shadow-black/50">
        {navItems.map((item) => {
          const isActive = active === item.name;
          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-2"
              style={{
                color: isActive ? "#184742" : "black",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gray-400 rounded-full border border-white/5"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 0.5,
                  }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                <item.icon size={20} />
                <span className="hidden sm:block">{item.name}</span>
              </span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
