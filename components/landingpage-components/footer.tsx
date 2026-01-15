"use client";

import AlorikLogo from "./logo";
import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand & Description */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <AlorikLogo />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Beautifully crafted, copy-paste components for your Next.js
              applications.
            </p>
          </div>

          {/* Spacer Column (Optional, pushes links to right) */}
          <div className="hidden md:block"></div>

          {/* Column 2: Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900 tracking-wide uppercase">
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="/documentation">Documentation</FooterLink>
              <FooterLink href="/components">Components</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </div>
          </div>

          {/* Column 3: Community */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900 tracking-wide uppercase">
              Community
            </h4>
            <div className="flex flex-col gap-3">
              <SocialLink href="https://github.com/Alorik" icon={<FaGithub />}>
                GitHub
              </SocialLink>
              <SocialLink
                href="https://discord.gg/your-invite"
                icon={<FaDiscord />}
              >
                Discord
              </SocialLink>
              <SocialLink href="https://x.com/Alorik" icon={<FaTwitter />}>
                Twitter / X
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Alorik UI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link
              href="/privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper components to keep code clean
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-500 hover:text-slate-900 transition-colors w-fit"
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 w-fit"
    >
      <span className="text-lg">{icon}</span>
      {children}
    </Link>
  );
}
