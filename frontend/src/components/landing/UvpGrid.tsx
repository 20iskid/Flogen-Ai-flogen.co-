"use client";

import { motion } from "framer-motion";
import { Bot, Gauge, Layers, Shield, Zap } from "lucide-react";
import { fadeSlideUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { LucideIcon } from "lucide-react";

type Uvp = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const uvps: Uvp[] = [
  {
    icon: Bot,
    title: "AI That Actually Works",
    description:
      "No chatbot theater. Production-grade agents wired into your CRM, ops, and revenue stack.",
  },
  {
    icon: Zap,
    title: "Speed To Cash",
    description:
      "90-day deployment sprints. We ship fast because every week of delay costs you money.",
  },
  {
    icon: Gauge,
    title: "ROI Or Refund",
    description:
      "We benchmark before we build. If we don't hit agreed KPIs, you don't pay. Period.",
  },
  {
    icon: Layers,
    title: "Full-Stack Ownership",
    description:
      "Frontend, backend, integrations, infra — one team, one throat to choke, zero finger-pointing.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "SOC-ready architecture, encrypted pipelines, and audit trails baked in from day one.",
  },
];

export default function UvpGrid() {
  return (
    <section className="bg-brand-navy px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeSlideUp}
            className="text-3xl font-black tracking-tighter text-brand-white md:text-5xl"
          >
            Why founders choose Flogen
            <br />
            <span className="text-brand-red">over every other agency.</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {uvps.map((uvp) => (
              <motion.article
                key={uvp.title}
                variants={fadeSlideUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
                className="group rounded-sm border border-white/10 bg-white/[0.03] p-8 transition-shadow duration-150 hover:shadow-brand-card"
              >
                <uvp.icon className="h-8 w-8 text-brand-red" strokeWidth={2.5} />
                <h3 className="mt-5 text-xl font-black tracking-tight text-brand-white">
                  {uvp.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-white/70">
                  {uvp.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
