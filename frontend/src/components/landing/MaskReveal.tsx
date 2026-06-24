"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { revealUp } from "@/lib/motion";

type MaskRevealProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
};

export default function MaskReveal({
  children,
  variants = revealUp,
  className = "",
}: MaskRevealProps) {
  return (
    <motion.div variants={variants} className={`overflow-hidden ${className}`}>
      {children}
    </motion.div>
  );
}
