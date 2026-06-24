"use client";

import { motion } from "framer-motion";
import MaskReveal from "@/components/landing/MaskReveal";
import PrimaryButton from "@/components/landing/PrimaryButton";
import { renderHeadlineSegment } from "@/components/landing/HeadlineText";
import type { LandingContent } from "@/lib/landing/types";
import { float, revealUp, staggerContainer } from "@/lib/motion";

type HeroSectionProps = {
  content: LandingContent["hero"];
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="section-x bg-brand-navy pb-14 pt-8 text-brand-white sm:pb-20 sm:pt-10 md:pb-28 md:pt-14">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl"
      >
        <MaskReveal>
          <h1 className="text-[1.35rem] font-black leading-[1.08] tracking-tighter sm:text-2xl md:text-3xl lg:text-[2.125rem] lg:leading-[1.1] xl:text-4xl">
            {content.headline.map((segment, index) =>
              renderHeadlineSegment(segment, index)
            )}
          </h1>
        </MaskReveal>

        <MaskReveal>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-white/75 sm:mt-8 sm:text-lg">
            {content.subheadline}
          </p>
        </MaskReveal>

        <motion.div variants={revealUp} className="mt-8 sm:mt-10">
          <PrimaryButton href={content.ctaHref ?? "#audit"}>
            {content.ctaLabel}
          </PrimaryButton>
        </motion.div>

        <motion.div
          animate={float}
          className="mt-10 overflow-hidden rounded-sm border border-white/10 bg-black/30 shadow-2xl sm:mt-14"
        >
          <div className="flex aspect-video w-full items-center justify-center px-4">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-red bg-brand-red/20 sm:mb-4 sm:h-16 sm:w-16">
                <div className="ml-1 h-0 w-0 border-y-[8px] border-l-[14px] border-y-transparent border-l-brand-white sm:border-y-[10px] sm:border-l-[16px]" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-white/60 sm:text-sm">
                VSL Placeholder — 16:9
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
