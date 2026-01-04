"use client"
import { Home, User, Briefcase, Mail, LayoutGrid } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";


const navItems = [
  { name: "Home", icon: Home },
  { name: "About", icon: User },
  { name: "Services", icon: Briefcase },
  { name: "Projects", icon: LayoutGrid },
  { name: "Contact", icon: Mail },
];

export default function FloatingNav() {
  const [active, setActive] = useState("Home");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const difference = latest - lastY;

    if (difference > 0 && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastY(latest);

  })

  
return (
  <div className="fixed top-6 left-1/2 -translate-x-1/2">
    <div className="flex gap-2 px-4 py-2 bg-black rounded-full">
      <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white/10 bg-gray-300 backdrop-blur-xl shadow-2xl shadow-black/50">
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
                  onClick={() => setActive(item.name)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-2"
                  style={{
                    color: isActive ? "4F3B36" : "black", // White vs Slate-400
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gray-400 rounded-full border border-white/5"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon size={20} />
                    <span className="hidden sm:block">{item.name} </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </div>
  </div>
);
}