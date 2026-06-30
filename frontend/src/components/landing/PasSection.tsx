"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  checkPop,
  revealUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import type { LandingContent } from "@/lib/landing/types";

type PasSectionProps = {
  content: LandingContent["pas"];
};

const scrollViewport = { once: true, margin: "-100px" as const };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const gridStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ctaPulse = {
  scale: [1, 1.04, 1],
  boxShadow: [
    "0 12px 40px rgba(153,27,27,0.35)",
    "0 20px 56px rgba(153,27,27,0.55)",
    "0 12px 40px rgba(153,27,27,0.35)",
  ],
};

//   *text*  -> bold navy
//   ~text~  -> accent red gut-punch
function renderRich(text: string, keyPrefix: string) {
  const tokens = text.split(/(~[^~]+~|\*[^*]+\*)/g).filter(Boolean);

  return tokens.map((token, i) => {
    const key = `${keyPrefix}-${i}`;

    if (token.startsWith("~") && token.endsWith("~")) {
      return (
        <span key={key} className="font-bold text-[#991B1B]">
          {token.slice(1, -1)}
        </span>
      );
    }

    if (token.startsWith("*") && token.endsWith("*")) {
      return (
        <strong key={key} className="font-bold text-[#0B172A]">
          {token.slice(1, -1)}
        </strong>
      );
    }

    return <span key={key}>{token}</span>;
  });
}

function renderClimaxRich(text: string, keyPrefix: string) {
  const tokens = text.split(/(~[^~]+~|\*[^*]+\*)/g).filter(Boolean);

  return tokens.map((token, i) => {
    const key = `${keyPrefix}-${i}`;

    if (token.startsWith("~") && token.endsWith("~")) {
      return (
        <span key={key} className="font-black text-[#991B1B]">
          {token.slice(1, -1)}
        </span>
      );
    }

    if (token.startsWith("*") && token.endsWith("*")) {
      return (
        <strong key={key} className="font-black text-white">
          {token.slice(1, -1)}
        </strong>
      );
    }

    return <span key={key}>{token}</span>;
  });
}

export default function PasSection({ content }: PasSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#FDFAFA] px-4 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="relative mx-auto max-w-6xl">
        {/* Brutalist header & intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeUp}
        >
          <span className="mb-8 inline-block rounded-full bg-[#991B1B]/10 px-4 py-1.5 text-sm font-black uppercase tracking-widest text-[#991B1B]">
            The reality check
          </span>

          <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-tighter text-[#0B172A] md:text-7xl lg:text-8xl">
            {content.title}
          </h2>

          <div className="mt-8 max-w-4xl space-y-6">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className="text-xl leading-relaxed text-gray-600 md:text-2xl"
              >
                {renderRich(paragraph, `para-${index}`)}
              </p>
            ))}
          </div>

          {content.leadIn && (
            <p className="mt-14 text-sm font-black uppercase tracking-[0.22em] text-[#991B1B] md:text-base">
              {content.leadIn}
            </p>
          )}
        </motion.div>

        {/* Pain point grid */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={gridStagger}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {content.painPoints.map((point, index) => (
            <motion.li
              key={point}
              variants={cardReveal}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] md:p-10"
            >
              <span
                className="pointer-events-none absolute -right-4 -top-4 z-0 select-none text-9xl font-black text-gray-50/80 transition-transform duration-500 group-hover:scale-110"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="relative z-10 text-lg font-medium leading-relaxed text-[#0B172A] md:text-xl">
                {renderRich(point, `pain-${index}`)}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Dark climax box */}
        {(content.closing || content.cta) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeUp}
            className="relative mx-auto mt-24 flex w-full max-w-5xl flex-col items-center overflow-hidden rounded-[2.5rem] bg-[#0B172A] p-10 text-center md:p-16"
          >
            <span
              className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#991B1B]/20 blur-3xl"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#991B1B]/10 blur-3xl"
              aria-hidden
            />

            {content.closing && (
              <p className="relative z-10 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
                {renderClimaxRich(content.closing, "closing")}
              </p>
            )}

            {content.cta && (
              <div className="relative z-10 mt-10 flex flex-col items-center md:mt-12">
                <motion.a
                  href={content.cta.href ?? "#audit"}
                  animate={ctaPulse}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#991B1B] px-8 py-5 text-base font-black uppercase tracking-[0.12em] text-white md:px-12 md:py-6 md:text-lg md:tracking-widest"
                >
                  <span>{content.cta.label}</span>
                  <ArrowRight className="h-5 w-5 shrink-0 md:h-6 md:w-6" aria-hidden />
                </motion.a>

                {content.cta.subtext && (
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-gray-400">
                    <Check className="h-3.5 w-3.5 text-[#991B1B]" aria-hidden />
                    {content.cta.subtext}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* Niche pages: bridge + solutions */}
        {content.bridge && (
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeUp}
            className="mx-auto mt-20 max-w-4xl text-lg font-bold leading-relaxed text-[#0B172A] md:mt-24 md:text-xl"
          >
            {renderRich(content.bridge, "bridge")}
          </motion.p>
        )}

        {content.solutions && content.solutions.length > 0 && (
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mx-auto mt-8 max-w-4xl space-y-5 md:mt-10"
          >
            {content.solutions.map((point, index) => (
              <motion.li
                key={point}
                variants={checkPop}
                className="flex items-start gap-3 text-base leading-relaxed text-[#0B172A] sm:gap-4 sm:text-lg"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-[#991B1B]">
                  <Check className="h-4 w-4 stroke-[3] text-white" />
                </span>
                <span>{renderRich(point, `sol-${index}`)}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}
