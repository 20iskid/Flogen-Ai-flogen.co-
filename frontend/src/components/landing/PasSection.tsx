"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  checkPop,
  revealUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import type { LandingContent } from "@/lib/landing/types";

type PasSectionProps = {
  content: LandingContent["pas"];
};

export default function PasSection({ content }: PasSectionProps) {
  return (
    <section className="section-x section-y bg-brand-white">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2
            variants={revealUp}
            className="text-2xl font-black tracking-tighter text-brand-navy sm:text-3xl md:text-5xl"
          >
            {content.title}
          </motion.h2>

          {content.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              variants={revealUp}
              className={`text-base leading-relaxed text-brand-navy/80 sm:text-lg ${index === 0 ? "mt-5 sm:mt-6" : "mt-4"}`}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.ul variants={staggerContainer} className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {content.painPoints.map((point) => (
              <motion.li
                key={point}
                variants={revealUp}
                className="flex items-start gap-3 rounded-xl border border-brand-red/20 bg-brand-red/[0.06] px-4 py-3 text-sm font-medium leading-relaxed text-brand-navy sm:gap-4 sm:text-base"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-black text-brand-white sm:h-6 sm:w-6 sm:text-sm">
                  !
                </span>
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={revealUp}
            className="mt-8 text-base font-bold leading-relaxed text-brand-navy sm:mt-10 sm:text-lg"
          >
            {content.bridge}
          </motion.p>

          <motion.ul variants={staggerContainer} className="mt-6 space-y-5 sm:mt-8">
            {content.solutions.map((point) => (
              <motion.li
                key={point}
                variants={checkPop}
                className="flex items-start gap-3 text-sm leading-relaxed text-brand-navy sm:gap-4 sm:text-base"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-brand-red sm:h-7 sm:w-7">
                  <Check className="h-3.5 w-3.5 stroke-[3] text-brand-white sm:h-4 sm:w-4" />
                </span>
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
