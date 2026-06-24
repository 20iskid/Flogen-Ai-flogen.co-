"use client";

import { motion } from "framer-motion";
import { slideDown } from "@/lib/motion";

export default function WarningBar() {
  return (
    <motion.div
      variants={slideDown}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-brand-red px-3 py-2.5 text-center text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-brand-white sm:px-4 sm:text-xs sm:tracking-[0.18em] md:text-sm md:tracking-[0.2em]"
    >
      <span className="block sm:inline">
        Limited capacity — we only onboard 3 new clients per quarter.
      </span>{" "}
      <span className="underline underline-offset-4">Book your audit now.</span>
    </motion.div>
  );
}
