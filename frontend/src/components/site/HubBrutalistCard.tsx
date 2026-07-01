"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type HubBrutalistCardProps = {
  number?: string;
  title: string;
  body: ReactNode;
  icon?: LucideIcon;
  className?: string;
  dark?: boolean;
};

export default function HubBrutalistCard({
  number,
  title,
  body,
  icon: Icon,
  className = "",
  dark = false,
}: HubBrutalistCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`group relative overflow-hidden rounded-2xl border-2 p-6 shadow-[5px_5px_0px_#0B172A] md:p-8 ${
        dark
          ? "border-[#FDFAFA]/15 bg-white/[0.03] shadow-[5px_5px_0px_#991B1B]"
          : "border-[#0B172A] bg-white"
      } ${className}`}
    >
      <span
        className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#991B1B]/10 blur-2xl transition-colors group-hover:bg-[#991B1B]/20"
        aria-hidden
      />
      <div className="relative z-10 flex items-start justify-between gap-4">
        {number ? (
          <span
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border-2 text-sm font-black ${
              dark
                ? "border-[#991B1B] bg-[#991B1B] text-[#FDFAFA]"
                : "border-[#0B172A] bg-[#0B172A] text-[#FDFAFA]"
            }`}
          >
            {number}
          </span>
        ) : null}
        {Icon ? (
          <Icon className="h-8 w-8 shrink-0 text-[#991B1B]" strokeWidth={1.75} aria-hidden />
        ) : null}
      </div>
      <h3
        className={`relative z-10 mt-4 text-xl font-black uppercase tracking-tight ${
          dark ? "text-[#FDFAFA]" : "text-[#0B172A]"
        }`}
      >
        {title}
      </h3>
      <div
        className={`relative z-10 mt-3 text-base leading-relaxed ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {body}
      </div>
    </motion.article>
  );
}
