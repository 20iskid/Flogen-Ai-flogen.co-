"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  checkPop,
  revealUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

const painPoints = [
  "Your team is drowning in repetitive tasks while competitors ship faster.",
  "Leads slip through cracks because your follow-up is manual and slow.",
  "You're paying for tools that don't talk to each other — and bleeding margin.",
  "Every month without a system costs you compounding revenue you'll never recover.",
];

const solutions = [
  "Custom AI workflows that eliminate 60–80% of manual ops within 90 days.",
  "Always-on nurture sequences that convert cold leads while you sleep.",
  "One unified stack — engineered, integrated, and owned by your business.",
  "Measurable ROI tracked from day one. No vanity metrics. No excuses.",
];

export default function PasSection() {
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
            Here&apos;s the brutal truth about your business right now.
          </motion.h2>

          <motion.p
            variants={revealUp}
            className="mt-5 text-base leading-relaxed text-brand-navy/80 sm:mt-6 sm:text-lg"
          >
            You didn&apos;t build a company to babysit spreadsheets and chase
            leads that ghost you. Yet that&apos;s exactly where most founders
            land — stuck in the weeds while growth flatlines.
          </motion.p>

          <motion.p
            variants={revealUp}
            className="mt-4 text-base leading-relaxed text-brand-navy/80 sm:text-lg"
          >
            The gap isn&apos;t talent. It isn&apos;t hustle. It&apos;s systems.
            And until you fix the machine underneath your revenue, every dollar
            you spend on ads is gasoline on a bonfire.
          </motion.p>

          <motion.ul variants={staggerContainer} className="mt-8 space-y-4 sm:mt-10">
            {painPoints.map((point) => (
              <motion.li
                key={point}
                variants={revealUp}
                className="flex gap-3 text-sm leading-relaxed text-brand-navy/90 sm:text-base"
              >
                <span className="mt-1 shrink-0 font-black text-brand-red">—</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={revealUp}
            className="mt-8 text-base font-bold leading-relaxed text-brand-navy sm:mt-10 sm:text-lg"
          >
            Flogen doesn&apos;t sell software. We install profit engines. Here
            is what changes when you work with us:
          </motion.p>

          <motion.ul variants={staggerContainer} className="mt-6 space-y-5 sm:mt-8">
            {solutions.map((point) => (
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
