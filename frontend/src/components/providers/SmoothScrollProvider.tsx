"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Wraps the app in Lenis smooth scroll, wired to GSAP ScrollTrigger so every
 * existing scroll animation stays perfectly in sync.
 *
 * duration: 1.6 + the custom easing replicates that slow, buttery GSAP-website feel.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
    });

    // Keep GSAP ScrollTrigger in sync with Lenis scroll position.
    // This is the officially recommended integration pattern.
    let scrollTriggerLoaded = false;
    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      scrollTriggerLoaded = true;

      // Lenis emits scroll → tell ScrollTrigger to re-evaluate positions
      lenis.on("scroll", ScrollTrigger.update);

      // Drive Lenis via GSAP's ticker so everything runs on the same frame loop
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      // Prevent GSAP from fighting Lenis on laggy frames
      gsap.ticker.lagSmoothing(0);
    })();

    return () => {
      lenis.destroy();
      if (scrollTriggerLoaded) {
        // Restore default ticker behaviour on unmount
        import("gsap").then(({ default: gsap }) => gsap.ticker.lagSmoothing(500, 33));
      }
    };
  }, []);

  return <>{children}</>;
}
