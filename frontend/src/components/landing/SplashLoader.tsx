"use client";

import { motion } from "framer-motion";
import FlogenLogo from "@/components/landing/FlogenLogo";

export default function SplashLoader() {
  return (
    <motion.div
      key="splash"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0B172A]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <FlogenLogo
        layoutId="flogen-logo"
        intro
        className="h-auto w-64 md:w-96"
      />
    </motion.div>
  );
}
