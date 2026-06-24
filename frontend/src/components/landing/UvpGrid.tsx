"use client";

import { motion } from "framer-motion";
import { Bot, Gauge, Layers, Shield, Zap } from "lucide-react";
import { fadeSlideUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { LandingContent, UvpIcon } from "@/lib/landing/types";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<UvpIcon, LucideIcon> = {
  bot: Bot,
  zap: Zap,
  gauge: Gauge,
  layers: Layers,
  shield: Shield,
};

type UvpGridProps = {
  content: LandingContent["uvp"];
};

export default function UvpGrid({ content }: UvpGridProps) {
  return (
    <section className="section-x section-y bg-brand-navy">
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
            <br className="hidden sm:block" />
            <span className="text-brand-red"> {content.titleAccent}</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {content.items.map((uvp) => {
              const Icon = iconMap[uvp.icon];
              return (
                <motion.article
                  key={uvp.title}
                  variants={fadeSlideUp}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                  className="group rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-shadow duration-150 hover:shadow-brand-card sm:p-8"
                >
                  <Icon className="h-7 w-7 text-brand-red sm:h-8 sm:w-8" strokeWidth={2.5} />
                  <h3 className="mt-4 text-lg font-black tracking-tight text-brand-white sm:mt-5 sm:text-xl">
                    {uvp.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-white/70 sm:mt-3">
                    {uvp.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
