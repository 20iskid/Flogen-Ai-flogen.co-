"use client";

import { motion } from "framer-motion";
import { slideDown } from "@/lib/motion";

export default function WarningBar() {
  return (
    <motion.div
      variants={slideDown}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-brand-red px-4 py-2.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-white md:text-sm"
    >
      Limited capacity — we only onboard 3 new clients per quarter.{" "}
      <span className="underline underline-offset-4">Book your audit now.</span>
    </motion.div>
  );
}
