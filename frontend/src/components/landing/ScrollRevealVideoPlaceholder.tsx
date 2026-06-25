"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";

const playPulse = {
  scale: [1, 1.1, 1],
  boxShadow: [
    "0 0 0 0 rgba(153, 27, 27, 0.45)",
    "0 0 0 18px rgba(153, 27, 27, 0)",
    "0 0 0 0 rgba(153, 27, 27, 0)",
  ],
};

export default function ScrollRevealVideoPlaceholder() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], ["45deg", "0deg"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [96, 0]);
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0 24px 48px -12px rgba(11, 23, 42, 0.25)",
      "0 48px 96px -16px rgba(11, 23, 42, 0.55)",
    ],
  );

  return (
    <section
      ref={sectionRef}
      className="relative -mt-12 overflow-hidden bg-brand-white pb-16 pt-8 sm:-mt-16 sm:pb-20 sm:pt-10 md:-mt-20 md:pb-24 md:pt-12"
      aria-label="Video presentation"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-[12%] h-[55%] -skew-y-6 bg-white"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[28%] h-[50%] skew-y-3 bg-neutral-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[42%] h-[45%] -skew-y-2 bg-neutral-50"
        aria-hidden
      />

      <div className="section-x relative z-10">
        <div className="mx-auto max-w-5xl [perspective:1000px] [transform-style:preserve-3d]">
          <motion.div
            style={{
              rotateX,
              scale,
              opacity,
              y,
              boxShadow,
              transformPerspective: 1000,
            }}
            className="origin-center transform-gpu will-change-transform"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#0B172A] ring-1 ring-black/10">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,250,250,0.08)_0%,transparent_55%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(153,27,27,0.12)_0%,transparent_50%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/40"
                aria-hidden
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  type="button"
                  aria-label="Play video"
                  animate={playPulse}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-[#991B1B] text-[#FDFAFA] shadow-brand-card sm:h-24 sm:w-24 md:h-28 md:w-28"
                >
                  <Play
                    className="ml-1 h-9 w-9 fill-current sm:h-10 sm:w-10 md:h-12 md:w-12"
                    strokeWidth={0}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
