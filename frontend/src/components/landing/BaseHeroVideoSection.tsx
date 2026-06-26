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
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden text-brand-white">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // @ts-expect-error fetchPriority is valid on video elements
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        aria-hidden
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-0 bg-zinc-950/80"
        aria-hidden
      />
      <div className="absolute inset-0 z-0 bg-black/50" aria-hidden />

      <motion.header
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex w-full items-center justify-between px-6 py-5 sm:px-10 sm:py-6 lg:px-14"
      >
        <button
          type="button"
          className="hub-hero-menu relative z-10 flex items-center gap-2 font-bold text-[#FDFAFA] transition-opacity hover:opacity-80"
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
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <LogoLink
            variant="full"
            className="h-14 w-auto max-w-[15rem] sm:h-16 sm:max-w-[17rem] lg:h-[4.5rem] lg:max-w-[19rem]"
          />
        </motion.div>

        <motion.a
          href={content.ctaHref ?? "#audit"}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springReveal, delay: 0.2 }}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(153,27,27,0.45)" }}
          whileTap={{ scale: 0.98 }}
          className="hub-hero-nav-cta relative z-10 shrink-0 rounded-full bg-[#991B1B] px-5 py-2.5 text-brand-white sm:px-6 sm:py-3"
        >
          {content.navCtaLabel}
        </motion.a>
      </motion.header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10">
        <motion.div
          variants={headlineStagger}
          initial="hidden"
          animate="visible"
          className="hub-hero-center gap-8"
        >
          <div className="mx-auto w-full max-w-[90vw] text-center md:max-w-6xl">
            <h1 className="hub-hero-headline mx-auto w-full max-w-[90vw] font-archivo text-4xl font-black uppercase leading-[1.1] tracking-tighter text-brand-white sm:text-5xl md:max-w-6xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
              <motion.span variants={revealUp} className="block">
                <span className="whitespace-normal md:whitespace-nowrap">
                  {content.headlineBefore}
                  <span className="hub-hero-amount text-[1.2em] leading-[1.1] tracking-tighter">
                    {content.headlineAmount}
                  </span>
                  {content.headlineMiddle}
                  {content.headlineNoWrap ?? ""}
                </span>
                <br className="hidden md:block" />
                {content.headlineLine2}
              </motion.span>
            </h1>

            <motion.p
              variants={revealUp}
              className="hub-hero-subheadline mx-auto mt-4 max-w-3xl text-xl font-normal leading-relaxed text-gray-200 md:mt-6 md:text-2xl"
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
            className="w-full max-w-3xl"
          >
            <div className="flex min-h-[56px] items-stretch overflow-hidden rounded-full border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-[#991B1B]/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.2)] backdrop-blur-md md:min-h-[60px]">
              <label className="flex min-w-0 flex-1 items-center gap-3 py-3 pl-5 pr-2 md:gap-3.5 md:py-4 md:pl-6">
                <span className="shrink-0 text-lg leading-none md:text-xl" aria-hidden>
                  👋
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.emailPlaceholder}
                  required
                  className="hub-hero-email w-full min-w-0 bg-transparent px-1 text-lg font-normal text-white placeholder:text-gray-400 focus:outline-none"
                />
              </label>
              <motion.button
                type="submit"
                whileHover={{ filter: "brightness(1.08)" }}
                whileTap={{ filter: "brightness(0.95)" }}
                className="hub-hero-submit flex shrink-0 items-center justify-center gap-2.5 self-stretch bg-[#991B1B] px-6 font-archivo text-xl font-extrabold uppercase text-brand-white md:gap-3 md:px-8 md:text-2xl"
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
            className="flex w-full max-w-3xl items-center justify-between gap-4 px-1"
          >
            <motion.p
              variants={revealUp}
              className="min-w-0 text-left text-sm text-gray-400"
            >
              {content.disclaimer}
            </motion.p>

            <motion.div
              variants={revealUp}
              className="flex shrink-0 items-center gap-1.5 sm:gap-2"
            >
              <motion.div
                variants={starStagger}
                className="flex items-center gap-[5px]"
                aria-hidden
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
              <span className="hub-hero-trust text-brand-white/90">
                {content.rating}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
