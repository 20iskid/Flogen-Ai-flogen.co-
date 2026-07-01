"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import FlogenLogo from "@/components/landing/FlogenLogo";
import MenuOverlay from "@/components/landing/MenuOverlay";

type SiteHeaderProps = {
  tone?: "dark" | "light";
};

export default function SiteHeader({ tone = "dark" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isDark = tone === "dark";

  return (
    <>
      <MenuOverlay isOpen={menuOpen} onClose={closeMenu} />
      <header
        className={`sticky top-0 z-50 flex w-full items-center justify-between border-b px-3 py-4 sm:px-4 sm:py-5 md:px-8 md:py-6 ${
          isDark
            ? "border-white/10 bg-[#0B172A]/95 text-[#FDFAFA] backdrop-blur-md"
            : "border-[#0B172A]/10 bg-[#FDFAFA]/95 text-[#0B172A] backdrop-blur-md"
        }`}
      >
        <div className="flex flex-1 items-center justify-start">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={`hub-hero-menu flex items-center gap-2 font-bold transition-opacity hover:opacity-80 ${
              isDark ? "text-[#FDFAFA]" : "text-[#0B172A]"
            }`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Image
              src="/icons/menu.svg"
              alt=""
              width={26}
              height={23}
              className={`h-[20px] w-[22px] sm:h-[23px] sm:w-[26px] ${isDark ? "" : "brightness-0"}`}
            />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>

        <div className="flex flex-none items-center justify-center">
          <Link
            href="/"
            className="inline-flex max-w-full shrink-0 justify-center"
          >
            <FlogenLogo
              className={`h-8 w-auto max-w-[9rem] sm:h-10 sm:max-w-[11rem] md:h-11 md:max-w-[13rem] ${
                isDark ? "" : "brightness-0"
              }`}
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Link
            href="/audit"
            className="hub-hero-nav-cta shrink-0 rounded-full bg-[#991B1B] px-3 py-2 text-[12px] text-[#FDFAFA] sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="sm:hidden">Audit</span>
            <span className="hidden sm:inline">Get Your Free Audit Today!</span>
          </Link>
        </div>
      </header>
    </>
  );
}
