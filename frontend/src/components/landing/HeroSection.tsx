"use client";

import { motion } from "framer-motion";
import MaskReveal from "@/components/landing/MaskReveal";
import PrimaryButton from "@/components/landing/PrimaryButton";
import { float, revealUp, staggerContainer } from "@/lib/motion";

export default function HeroSection() {
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
            Recover the{" "}
            <span className="text-brand-red">$22,000 in Billable Hours</span>{" "}
            Your Firm Is Leaving on the Table Every Year and Never Lose Another
            Lead to a Competitor Who Answered Faster Using a Custom Law Firm
            Automation System That Goes Live in{" "}
            <span className="text-brand-red">30 Days</span> Built Around Your
            Exact Practice Area and Case Management Software{" "}
            <span className="text-brand-white/90">
              (Pilot Includes Full NDA and Money-Back Guarantee)
            </span>
          </h1>
        </MaskReveal>

        <MaskReveal>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-white/75 sm:mt-8 sm:text-lg">
            We install intake, follow-up, and case workflow automation around the
            software you already use — so your firm captures every billable hour
            and responds to leads before the competition does.
          </p>
        </MaskReveal>

        <motion.div variants={revealUp} className="mt-8 sm:mt-10">
          <PrimaryButton href="#audit">
            Claim your free firm automation audit
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
