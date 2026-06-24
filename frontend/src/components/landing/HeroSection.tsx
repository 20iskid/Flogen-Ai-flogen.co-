"use client";

import { motion } from "framer-motion";
import MaskReveal from "@/components/landing/MaskReveal";
import PrimaryButton from "@/components/landing/PrimaryButton";
import { float, revealUp, staggerContainer } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="bg-brand-navy px-6 pb-20 pt-16 text-brand-white md:pb-28 md:pt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl"
      >
        <MaskReveal>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-brand-red">
            For founders who refuse to leave revenue on the table
          </p>
        </MaskReveal>

        <MaskReveal>
          <h1 className="text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl">
            We Build AI Systems
            <br />
            That Print Profit.
            <br />
            <span className="text-brand-red">Or You Don&apos;t Pay.</span>
          </h1>
        </MaskReveal>

        <MaskReveal>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-white/80 md:text-xl">
            Flogen engineers ruthless automation and conversion infrastructure
            for businesses sick of bleeding cash on manual ops and weak funnels.
            No fluff. No retainers without ROI.
          </p>
        </MaskReveal>

        <motion.div variants={revealUp} className="mt-10">
          <PrimaryButton href="#audit">Claim your free growth audit</PrimaryButton>
        </motion.div>

        <motion.div
          animate={float}
          className="mt-14 overflow-hidden rounded-sm border border-white/10 bg-black/30 shadow-2xl"
        >
          <div className="flex aspect-video items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-red bg-brand-red/20">
                <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-brand-white" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-white/60">
                VSL Placeholder — 16:9
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
