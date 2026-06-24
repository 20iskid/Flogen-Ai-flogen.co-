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
    <section className="bg-brand-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2
            variants={revealUp}
            className="text-3xl font-black tracking-tighter text-brand-navy md:text-5xl"
          >
            Here&apos;s the brutal truth about your business right now.
          </motion.h2>

          <motion.p
            variants={revealUp}
            className="mt-6 text-lg leading-relaxed text-brand-navy/80"
          >
            You didn&apos;t build a company to babysit spreadsheets and chase
            leads that ghost you. Yet that&apos;s exactly where most founders
            land — stuck in the weeds while growth flatlines.
          </motion.p>

          <motion.p
            variants={revealUp}
            className="mt-4 text-lg leading-relaxed text-brand-navy/80"
          >
            The gap isn&apos;t talent. It isn&apos;t hustle. It&apos;s systems.
            And until you fix the machine underneath your revenue, every dollar
            you spend on ads is gasoline on a bonfire.
          </motion.p>

          <motion.ul
            variants={staggerContainer}
            className="mt-10 space-y-4"
          >
            {painPoints.map((point) => (
              <motion.li
                key={point}
                variants={revealUp}
                className="flex gap-3 text-base leading-relaxed text-brand-navy/90"
              >
                <span className="mt-1 font-black text-brand-red">—</span>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={revealUp}
            className="mt-10 text-lg font-bold leading-relaxed text-brand-navy"
          >
            Flogen doesn&apos;t sell software. We install profit engines. Here
            is what changes when you work with us:
          </motion.p>

          <motion.ul variants={staggerContainer} className="mt-8 space-y-5">
            {solutions.map((point) => (
              <motion.li
                key={point}
                variants={checkPop}
                className="flex items-start gap-4 text-base leading-relaxed text-brand-navy"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-brand-red">
                  <Check className="h-4 w-4 stroke-[3] text-brand-white" />
                </span>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
