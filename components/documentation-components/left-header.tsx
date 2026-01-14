"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import AlorikLogo from "../landingpage-components/logo";

export default function DocumentLeftSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("introduction");

  const sidebarLinks = [
    {
      category: "Getting Started",
      items: ["Introduction", "Installation"],
    },
    {
      category: "Components",
      items: ["Beam Button", "System Button", "Ghost Keyboard"],
    },
    { category: "Layouts", items: ["Hero Section", "Features Grid"] },
  ];

  // Scroll to section when clicking sidebar item
  const scrollToSection = (item: string) => {
    const sectionId = item.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(item.toLowerCase());
    }
  };

  // Detect which section is in view while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = sidebarLinks.flatMap((section) =>
        section.items.map((item) => item.toLowerCase().replace(/\s+/g, "-"))
      );

      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with offset for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, sidebarLinks]);

  return (
    <div>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 flex items-center px-4 justify-between">
        <AlorikLogo />
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className={`
          fixed lg:sticky top-0 left-0 z-40 h-screen w-64 border-r border-slate-200 bg-white
          transition-transform duration-300 lg:translate-x-0 pt-20 lg:pt-8 px-6 overflow-y-auto
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="mb-8 hidden lg:block">
          <AlorikLogo />
          <p className="text-xs text-slate-500 mt-1">Documentation v1.0</p>
        </div>

        <div className="space-y-8">
          {sidebarLinks.map((section) => (
            <div key={section.category}>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                {section.category}
              </h4>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const itemId = item.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <div key={item}>
                      <button
                        onClick={() => scrollToSection(item)}
                        className={`text-sm block transition-all w-full text-left ${
                          activeSection === itemId
                            ? "text-slate-900 font-medium translate-x-1 border-l-2 border-slate-900 pl-2"
                            : "text-slate-500 hover:text-slate-900 pl-2"
                        }`}
                      >
                        {item}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
