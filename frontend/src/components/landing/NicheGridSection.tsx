"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeSlideUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { getNicheList } from "@/lib/landing/niches";
type NicheGridSectionProps = {
  content: {
    title: string;
    subtitle: string;
  };
};

export default function NicheGridSection({ content }: NicheGridSectionProps) {
  const niches = getNicheList();

  return (
    <section
      id="industries"
      className="section-x section-y scroll-mt-24 bg-brand-navy"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeSlideUp}
            className="text-2xl font-black tracking-tighter text-brand-white sm:text-3xl md:text-5xl"
          >
            {content.title}
          </motion.h2>
          <motion.p
            variants={fadeSlideUp}
            className="mt-3 max-w-3xl text-base text-brand-white/70 sm:mt-4 sm:text-lg"
          >
            {content.subtitle}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
          >
            {niches.map((niche) => (
              <motion.div key={niche.slug} variants={fadeSlideUp}>
                <Link
                  href={niche.href}
                  className="group flex h-full items-center justify-between rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-brand-card sm:p-8"
                >
                  <div>
                    <h3 className="text-lg font-black tracking-tight text-brand-white sm:text-xl">
                      {niche.name}
                    </h3>
                    <p className="mt-2 text-sm text-brand-white/50">
                      View {niche.name.toLowerCase()} landing page
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-brand-red transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
