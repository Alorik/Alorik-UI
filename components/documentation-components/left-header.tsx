"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useDocs } from "./docs-context";
// 1. Import the hook we created

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

  // 2. REMOVED local state, ADDED context hook
  // const [activeItem, setActiveItem] = useState<string>("Introduction");
  const { activeItem, setActiveItem } = useDocs();

  // Track which folders are open.
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

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
          subItems: ["Beam Button", "System Button", "StarLight Button"],
        },
        {
          title: "Cards",
          subItems: [
            "ClipPath Card",
            "Graceful Card",
            "Hovered Card",
            "Stacked Card",
            "Expandable Card",
          ],
        },
        {
          title: "Background",
          subItems: ["Particles Background"],
        },

        {
          title: "TimeLine",
          subItems: ["Starlight Timeline"],
        },
      ],
    },
    {
      category: "Layouts",
      items: [
        {
          title: "Navigation",
          subItems: ["Floating Navbar", "Navbar Reveal", "BreadCrumb Navbar"],
        },
        {
          title: "Sections",
          subItems: ["Hero Section", "Features Grid"],
        },
      ],
    },
  ];

  // Auto-expand the category if a sub-item is active (Works with global state too!)
  useEffect(() => {
    sidebarLinks.forEach((section) => {
      section.items.forEach((item) => {
        if (item.subItems?.includes(activeItem)) {
          setExpandedItems((prev) =>
            prev.includes(item.title) ? prev : [...prev, item.title]
          );
        }
      });
    });
    // We add sidebarLinks to dependency to be safe, though it's static
  }, [activeItem]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

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
        <nav className="space-y-8 pb-10">
          {sidebarLinks.map((section) => (
            <div key={section.category}>
              <h4 className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {section.category}
              </h4>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const isExpanded = expandedItems.includes(item.title);
                  const isActive = activeItem === item.title;
                  const hasSubItems = item.subItems && item.subItems.length > 0;

                  return (
                    <div key={item.title} className="space-y-1">
                      {/* PARENT ITEM */}
                      <motion.button
                        layout
                        onClick={() => {
                          if (hasSubItems) {
                            toggleExpand(item.title);
                          } else {
                            setActiveItem(item.title);
                          }
                        }}
                        className={`
                          group flex items-center justify-between w-full px-4 py-2 rounded-xl text-sm relative z-10 transition-colors
                          ${
                            isActive
                              ? "text-slate-900"
                              : "text-slate-600 hover:text-slate-900"
                          }
                        `}
                      >
                        {/* Active Background */}
                        {isActive && (
                          <motion.div
                            layoutId="active-bg"
                            className="absolute inset-0 bg-slate-100 rounded-xl border border-slate-200 shadow-sm -z-10"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}

                        {/* Hover Background */}
                        {!isActive && (
                          <div className="absolute inset-0 rounded-xl bg-slate-100/0 transition-colors duration-200 group-hover:bg-slate-100/50 -z-10" />
                        )}

                        <span className="font-medium relative z-20">
                          {item.title}
                        </span>

                        {/* Chevron Animation */}
                        {hasSubItems ? (
                          <motion.span
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-slate-400"
                          >
                            <ChevronRight size={14} />
                          </motion.span>
                        ) : (
                          // Only show arrow for leaf nodes if active
                          isActive && (
                            <motion.span
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              <ChevronRight
                                size={14}
                                className="text-slate-400"
                              />
                            </motion.span>
                          )
                        )}
                      </motion.button>

                      {/* SUB ITEMS */}
                      <AnimatePresence>
                        {hasSubItems && isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1 mt-1 relative">
                              {/* Vertical Line */}
                              <div className="absolute left-6 top-0 bottom-2 w-px bg-slate-200" />

                              {item.subItems!.map((subItem) => {
                                const isSubActive = activeItem === subItem;

                                return (
                                  <motion.button
                                    key={subItem}
                                    layout
                                    onClick={() => setActiveItem(subItem)}
                                    className={`
                                      relative flex items-center w-full pl-6 pr-4 py-2 rounded-lg text-sm transition-colors z-10
                                      ${
                                        isSubActive
                                          ? "text-slate-900 font-medium"
                                          : "text-slate-500 hover:text-slate-900"
                                      }
                                    `}
                                  >
                                    {isSubActive && (
                                      <motion.div
                                        layoutId="active-bg"
                                        className="absolute inset-0 bg-slate-100 rounded-lg border border-slate-200 shadow-sm -z-10"
                                        transition={{
                                          type: "spring",
                                          stiffness: 300,
                                          damping: 30,
                                        }}
                                      />
                                    )}

                                    {/* Subitem Hover */}
                                    {!isSubActive && (
                                      <div className="absolute inset-0 rounded-lg bg-slate-100/0 transition-colors duration-200 hover:bg-slate-100/50 -z-10" />
                                    )}

                                    <span>{subItem}</span>
                                  </motion.button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
