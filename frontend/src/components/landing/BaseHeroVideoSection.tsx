"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LogoLink } from "@/components/landing/Logo";
import type { BaseHubHero } from "@/lib/landing/types";
import { revealUp, slideDown, springReveal, staggerContainer } from "@/lib/motion";

const HERO_VIDEO = "/videos/hero-bg.mp4";

const headlineStagger: typeof staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
};

const starStagger: typeof staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.75 },
  },
};

const starPop = {
  hidden: { scale: 0, opacity: 0, rotate: -20 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 520, damping: 18 },
  },
};

type BaseHeroVideoSectionProps = {
  content: BaseHubHero;
  videoSrc?: string;
};

export default function BaseHeroVideoSection({
  content,
  videoSrc = HERO_VIDEO,
}: BaseHeroVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [email, setEmail] = useState("");
  const subheadlineLines = content.subheadline.split("\n");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = content.ctaHref ?? "#audit";
  };

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden text-brand-white">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // @ts-expect-error fetchPriority is valid on video elements
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,23,42,0.92)_0%,rgba(11,23,42,0.78)_45%,rgba(11,23,42,0.94)_100%),radial-gradient(ellipse_at_center,transparent_0%,rgba(11,23,42,0.5)_100%)]"
        aria-hidden
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: -80, y: 80 }}
        animate={{ opacity: 0.9, x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-[28rem] rotate-[-8deg] rounded-[3rem] bg-brand-red sm:-bottom-32 sm:-left-8 sm:h-72 sm:w-[36rem]"
      />

      <motion.header
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="relative z-20 grid w-full grid-cols-[1fr_auto_1fr] items-center px-6 py-5 sm:px-10 sm:py-6 lg:px-14"
      >
        <button
          type="button"
          className="hub-hero-menu flex items-center gap-3 justify-self-start text-brand-white transition-opacity hover:opacity-80"
          aria-label="Open menu"
        >
          <Image
            src="/icons/menu.svg"
            alt=""
            width={26}
            height={23}
            className="h-[23px] w-[26px]"
          />
          <span>Menu</span>
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springReveal, delay: 0.15 }}
          className="justify-self-center"
        >
          <LogoLink
            variant="full"
            className="h-9 w-auto max-w-[10.5rem] sm:h-10 lg:h-11 lg:max-w-[12rem]"
          />
        </motion.div>

        <motion.a
          href={content.ctaHref ?? "#audit"}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springReveal, delay: 0.2 }}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(153,27,27,0.45)" }}
          whileTap={{ scale: 0.98 }}
          className="hub-hero-nav-cta justify-self-end rounded-full bg-brand-red px-5 py-2.5 text-brand-white sm:px-6 sm:py-3"
        >
          {content.navCtaLabel}
        </motion.a>
      </motion.header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-0 sm:px-10 lg:px-14">
        <motion.div
          variants={headlineStagger}
          initial="hidden"
          animate="visible"
          className="hub-hero-center"
        >
          <div className="w-full text-center">
            <h1 className="hub-hero-headline text-brand-white">
              <motion.span variants={revealUp} className="hub-hero-headline-line">
                {content.headlineBefore}
                <span className="hub-hero-amount">{content.headlineAmount}</span>
                {content.headlineMiddle.trimEnd()}
              </motion.span>
              <motion.span variants={revealUp} className="hub-hero-headline-line">
                {content.headlineAfter}
              </motion.span>
            </h1>

            <motion.p
              variants={revealUp}
              className="hub-hero-subheadline mx-auto mt-3 max-w-[30rem] text-brand-white sm:mt-3.5"
            >
              {subheadlineLines.map((line, index) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...springReveal, delay: 0.5 }}
            className="w-full"
          >
            <div className="flex h-[50px] items-center rounded-full border border-white/10 bg-[rgba(0,0,0,0.42)] p-1 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-[2px] sm:h-[52px]">
              <label className="flex min-w-0 flex-1 items-center gap-2 pl-4 pr-1 sm:gap-2.5 sm:pl-5">
                <span className="shrink-0 text-base leading-none sm:text-[17px]" aria-hidden>
                  👋
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.emailPlaceholder}
                  required
                  className="hub-hero-email w-full min-w-0 bg-transparent text-brand-white focus:outline-none"
                />
              </label>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="hub-hero-submit flex h-full shrink-0 items-center gap-2 rounded-full bg-brand-red px-5 text-brand-white sm:gap-2.5 sm:px-6"
              >
                {content.submitLabel}
                <Image
                  src="/icons/arrow-doit.svg"
                  alt=""
                  width={14}
                  height={23}
                  className="h-[16px] w-[9px] sm:h-[18px] sm:w-[10px]"
                />
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            variants={starStagger}
            initial="hidden"
            animate="visible"
            className="flex w-full items-center justify-between gap-3 px-1 sm:gap-4"
          >
            <motion.p
              variants={revealUp}
              className="hub-hero-trust min-w-0 flex-1 text-left text-brand-white/90"
            >
              {content.disclaimer}
            </motion.p>

            <motion.div
              variants={starStagger}
              className="flex shrink-0 items-center gap-[6px]"
              aria-label="4.8 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span key={i} variants={starPop}>
                  <Image
                    src="/icons/star.svg"
                    alt=""
                    width={18}
                    height={17}
                    className="h-[15px] w-[16px] sm:h-[17px] sm:w-[18px]"
                  />
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={revealUp}
              className="hub-hero-trust min-w-0 flex-1 text-right text-brand-white/90"
            >
              {content.rating}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
