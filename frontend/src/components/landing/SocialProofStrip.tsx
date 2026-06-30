"use client";

import { Star } from "lucide-react";
import {
  siCrunchbase,
  siG2,
  siHubspot,
  siProducthunt,
  siTechcrunch,
  siTrustpilot,
  siUpwork,
  siZapier,
  type SimpleIcon,
} from "simple-icons";
import type { LandingContent } from "@/lib/landing/types";

type SocialProofStripProps = {
  content: LandingContent["socialProof"];
};

type Badge = {
  icon: SimpleIcon;
  /** The accolade headline (the brag). */
  accolade: string;
  /** The platform / source name shown beneath. */
  platform: string;
  /** Optional 0–5 star rating rendered inline with the accolade. */
  stars?: number;
  /** Star colour (defaults to the brand hex). */
  starColor?: string;
};

// Real, recognised platforms — official brand logos via simple-icons.
const BADGES: Badge[] = [
  { icon: siProducthunt, accolade: "#1 Product of the Day", platform: "Product Hunt" },
  { icon: siG2,          accolade: "High Performer · 2026",  platform: "G2 Crowd" },
  { icon: siTrustpilot,  accolade: "Rated 4.8 / 5",          platform: "Trustpilot", stars: 5 },
  { icon: siUpwork,      accolade: "Top Rated Plus",         platform: "Upwork" },
  { icon: siHubspot,     accolade: "Solutions Partner",      platform: "HubSpot" },
  { icon: siZapier,      accolade: "Certified Expert",       platform: "Zapier" },
  { icon: siCrunchbase,  accolade: "Featured Startup",       platform: "Crunchbase" },
  { icon: siTechcrunch,  accolade: "As Featured In",         platform: "TechCrunch" },
];

function BrandLogo({ icon }: { icon: SimpleIcon }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill={`#${icon.hex}`} aria-hidden>
      <path d={icon.path} />
    </svg>
  );
}

function BadgeCard({ badge }: { badge: Badge }) {
  return (
    // mr (not flex gap) so each card owns its trailing space — keeps the duplicated
    // track exactly two equal halves for a perfectly seamless -50% loop.
    <div className="mr-4 flex shrink-0 items-center gap-3.5 rounded-2xl border border-brand-navy/[0.08] bg-white px-5 py-3.5 shadow-[0_6px_22px_rgba(11,23,42,0.05)] sm:mr-5">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: `#${badge.icon.hex}14` }}
      >
        <BrandLogo icon={badge.icon} />
      </span>

      <span className="flex flex-col whitespace-nowrap leading-tight">
        <span className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-brand-navy">{badge.accolade}</span>
          {badge.stars ? (
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-current"
                  style={{ color: i < badge.stars! ? (badge.starColor ?? `#${badge.icon.hex}`) : "#D8DEE6" }}
                  strokeWidth={0}
                />
              ))}
            </span>
          ) : null}
        </span>

        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-navy/45">
          {badge.platform}
        </span>
      </span>
    </div>
  );
}

export default function SocialProofStrip({ content }: SocialProofStripProps) {
  return (
    <section className="overflow-hidden border-y border-brand-navy/10 bg-brand-white py-11 sm:py-14">
      {/* Eyebrow flanked by hairlines so the band reads as an intentional trust strip */}
      <div className="mb-8 flex items-center justify-center gap-3 px-4 sm:mb-10">
        <span className="h-px w-6 bg-brand-navy/15 sm:w-10" />
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/60 sm:text-xs">
          {content.label}
        </p>
        <span className="h-px w-6 bg-brand-navy/15 sm:w-10" />
      </div>

      <div className="relative">
        {/* Edge fades so cards melt into the band at both ends */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-brand-white to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-brand-white to-transparent sm:w-40" />

        {/*
          The track renders the set twice and animates -50% (tailwind.config.ts), so
          one full set scrolls off exactly as its duplicate arrives — a seamless,
          never-ending loop.  Pauses on hover.
        */}
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {[...BADGES, ...BADGES].map((badge, i) => (
            <BadgeCard key={`${badge.platform}-${i}`} badge={badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
