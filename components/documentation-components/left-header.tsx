"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import AlorikLogo from "../landingpage-components/logo";

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
  const [activeSection, setActiveSection] = useState<string>("");

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
          subItems: ["Beam Button", "Move Button", "System Button"],
        },
        {
          title: "Inputs",
          subItems: ["Ghost Keyboard", "Text Field"],
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

  // Scroll to section
  const scrollToSection = (label: string) => {
    const id = label.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }

    // close sidebar on mobile
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  // Active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const allIds: string[] = [];

      sidebarLinks.forEach((section) =>
        section.items.forEach((item) => {
          if (item.subItems) {
            item.subItems.forEach((sub) =>
              allIds.push(sub.toLowerCase().replace(/\s+/g, "-"))
            );
          } else {
            allIds.push(item.title.toLowerCase().replace(/\s+/g, "-"));
          }
        })
      );

      for (const id of allIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 flex items-center px-4 justify-between">
        <Link href="/">
          <AlorikLogo />
        </Link>
        <button onClick={() => setIsSidebarOpen((v) => !v)}>
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-white border-r border-slate-200
          transition-transform duration-300
          pt-20 lg:pt-8 px-6 overflow-y-auto
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Desktop Logo */}
        <div className="hidden lg:block mb-8">
          <Link href="/">
            <AlorikLogo />
          </Link>
          <p className="text-xs text-slate-500 mt-1">Documentation v1.0</p>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {sidebarLinks.map((section) => (
            <div key={section.category}>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                {section.category}
              </h4>

              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item.title}>
                    {/* Parent label */}
                    <p className="text-sm font-medium text-slate-700 pl-2 mb-1">
                      {item.title}
                    </p>

                    {/* Sublinks */}
                    {item.subItems && (
                      <div className="ml-3 space-y-1">
                        {item.subItems.map((sub) => {
                          const subId = sub.toLowerCase().replace(/\s+/g, "-");

                          return (
                            <button
                              key={sub}
                              onClick={() => scrollToSection(sub)}
                              className={`block w-full text-left text-sm transition-all pl-3 ${
                                activeSection === subId
                                  ? "text-slate-900 font-medium border-l-2 border-slate-900"
                                  : "text-slate-500 hover:text-slate-900"
                              }`}
                            >
                              {sub}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
