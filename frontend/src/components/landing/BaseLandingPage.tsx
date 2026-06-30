"use client";

import { useEffect, useRef } from "react";
import BaseHeroVideoSection from "@/components/landing/BaseHeroVideoSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import LandingFooter from "@/components/landing/LandingFooter";
import HubTestimonialsSection from "@/components/landing/HubTestimonialsSection";
import PasSection from "@/components/landing/PasSection";
import ScrollRevealVideoPlaceholder from "@/components/landing/ScrollRevealVideoPlaceholder";
import SocialProofStrip from "@/components/landing/SocialProofStrip";
import UvpGrid from "@/components/landing/UvpGrid";
import type { HubLandingContent } from "@/lib/landing/types";

type BaseLandingPageProps = {
  content: HubLandingContent;
};

/** Document-relative top (layout position, ignores any GSAP transform). */
function pageTop(el: HTMLElement): number {
  let y = 0;
  let cur: HTMLElement | null = el;
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent as HTMLElement | null; }
  return y;
}

/** Document-relative left (layout position, ignores any GSAP transform). */
function pageLeft(el: HTMLElement): number {
  let x = 0;
  let cur: HTMLElement | null = el;
  while (cur) { x += cur.offsetLeft; cur = cur.offsetParent as HTMLElement | null; }
  return x;
}

// Even (jittered-grid) landing spots spread across the WHOLE heading + paragraph
// region of the testimonials section — 5 columns × 3 rows.  leftFrac = fraction of
// the section width; topPx = px from the section top.  This guarantees the * fan
// out evenly behind both the heading and the intro paragraph instead of keeping
// their original framing shape.
const STAR_TARGETS = [
  // row 1 — across the heading
  { leftFrac: 0.07, topPx: 90  },
  { leftFrac: 0.30, topPx: 70  },
  { leftFrac: 0.50, topPx: 105 },
  { leftFrac: 0.71, topPx: 64  },
  { leftFrac: 0.93, topPx: 96  },
  // row 2 — between heading and paragraph
  { leftFrac: 0.05, topPx: 250 },
  { leftFrac: 0.28, topPx: 280 },
  { leftFrac: 0.51, topPx: 240 },
  { leftFrac: 0.73, topPx: 286 },
  { leftFrac: 0.95, topPx: 252 },
  // row 3 — behind the paragraph
  { leftFrac: 0.09, topPx: 430 },
  { leftFrac: 0.31, topPx: 460 },
  { leftFrac: 0.52, topPx: 420 },
  { leftFrac: 0.72, topPx: 466 },
  { leftFrac: 0.92, topPx: 438 },
] as const;

export default function BaseLandingPage({ content }: BaseLandingPageProps) {
  const videoRef = useRef<HTMLElement>(null);
  const testRef  = useRef<HTMLElement>(null);

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!active || !videoRef.current || !testRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const videoEl = videoRef.current;
      const testEl  = testRef.current;

      const ctx = gsap.context(() => {
        // The [data-word] parents live in the (un-clipped) video section.  After
        // the words convert to *, these SAME elements travel down to scattered
        // spots in the testimonials heading band — and then STOP.  Because the
        // travel is defined in document coordinates and ends at "top 30%", once
        // it completes the * simply sit at those document positions and scroll
        // with the page like a normal background star field.
        const parents = gsap.utils.toArray<HTMLElement>("[data-word]", videoEl);

        parents.forEach((parent, i) => {
          const target = STAR_TARGETS[i % STAR_TARGETS.length];

          // Translation needed to move this element from its natural (video)
          // layout position to its target spot inside the testimonials band.
          const destX = () =>
            pageLeft(testEl) + target.leftFrac * testEl.offsetWidth - pageLeft(parent);
          const destY = () =>
            pageTop(testEl) + target.topPx - pageTop(parent);

          // Each star gets slightly different scrub lag so they drift and settle
          // organically instead of marching in lockstep — calmer, more natural.
          const lag = 1.7 + (i % 5) * 0.18;

          gsap.fromTo(
            parent,
            { x: 0, y: 0 },
            {
              x: destX,
              y: destY,
              // sine.inOut eases out of the video layout and gently into the grid,
              // so there's no abrupt start/stop — it feels like a soft glide.
              ease: "sine.inOut",
              scrollTrigger: {
                trigger: testEl,
                start: "top bottom",   // travel begins as testimonials appears
                end:   "top 50%",      // planted while the section is still entering
                scrub: lag,
                invalidateOnRefresh: true,
                onToggle: ({ isActive }) => {
                  parent.style.willChange = isActive ? "transform" : "auto";
                },
              },
            },
          );
        });
      });

      cleanup = () => ctx.revert();
    })();

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return (
    // bg lives on the wrapper so it shows through the transparent testimonials
    // section, letting the video section's drifting * appear as its background.
    <div className="relative overflow-x-clip bg-[#FDFAFA]">
      <BaseHeroVideoSection content={content.hero} />
      <ScrollRevealVideoPlaceholder ref={videoRef} />
      <HubTestimonialsSection ref={testRef} />
      <SocialProofStrip content={content.socialProof} />
      <PasSection content={content.pas} />
      <UvpGrid content={content.uvp} />
      <FinalCtaSection content={content.finalCta} />
      <LandingFooter />
    </div>
  );
}
