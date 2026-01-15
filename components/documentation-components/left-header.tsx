"use client";
import { motion } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

type SidebarItem = {
  title: string;
  subItems?: string[];
};

type SidebarSection = {
  category: string;
  items: SidebarItem[];
};

export default function DocumentLeftSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>("Introduction");

  const sidebarLinks: SidebarSection[] = [
    {
      category: "Getting Started",
      items: [{ title: "Introduction" }, { title: "Installation" }],
    },
    {
      category: "Components",
      items: [
        {
          title: "Buttons",
          subItems: ["Beam Button", "System Button", "Move Button"],
        },
        {
          title: "Inputs",
          subItems: ["Input Field"],
        },
        {
          title: "Cards",
          subItems: ["GracefulCard", "HoveredCard", "StackedCard"],
        },
      ],
    },
    {
      category: "Layouts",
      items: [
        {
          title: "Navigation",
          subItems: ["Navbar", "Sidebar"],
        },
        {
          title: "Sections",
          subItems: ["Hero Section", "Features Grid"],
        },
        {
          title: "Visuals",
          subItems: ["Cards", "Backgrounds"],
        },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center px-4">
        <button
          onClick={() => setIsSidebarOpen((v) => !v)}
          className="p-2 rounded-md hover:bg-slate-100 transition"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-white border-r border-slate-200
          transition-transform duration-300
          pt-20 lg:pt-8 px-4 overflow-y-auto
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="space-y-10">
          {sidebarLinks.map((section) => (
            <div key={section.category}>
              {/* Category */}
              <h4 className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {section.category}
              </h4>

              <div className="space-y-2">
                {section.items.map((item) => {
                  const isActive = activeItem === item.title;

                  return (
                    <motion.button
                      layout
                      key={item.title}
                      onClick={() => setActiveItem(item.title)}
                      transition={{
                        layout: {
                          duration: 0.2,
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        },
                      }}
                      className={`
    group flex items-center justify-between w-full px-4 py-2 rounded-xl text-sm relative z-10
    ${isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}
  `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-bg"
                          className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 rounded-xl shadow-sm -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}

                      {!isActive && (
                        <div className="absolute inset-0 rounded-xl bg-slate-100/0 transition-colors duration-200 group-hover:bg-slate-100/70 -z-10" />
                      )}

                      <span className="font-medium relative z-20">
                        {item.title}
                      </span>

                      <motion.span
                        className="relative z-20 flex items-center justify-center"
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -4,
                        }}
                        style={{ opacity: undefined, x: undefined }}
                      >
                        <ChevronRight
                          size={16}
                          className={`
        transition-all duration-300
        ${
          !isActive &&
          "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
        }
      `}
                        />
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
