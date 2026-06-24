"use client";

import { motion } from "framer-motion";
import { slideDown } from "@/lib/motion";
import type { LandingContent } from "@/lib/landing/types";

type WarningBarProps = {
  content: LandingContent["warningBar"];
};

export default function WarningBar({ content }: WarningBarProps) {
  return (
    <motion.div
      variants={slideDown}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-brand-red px-3 py-2.5 text-center text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-brand-white sm:px-4 sm:text-xs sm:tracking-[0.18em] md:text-sm md:tracking-[0.2em]"
    >
      <span className="block sm:inline">{content.message}</span>{" "}
      <span className="underline underline-offset-4">{content.cta}</span>
    </motion.div>
  );
}
