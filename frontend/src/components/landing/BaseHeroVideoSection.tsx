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
    transition: { staggerChildren: 0.08, delayChildren: 0.35 },
  },
};

const starStagger: typeof staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.9 },
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
        className="relative z-20 grid w-full grid-cols-[1fr_auto_1fr] items-center px-5 py-5 sm:px-8 sm:py-6 md:px-12"
      >
        <button
          type="button"
          className="flex items-center gap-3 justify-self-start font-archivo text-sm text-brand-white transition-opacity hover:opacity-80 sm:text-base"
          aria-label="Open menu"
        >
          <Image
            src="/icons/menu.svg"
            alt=""
            width={26}
            height={23}
            className="h-[18px] w-auto sm:h-[23px]"
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
            className="h-8 w-auto max-w-[9rem] sm:h-10 sm:max-w-[11rem] md:h-11 md:max-w-[12rem]"
          />
        </motion.div>

        <motion.a
          href={content.ctaHref ?? "#audit"}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springReveal, delay: 0.2 }}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(153,27,27,0.45)" }}
          whileTap={{ scale: 0.98 }}
          className="justify-self-end rounded-full bg-brand-red px-4 py-2.5 text-center font-archivo text-[10px] font-extrabold leading-tight tracking-wide text-brand-white sm:px-5 sm:py-3 sm:text-xs md:px-6 md:text-sm"
        >
          {content.navCtaLabel}
        </motion.a>
      </motion.header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-10 pt-4 sm:px-8 sm:pb-14 md:px-12">
        <motion.div
          variants={headlineStagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          <h1 className="font-archivo text-[1.65rem] font-normal leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            <motion.span variants={revealUp} className="inline">
              {content.headlineBefore}
            </motion.span>
            <motion.span
              variants={revealUp}
              className="font-tiny5 text-[2rem] text-brand-red sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem]"
            >
              {content.headlineAmount}
            </motion.span>
            <motion.span variants={revealUp} className="inline">
              {content.headlineMiddle}
            </motion.span>
            <motion.span variants={revealUp} className="inline">
              {content.headlineAfter}
            </motion.span>
          </h1>

          <motion.p
            variants={revealUp}
            className="mx-auto mt-5 max-w-3xl font-tiktok text-sm font-normal leading-relaxed text-brand-white/95 sm:mt-7 sm:text-base md:text-lg"
          >
            {content.subheadline}
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springReveal, delay: 0.55 }}
          className="mx-auto mt-8 w-full max-w-2xl sm:mt-10"
        >
          <div className="flex items-stretch overflow-hidden rounded-full border border-white/10 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <label className="flex min-w-0 flex-1 items-center gap-2 px-4 py-3 sm:gap-3 sm:px-5 sm:py-3.5">
              <span className="shrink-0 text-lg sm:text-xl" aria-hidden>
                👋
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.emailPlaceholder}
                required
                className="w-full bg-transparent font-snpro text-xs font-light text-brand-white placeholder:text-brand-white/55 focus:outline-none sm:text-sm"
              />
            </label>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex shrink-0 items-center gap-2 rounded-full bg-brand-red px-5 py-3 font-jockey text-sm tracking-wide text-brand-white sm:px-6 sm:py-3.5 sm:text-base"
            >
              {content.submitLabel}
              <Image
                src="/icons/arrow-doit.svg"
                alt=""
                width={14}
                height={23}
                className="h-4 w-auto sm:h-[18px]"
              />
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          variants={starStagger}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center gap-3 text-center sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-left"
        >
          <motion.p
            variants={revealUp}
            className="font-snpro text-[10px] font-light leading-snug text-brand-white/90 sm:max-w-[11rem] sm:text-xs"
          >
            {content.disclaimer}
          </motion.p>

          <motion.div
            variants={starStagger}
            className="flex items-center gap-1.5 sm:gap-2"
            aria-label="4.8 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span key={i} variants={starPop}>
                <Image
                  src="/icons/star.svg"
                  alt=""
                  width={18}
                  height={17}
                  className="h-4 w-auto sm:h-[17px]"
                />
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            variants={revealUp}
            className="font-snpro text-[10px] font-light text-brand-white/90 sm:max-w-[9rem] sm:text-xs"
          >
            {content.rating}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
