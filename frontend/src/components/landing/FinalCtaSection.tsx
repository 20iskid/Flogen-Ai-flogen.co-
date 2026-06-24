"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/components/landing/PrimaryButton";
import { revealUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { LandingContent } from "@/lib/landing/types";

type FinalCtaSectionProps = {
  content: LandingContent["finalCta"];
};

export default function FinalCtaSection({ content }: FinalCtaSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [enableScale, setEnableScale] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setEnableScale(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, enableScale ? 1.04 : 1]);

  return (
    <motion.section
      ref={ref}
      style={{ scale }}
      className="origin-center bg-brand-red section-x py-16 sm:py-24 md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.h2
          variants={revealUp}
          className="text-3xl font-black leading-[0.95] tracking-tighter text-brand-white sm:text-4xl md:text-6xl"
        >
          {content.title}
          <br />
          {content.titleLine2}
        </motion.h2>

        <motion.p
          variants={revealUp}
          className="mx-auto mt-5 max-w-2xl text-base text-brand-white/85 sm:mt-6 sm:text-lg"
        >
          {content.description}
        </motion.p>

        <motion.div variants={revealUp} className="mt-8 sm:mt-10">
          <PrimaryButton href={content.ctaHref ?? "#audit"} dark>
            {content.ctaLabel}
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
