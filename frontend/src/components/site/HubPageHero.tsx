"use client";

import { motion } from "framer-motion";

type HubPageHeroProps = {
  kicker: string;
  title: string;
  description?: string;
  dark?: boolean;
};

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HubPageHero({
  kicker,
  title,
  description,
  dark = true,
}: HubPageHeroProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={reveal}
      className={`px-4 py-16 md:px-8 md:py-24 lg:px-12 ${
        dark ? "bg-[#0B172A] text-[#FDFAFA]" : "bg-[#FDFAFA] text-[#0B172A]"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <span
          className={`mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-black uppercase tracking-widest ${
            dark
              ? "bg-[#991B1B]/20 text-[#991B1B]"
              : "bg-[#991B1B]/10 text-[#991B1B]"
          }`}
        >
          {kicker}
        </span>
        <h1
          className={`text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl ${
            dark ? "text-[#FDFAFA]" : "text-[#0B172A]"
          }`}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed md:text-xl ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </motion.section>
  );
}
