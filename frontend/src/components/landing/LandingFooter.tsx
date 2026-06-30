"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { LogoLink } from "@/components/landing/Logo";
import { getNicheList } from "@/lib/landing/niches";

const MARQUEE_PHRASE =
  "BOOK YOUR AUDIT • LET'S BUILD SOMETHING GREAT TOGETHER • ";

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our System", href: "/our-accomplishments" },
  { label: "Stories", href: "#stories" },
  { label: "Book Audit", href: "/audit" },
] as const;

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

const footerLinkClass =
  "text-sm text-gray-400 transition-colors duration-200 hover:text-[#991B1B]";

function FooterMarquee() {
  const track = MARQUEE_PHRASE.repeat(6);

  return (
    <div
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-b border-white/10 py-10 md:py-14"
      aria-hidden
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
      >
        <p className="mega-footer-marquee shrink-0 pr-8">{track}</p>
        <p className="mega-footer-marquee shrink-0 pr-8">{track}</p>
      </motion.div>
    </div>
  );
}

function FooterColumn({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div id={id}>
      <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function LandingFooter() {
  const nicheList = getNicheList();
  const midpoint = Math.ceil(nicheList.length / 2);
  const industriesColA = nicheList.slice(0, midpoint);
  const industriesColB = nicheList.slice(midpoint);

  return (
    <footer className="bg-[#0B172A] text-[#FDFAFA]">
      <FooterMarquee />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-4 py-16 md:grid-cols-4 md:gap-12 md:px-8 lg:grid-cols-5">
        {/* Column 1 — Brand */}
        <div className="col-span-2 lg:col-span-1">
          <LogoLink
            variant="full"
            className="h-8 w-auto max-w-[min(100%,12rem)] brightness-0 invert md:h-9"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
            Building elite digital systems, workflows, and integrations tailored
            to your exact niche.
          </p>
        </div>

        {/* Column 2 — Industries (first half) */}
        <FooterColumn title="Industries" id="industries">
          <ul className="flex flex-col gap-4">
            {industriesColA.map((niche) => (
              <li key={niche.slug}>
                <Link href={niche.href} className={footerLinkClass}>
                  {niche.name}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        {/* Column 3 — Industries (second half) */}
        <FooterColumn title="Industries">
          <ul className="flex flex-col gap-4">
            {industriesColB.map((niche) => (
              <li key={niche.slug}>
                <Link href={niche.href} className={footerLinkClass}>
                  {niche.name}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        {/* Column 4 — Company */}
        <FooterColumn title="Company">
          <ul className="flex flex-col gap-4">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        {/* Column 5 — Legal */}
        <FooterColumn title="Legal">
          <ul className="flex flex-col gap-4">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>
      </div>

      {/* Copyright bar */}
      <div className="mt-12 border-t border-white/10 px-4 pb-12 pt-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; 2026 Flogen. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-500 transition-colors hover:text-[#FDFAFA]"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-500 transition-colors hover:text-[#FDFAFA]"
              aria-label="Twitter"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
