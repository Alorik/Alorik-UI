"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AlorikLogo from "./logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="flex justify-between items-center px-4">
        <div className="flex p-4 justify-start items-center gap-8">
          <Link href="/">
            <AlorikLogo />
          </Link>
          <Link
            href="/documentation"
            className="group relative text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
          >
            Docs
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
          <Link
            href="/"
            className="group relative text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
          >
            Components
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
        </div>
        <div className="">
          <Link
            href="/"
            className="group relative text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
        </div>
      </div>

      {/* Border appears only when scrolled */}
      <div
        className={`border-b border-gray-200 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
