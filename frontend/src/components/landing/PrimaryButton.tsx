"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { heartbeat, snapHover } from "@/lib/motion";

type PrimaryButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  dark?: boolean;
  fullWidth?: boolean;
};

export default function PrimaryButton({
  children,
  className = "",
  href = "#",
  dark = false,
  fullWidth = true,
}: PrimaryButtonProps) {
  const base =
    "inline-flex min-h-[3.25rem] items-center justify-center rounded-sm px-5 py-4 text-center text-xs font-black uppercase leading-tight tracking-[0.14em] transition-shadow duration-150 sm:min-h-0 sm:px-8 sm:py-5 sm:text-sm sm:tracking-widest";

  const width = fullWidth ? "w-full sm:w-auto" : "w-auto";

  const colors = dark
    ? "bg-brand-navy text-brand-white hover:shadow-brand-hover"
    : "bg-brand-red text-brand-white hover:shadow-brand-hover";

  return (
    <motion.div
      animate={heartbeat}
      className={`${width} ${fullWidth ? "max-w-full sm:inline-block" : "inline-block"}`}
    >
      <motion.a
        href={href}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={snapHover}
        className={`${base} ${width} ${colors} ${className}`}
      >
        {children}
      </motion.a>
    </motion.div>
  );
}
