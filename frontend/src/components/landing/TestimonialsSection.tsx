"use client";

import { motion } from "framer-motion";
import { fadeSlideUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { LandingContent } from "@/lib/landing/types";

type TestimonialsSectionProps = {
  content: LandingContent["testimonials"];
};

export default function TestimonialsSection({
  content,
}: TestimonialsSectionProps) {
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
            {content.title}
          </motion.h2>
          <motion.p
            variants={fadeSlideUp}
            className="mt-3 max-w-2xl text-base text-brand-navy/70 sm:mt-4 sm:text-lg"
          >
            {content.subtitle}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {content.items.map((t) => (
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
