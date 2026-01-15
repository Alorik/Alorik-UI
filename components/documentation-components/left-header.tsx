"use client";

import { Menu, X } from "lucide-react";
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
      <header className="lg:hidden fixed top-0 inset-x-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 flex items-center px-4">
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
          pt-20 lg:pt-8 px-6 overflow-y-auto
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Navigation */}
        <nav className="space-y-10">
          {sidebarLinks.map((section) => (
            <div key={section.category}>
              {/* Category */}
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                {section.category}
              </h4>

              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.title}>
                    {/* Parent */}
                    <p className="text-sm font-medium text-slate-700 mb-2">
                      {item.title}
                    </p>

                    {/* Sublinks */}
                    {item.subItems && (
                      <div className="flex flex-col gap-1 pl-3">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub}
                            className="text-left text-sm text-slate-500 hover:text-slate-900 transition-colors leading-6"
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
