"use client";

import { motion } from "framer-motion";
import { BarChart3, Cpu, Layers, Zap, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const scrollViewport = { once: true, margin: "-100px" as const };

const gridStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type BentoCardProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  large?: boolean;
  className?: string;
};

function BentoCard({
  icon: Icon,
  title,
  body,
  large = false,
  className = "",
}: BentoCardProps) {
  return (
    <motion.div variants={cardReveal} className={className}>
      <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#991B1B]/50 hover:bg-white/[0.05] md:p-10">
        <span
          className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#991B1B]/20 blur-3xl transition-colors duration-500 group-hover:bg-[#991B1B]/40"
          aria-hidden
        />

        <div className="relative z-10">
          <Icon
            className={`text-[#991B1B] ${large ? "h-12 w-12" : "h-9 w-9"}`}
            strokeWidth={1.75}
            aria-hidden
          />
          <h3
            className={`text-white ${large ? "mb-4 mt-8 text-3xl font-black" : "mt-6 text-2xl font-bold"}`}
          >
            {title}
          </h3>
          <p className={`text-gray-400 ${large ? "text-lg leading-relaxed" : "mt-3 text-base leading-relaxed"}`}>
            {body}
          </p>
        </div>
      </article>
    </motion.div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="bg-[#0B172A] px-4 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={cardReveal}
        >
          <span className="mb-6 inline-block rounded-full bg-[#991B1B]/20 px-4 py-1.5 text-sm font-black uppercase tracking-widest text-[#991B1B]">
            The arsenal
          </span>
          <h2 className="max-w-4xl text-5xl font-black uppercase tracking-tighter text-[#FDFAFA] md:text-7xl">
            We don&apos;t just build websites. We build revenue engines.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={gridStagger}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3"
        >
          <BentoCard
            icon={Cpu}
            title="Custom System Autonomy"
            body="Blah blah blah placeholder text about building bespoke internal tools and software."
            large
            className="md:col-span-2 md:row-span-1"
          />
          <BentoCard
            icon={Zap}
            title="Conversion Workflows"
            body="Placeholder text about automating follow-ups, intake, and the workflows that turn leads into closed revenue."
            className="md:col-span-1 md:row-span-1"
          />
          <BentoCard
            icon={BarChart3}
            title="Data-Driven Scaling"
            body="Placeholder text about dashboards, KPIs, and systems that show you exactly what is working."
            className="md:col-span-1 md:row-span-1"
          />
          <BentoCard
            icon={Layers}
            title="Elite UI/UX Architecture"
            body="Blah blah blah placeholder text about high-converting front-end design."
            large
            className="md:col-span-2 md:row-span-1"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={cardReveal}
          className="mt-12 flex justify-center md:mt-16"
        >
          <Link
            href="/our-accomplishments"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#FDFAFA]/20 px-8 py-4 text-sm font-black uppercase tracking-widest text-[#FDFAFA] transition-colors hover:border-[#991B1B] hover:text-[#991B1B]"
          >
            Explore our system
            <Image src="/icons/arrow-doit.svg" alt="" width={10} height={18} className="h-4 w-2 brightness-0 invert" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
