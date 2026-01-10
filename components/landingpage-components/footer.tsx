"use client";

import { useRouter } from "next/navigation";
import AlorikLogo from "./logo";
import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {

  return (
    <>
      <hr  className="h-1 w-full text-gray-700 "/>
      <div className="flex items-center justify-between my-10 container">
        <div className="flex flex-col gap-2">
          <div>
            <AlorikLogo />
          </div>
          <div className="text-sm text-gray-700">A product by Alorik</div>
        </div>

        {/* right side */}
        <div>
          <div className="flex gap-10">
            <div className="flex flex-col text-gray-600 gap-1">
              <Link
                href="/documentation"
                className="text-sm hover:text-gray-900 transition-colors cursor-pointer"
              >
                Documentation
              </Link>
              <Link
                href="/faq"
                className="text-sm hover:text-gray-900 transition-colors cursor-pointer"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col text-gray-600 gap-1">
              <Link
                href="https://discord.gg/your-discord-invite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-900 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FaDiscord />
                Discord
              </Link>
              <Link
                href="https://x.com/Alorik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-900 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FaTwitter />X
              </Link>
              <Link
                href="https://github.com/Alorik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-900 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FaGithub />
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
