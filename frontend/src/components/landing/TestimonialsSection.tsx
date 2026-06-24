"use client";

import { motion } from "framer-motion";
import { fadeSlideUp, staggerContainer, viewportOnce } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "We cut ops overhead by 72% in 11 weeks. Flogen didn't pitch us a dream — they installed a machine.",
    name: "Marcus Chen",
    role: "CEO, Vertex Labs",
    result: "+$340K ARR",
  },
  {
    quote:
      "Every agency promised AI. Flogen was the only one that showed up with a P&L impact in black and white.",
    name: "Sarah Okonkwo",
    role: "Founder, Pulse Health",
    result: "3.2x ROAS",
  },
  {
    quote:
      "Our lead response time went from 4 hours to 90 seconds. The pipeline hasn't been this full in years.",
    name: "James Whitfield",
    role: "COO, Orion Digital",
    result: "+218% leads",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-x section-y bg-brand-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeSlideUp}
            className="text-2xl font-black tracking-tighter text-brand-navy sm:text-3xl md:text-5xl"
          >
            From pain to proof.
          </motion.h2>
          <motion.p
            variants={fadeSlideUp}
            className="mt-3 max-w-2xl text-base text-brand-navy/70 sm:mt-4 sm:text-lg"
          >
            Real operators. Real numbers. No fabricated stock-photo testimonials.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {testimonials.map((t) => (
              <motion.blockquote
                key={t.name}
                variants={fadeSlideUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
                className="flex flex-col rounded-sm border border-brand-navy/10 bg-brand-navy/[0.02] p-6 transition-shadow duration-150 hover:shadow-brand-hover sm:p-8"
              >
                <p className="flex-1 text-sm leading-relaxed text-brand-navy sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-brand-navy/10 pt-5 sm:mt-8 sm:pt-6">
                  <p className="font-black text-brand-navy">{t.name}</p>
                  <p className="text-sm text-brand-navy/60">{t.role}</p>
                  <p className="mt-2 text-xs font-black uppercase tracking-wider text-brand-red sm:text-sm">
                    {t.result}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
