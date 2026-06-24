"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { LogoLink } from "@/components/landing/Logo";
import MaskReveal from "@/components/landing/MaskReveal";
import PrimaryButton from "@/components/landing/PrimaryButton";
import { renderHeadlineSegment } from "@/components/landing/HeadlineText";
import type { LandingContent } from "@/lib/landing/types";
import { revealUp, staggerContainer } from "@/lib/motion";

const DEFAULT_HERO_VIDEO = "/videos/hero-bg.mp4";

type BaseHeroVideoSectionProps = {
  content: LandingContent["hero"];
  videoSrc?: string;
  ctaFallback?: string;
};

export default function BaseHeroVideoSection({
  content,
  videoSrc = DEFAULT_HERO_VIDEO,
  ctaFallback = "#industries",
}: BaseHeroVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden text-brand-white">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // @ts-expect-error fetchPriority is valid on video elements
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,23,42,0.92)_0%,rgba(11,23,42,0.78)_45%,rgba(11,23,42,0.94)_100%),radial-gradient(ellipse_at_center,transparent_0%,rgba(11,23,42,0.5)_100%)]"
        aria-hidden
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20"
      >
        <motion.div variants={revealUp} className="mb-10 sm:mb-14">
          <LogoLink
            variant="full"
            className="mx-auto h-12 w-auto max-w-[min(100%,22rem)] sm:h-14 md:h-16"
          />
        </motion.div>

        <MaskReveal className="w-full">
          <h1 className="mx-auto max-w-5xl text-[1.35rem] font-black leading-[1.08] tracking-tighter sm:text-2xl md:text-3xl lg:text-[2.125rem] lg:leading-[1.1] xl:text-4xl">
            {content.headline.map((segment, index) =>
              renderHeadlineSegment(segment, index)
            )}
          </h1>
        </MaskReveal>

        <MaskReveal className="w-full">
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-white/80 sm:mt-8 sm:text-lg">
            {content.subheadline}
          </p>
        </MaskReveal>

        <motion.div variants={revealUp} className="mt-8 w-full max-w-md sm:mt-10">
          <PrimaryButton href={content.ctaHref ?? ctaFallback}>
            {content.ctaLabel}
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
