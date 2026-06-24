"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { heartbeat, snapHover } from "@/lib/motion";

type PrimaryButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  dark?: boolean;
};

export default function PrimaryButton({
  children,
  className = "",
  href = "#",
  dark = false,
}: PrimaryButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-10 py-5 text-sm font-black uppercase tracking-widest transition-shadow duration-150";

  const colors = dark
    ? "bg-brand-navy text-brand-white hover:shadow-brand-hover"
    : "bg-brand-red text-brand-white hover:shadow-brand-hover";

  return (
    <motion.div animate={heartbeat} className="inline-block">
      <motion.a
        href={href}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={snapHover}
        className={`${base} ${colors} ${className}`}
      >
        {children}
      </motion.a>
    </motion.div>
  );
}
