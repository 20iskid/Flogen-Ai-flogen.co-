"use client";

import { motion } from "framer-motion";
import FlogenLogo from "@/components/landing/FlogenLogo";

export default function SplashLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0B172A]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        layoutId="flogen-brand-logo"
        className="flex w-64 items-center justify-center md:w-96"
        initial={{ filter: "blur(10px)", opacity: 0, scale: 0.9 }}
        animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <FlogenLogo className="h-auto w-full" />
      </motion.div>
    </motion.div>
  );
}
