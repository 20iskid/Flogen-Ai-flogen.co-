"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
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

// Restrained two-tier emphasis so key phrases read against muted body copy
// without looking like a highlighter exploded:
//   *text*  -> solid bold navy (the phrases that should carry weight)
//   ~text~  -> brand red, used sparingly for the sharpest gut-punches
function renderRich(text: string, keyPrefix: string) {
  const tokens = text.split(/(~[^~]+~|\*[^*]+\*)/g).filter(Boolean);

  return tokens.map((token, i) => {
    const key = `${keyPrefix}-${i}`;

    if (token.startsWith("~") && token.endsWith("~")) {
      return (
        <span key={key} className="font-semibold text-brand-red">
          {token.slice(1, -1)}
        </span>
      );
    }

    if (token.startsWith("*") && token.endsWith("*")) {
      return (
        <strong key={key} className="font-semibold text-brand-navy">
          {token.slice(1, -1)}
        </strong>
      );
    }

    return <span key={key}>{token}</span>;
  });
}

export default function PasSection({ content }: PasSectionProps) {
  return (
    <section className="section-x section-y bg-brand-white">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2
            variants={revealUp}
            className="text-2xl font-black tracking-tighter text-brand-navy sm:text-3xl md:text-5xl"
          >
            {content.title}
          </motion.h2>

          {content.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              variants={revealUp}
              className={`text-lg leading-[1.7] text-brand-navy/70 sm:text-xl ${index === 0 ? "mt-6 sm:mt-7" : "mt-5"}`}
            >
              {renderRich(paragraph, `para-${index}`)}
            </motion.p>
          ))}

          {content.leadIn && (
            <motion.p
              variants={revealUp}
              className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy/40 sm:mt-14"
            >
              {content.leadIn}
              <span className="h-px flex-1 bg-brand-navy/10" />
            </motion.p>
          )}

          <motion.ul variants={staggerContainer} className="mt-6 space-y-px overflow-hidden rounded-2xl border border-brand-navy/10 sm:mt-7">
            {content.painPoints.map((point, index) => (
              <motion.li
                key={point}
                variants={revealUp}
                className="flex items-start gap-4 bg-brand-navy/[0.02] px-5 py-4 text-base leading-relaxed text-brand-navy/80 transition-colors hover:bg-brand-red/[0.04] sm:px-6 sm:py-5 sm:text-lg"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                <span>{renderRich(point, `pain-${index}`)}</span>
              </motion.li>
            ))}
          </motion.ul>

          {content.closing && (
            <motion.p
              variants={revealUp}
              className="mt-12 text-xl font-semibold leading-snug tracking-tight text-brand-navy sm:mt-14 sm:text-2xl"
            >
              {renderRich(content.closing, "closing")}
            </motion.p>
          )}

          {content.bridge && (
            <motion.p
              variants={revealUp}
              className="mt-8 text-base font-bold leading-relaxed text-brand-navy sm:mt-10 sm:text-lg"
            >
              {renderRich(content.bridge, "bridge")}
            </motion.p>
          )}

          {content.solutions && content.solutions.length > 0 && (
            <motion.ul variants={staggerContainer} className="mt-6 space-y-5 sm:mt-8">
              {content.solutions.map((point, index) => (
                <motion.li
                  key={point}
                  variants={checkPop}
                  className="flex items-start gap-3 text-sm leading-relaxed text-brand-navy sm:gap-4 sm:text-base"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-brand-red sm:h-7 sm:w-7">
                    <Check className="h-3.5 w-3.5 stroke-[3] text-brand-white sm:h-4 sm:w-4" />
                  </span>
                  <span>{renderRich(point, `sol-${index}`)}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}
