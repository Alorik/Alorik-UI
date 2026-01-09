"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import AlorikLogo from "../landingpage-components/logo";

export default function DocumentLeftSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("introduction");

  const sidebarLinks = [
    {
      category: "Getting Started",
      items: ["Introduction", "Installation", "Theming"],
    },
    {
      category: "Components",
      items: ["Beam Button", "System Button", "Ghost Keyboard"],
    },
    { category: "Layouts", items: ["Hero Section", "Features Grid"] },
  ];

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
          transition-transform duration-300 lg:translate-x-0 pt-20 lg:pt-8 px-6
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
                {section.items.map((item) => (
                  <div key={item}>
                    <button
                      onClick={() => setActiveSection(item.toLowerCase())}
                      className={`text-sm block transition-colors w-full text-left ${
                        activeSection === item.toLowerCase()
                          ? "text-gray-600 font-medium translate-x-1"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
