"use client";

import { motion } from "framer-motion";

type HubPageHeroProps = {
  kicker: string;
  title: string;
  /** Red accent line — renders below title in brand red */
  titleAccent?: string;
  description?: string;
  dark?: boolean;
  /** Floating brutalist badges — defaults to three themed labels if omitted */
  badges?: string[];
};

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const badgePop = {
  hidden: { opacity: 0, scale: 0.75, rotate: -8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: i % 2 === 0 ? -4 : 5,
    transition: {
      type: "spring" as const,
      stiffness: 280,
      damping: 18,
      delay: 0.35 + i * 0.12,
    },
  }),
};

const BADGE_SPOTS = [
  { className: "right-4 top-10 md:right-16 md:top-14", rotate: "rotate-3" },
  { className: "left-6 top-1/3 md:left-20", rotate: "-rotate-6" },
  { className: "bottom-16 right-8 md:bottom-20 md:right-24", rotate: "-rotate-3" },
] as const;

const DEFAULT_BADGES = ["Flogen", "Systems", "ROI"];

export default function HubPageHero({
  kicker,
  title,
  titleAccent,
  description,
  dark = true,
  badges = DEFAULT_BADGES,
}: HubPageHeroProps) {
  const watermark = kicker.replace(/\s+/g, " ").toUpperCase();

  return (
    <section
      className={`relative overflow-hidden px-4 py-20 md:px-8 md:py-28 lg:px-12 ${
        dark ? "bg-[#0B172A] text-[#FDFAFA]" : "bg-[#FDFAFA] text-[#0B172A]"
      }`}
    >
      {/* Grid */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          dark ? "opacity-[0.06]" : "opacity-[0.04]"
        }`}
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(${dark ? "#FDFAFA" : "#0B172A"} 1px, transparent 1px),
            linear-gradient(90deg, ${dark ? "#FDFAFA" : "#0B172A"} 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Giant watermark */}
      <p
        className={`pointer-events-none absolute -left-4 top-1/2 max-w-none -translate-y-1/2 select-none font-black uppercase leading-none tracking-tighter ${
          dark
            ? "text-[clamp(5rem,22vw,14rem)] text-[#FDFAFA]/[0.03]"
            : "text-[clamp(5rem,22vw,14rem)] text-[#0B172A]/[0.04]"
        }`}
        aria-hidden
      >
        {watermark}
      </p>

      {/* Glow + diagonal stripe */}
      <div
        className={`pointer-events-none absolute -right-1/4 top-0 h-[420px] w-[420px] rounded-full blur-[110px] ${
          dark ? "bg-[#991B1B]/25" : "bg-[#991B1B]/10"
        }`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -left-16 bottom-0 h-full w-20 skew-x-[-14deg] md:w-28 ${
          dark ? "bg-[#991B1B]/12" : "bg-[#991B1B]/8"
        }`}
        aria-hidden
      />

      {/* Floating badges */}
      {badges.slice(0, 3).map((label, i) => (
        <motion.span
          key={label}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={badgePop}
          className={`pointer-events-none absolute z-20 hidden rounded-sm border-2 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-[3px_3px_0px_#991B1B] sm:block ${
            BADGE_SPOTS[i]?.rotate ?? ""
          } ${BADGE_SPOTS[i]?.className ?? ""} ${
            dark
              ? "border-[#0B172A] bg-[#FDFAFA] text-[#0B172A]"
              : "border-[#0B172A] bg-[#0B172A] text-[#FDFAFA]"
          }`}
          aria-hidden
        >
          {label}
        </motion.span>
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl"
      >
        {/* Kicker — brutalist slam badge */}
        <motion.div variants={rise} className="relative inline-block">
          <span
            className={`inline-block -rotate-2 rounded-sm border-2 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] shadow-[4px_4px_0px_#991B1B] md:text-sm ${
              dark
                ? "border-[#991B1B] bg-[#991B1B] text-[#FDFAFA]"
                : "border-[#0B172A] bg-[#0B172A] text-[#FDFAFA]"
            }`}
          >
            {kicker}
          </span>
        </motion.div>

        {/* Title block — framed */}
        <motion.div
          variants={rise}
          className={`relative mt-10 md:mt-12 ${
            dark ? "" : ""
          }`}
        >
          <div
            className={`absolute -left-3 top-0 hidden h-full w-1 md:block ${
              dark ? "bg-[#991B1B]" : "bg-[#991B1B]"
            }`}
            aria-hidden
          />
          <h1
            className={`pl-0 text-[clamp(2.25rem,6.5vw,4.5rem)] font-black uppercase leading-[0.92] tracking-tighter md:pl-6 md:text-[clamp(2.75rem,7vw,5.5rem)] lg:text-7xl ${
              dark ? "text-[#FDFAFA]" : "text-[#0B172A]"
            }`}
          >
            {title}
            {titleAccent ? (
              <>
                <br />
                <span className="text-[#991B1B]">{titleAccent}</span>
              </>
            ) : null}
          </h1>
        </motion.div>

        {description ? (
          <motion.p
            variants={rise}
            className={`mt-8 max-w-2xl border-l-4 pl-5 text-base leading-relaxed md:mt-10 md:pl-6 md:text-xl ${
              dark
                ? "border-[#991B1B]/60 text-gray-400"
                : "border-[#991B1B]/40 text-gray-600"
            }`}
          >
            {description}
          </motion.p>
        ) : null}

        {/* Bottom brutalist rule */}
        <motion.div
          variants={rise}
          className="mt-12 flex items-center gap-4 md:mt-16"
          aria-hidden
        >
          <span
            className={`h-0.5 flex-1 max-w-[120px] ${
              dark ? "bg-[#991B1B]" : "bg-[#991B1B]/70"
            }`}
          />
          <span
            className={`h-2 w-2 rotate-45 border-2 ${
              dark ? "border-[#FDFAFA]/30" : "border-[#0B172A]/20"
            }`}
          />
          <span
            className={`h-px flex-1 ${
              dark ? "bg-[#FDFAFA]/10" : "bg-[#0B172A]/10"
            }`}
          />
        </motion.div>
      </motion.div>

      {/* Corner brackets */}
      <span
        className={`pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-2 border-t-2 md:left-8 md:top-8 ${
          dark ? "border-[#FDFAFA]/15" : "border-[#0B172A]/10"
        }`}
        aria-hidden
      />
      <span
        className={`pointer-events-none absolute bottom-4 right-4 h-10 w-10 border-b-2 border-r-2 md:bottom-8 md:right-8 ${
          dark ? "border-[#991B1B]/40" : "border-[#991B1B]/30"
        }`}
        aria-hidden
      />
    </section>
  );
}
