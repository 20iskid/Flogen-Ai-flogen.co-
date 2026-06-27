"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LogoLink } from "@/components/landing/Logo";

export default function LandingFooter() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const shellOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0.9, 1]);
  const shellY = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const shellWidth = useTransform(scrollYProgress, [0, 1], ["88%", "100%"]);
  const shellScaleY = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const shellRadius = useTransform(scrollYProgress, [0, 1], ["22px", "0px"]);
  const shellBorderOpacity = useTransform(scrollYProgress, [0, 1], [0.22, 0.1]);
  const shellBorderColor = useTransform(
    shellBorderOpacity,
    (v) => `rgba(255,255,255,${v})`,
  );

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-brand-navy py-10 text-brand-white sm:py-14"
    >
      <motion.div
        style={{
          width: shellWidth,
          opacity: shellOpacity,
          y: shellY,
          scaleY: shellScaleY,
          borderRadius: shellRadius,
          borderColor: shellBorderColor,
        }}
        className="mx-auto origin-center border bg-white/[0.03] shadow-[0_16px_46px_rgba(0,0,0,0.24)]"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-5 py-8 text-center sm:gap-6 sm:px-8 sm:py-9 lg:flex-row lg:justify-between lg:text-left">
          <LogoLink
            variant="full"
            className="h-7 w-auto max-w-[min(100%,16rem)] sm:h-8 lg:max-w-[min(100%,18rem)]"
          />

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-brand-white/50 sm:gap-8">
            <a href="/about-us" className="transition-colors hover:text-brand-white">
              About
            </a>
            <a href="/careers" className="transition-colors hover:text-brand-white">
              Careers
            </a>
            <a href="/audit" className="transition-colors hover:text-brand-white">
              Audit
            </a>
          </nav>

          <p className="text-xs text-brand-white/40 sm:text-sm">
            &copy; {year} Flogen. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
