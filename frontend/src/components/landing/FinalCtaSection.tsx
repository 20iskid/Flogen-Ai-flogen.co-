"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PrimaryButton from "@/components/landing/PrimaryButton";
import { revealUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function FinalCtaSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <motion.section
      ref={ref}
      style={{ scale }}
      className="origin-center bg-brand-red px-6 py-24 md:py-32"
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
          className="text-4xl font-black leading-[0.95] tracking-tighter text-brand-white md:text-6xl"
        >
          Stop bleeding revenue.
          <br />
          Start building the machine.
        </motion.h2>

        <motion.p
          variants={revealUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-brand-white/85"
        >
          Book your free growth audit now. We&apos;ll map your biggest leaks,
          show you exactly what to fix, and tell you straight if we&apos;re not
          the right fit.
        </motion.p>

        <motion.div variants={revealUp} className="mt-10">
          <PrimaryButton href="#audit" dark>
            Book my free audit — now
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
