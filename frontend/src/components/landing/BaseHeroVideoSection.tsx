"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sora } from "next/font/google";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import FlogenLogo from "@/components/landing/FlogenLogo";
import MenuOverlay from "@/components/landing/MenuOverlay";
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

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
});

type BaseHeroVideoSectionProps = {
  content: BaseHubHero;
  videoSrc?: string;
  splashComplete?: boolean;
};

export default function BaseHeroVideoSection({
  content,
  videoSrc = HERO_VIDEO,
  splashComplete = true,
}: BaseHeroVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [email, setEmail] = useState("");
  const [isAmountHovered, setIsAmountHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const subheadlineLines = content.subheadline.split("\n");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    };

    const onReady = () => tryPlay();

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.load();
    tryPlay();

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
    };
  }, [videoSrc]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = content.ctaHref ?? "#audit";
  };

  return (
    <section className="relative z-20 isolate flex h-[100svh] min-h-[100svh] w-full max-h-[100dvh] flex-col overflow-hidden text-brand-white supports-[height:100dvh]:h-[100dvh] supports-[height:100dvh]:min-h-[100dvh]">
      <MenuOverlay isOpen={menuOpen} onClose={closeMenu} />

      {/* Solid fallback + video layer — never rely on -z-10 bleeding to page bg */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0B172A]" aria-hidden>
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          // @ts-expect-error fetchPriority is valid on video elements
          fetchPriority="high"
          className="absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-zinc-950/70" aria-hidden />
      <div className="absolute inset-0 z-[1] bg-black/40" aria-hidden />

      <motion.header
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex w-full items-center justify-between px-3 py-4 sm:px-4 sm:py-5 md:px-8 md:py-6"
      >
        <div className="flex flex-1 items-center justify-start">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="hub-hero-menu flex items-center gap-2 font-bold text-[#FDFAFA] transition-opacity hover:opacity-80"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Image
              src="/icons/menu.svg"
              alt=""
              width={26}
              height={23}
              className="h-[20px] w-[22px] sm:h-[23px] sm:w-[26px]"
            />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>

        <div className="flex flex-none items-center justify-center">
          {splashComplete ? (
            <Link
              href="/"
              className="inline-flex max-w-full shrink-0 justify-center"
            >
              <motion.div
                layoutId="flogen-brand-logo"
                className="z-50 flex w-32 items-center justify-center md:w-40"
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 28,
                }}
              >
                <FlogenLogo className="h-auto w-full" />
              </motion.div>
            </Link>
          ) : null}
        </div>

        <div className="flex flex-1 items-center justify-end">
          <motion.a
            href={content.ctaHref ?? "#audit"}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springReveal, delay: 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(153,27,27,0.45)" }}
            whileTap={{ scale: 0.98 }}
            className="hub-hero-nav-cta shrink-0 rounded-full bg-[#991B1B] px-3 py-2 text-[12px] text-brand-white sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="sm:hidden">Audit</span>
            <span className="hidden sm:inline">{content.navCtaLabel}</span>
          </motion.a>
        </div>
      </motion.header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-8 sm:py-10">
        <motion.div
          variants={headlineStagger}
          initial="hidden"
          animate="visible"
          className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8"
        >
          <h1
            className={`hub-hero-headline ${sora.className} flex w-full flex-col items-center text-center text-[1.9rem] font-black leading-[1.08] tracking-tight text-brand-white sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]`}
          >
            <motion.span
              variants={revealUp}
              className="flex w-full flex-col items-center gap-0 text-center"
            >
              <span className="block w-full text-center md:whitespace-nowrap">
                {content.headlineBefore}
                <span
                  className="hub-hero-amount relative mx-[0.14em] inline-flex cursor-default items-center justify-center text-[1.35em] leading-[1.1] tracking-tighter"
                  onMouseEnter={() => setIsAmountHovered(true)}
                  onMouseLeave={() => setIsAmountHovered(false)}
                >
                  <span className="invisible">{content.headlineAmount}</span>
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
                      isAmountHovered
                        ? "opacity-30 line-through decoration-[0.08em] decoration-current"
                        : "opacity-100"
                    }`}
                  >
                    {content.headlineAmount}
                  </span>
                  <span
                    className={`absolute bottom-full left-1/2 mb-[0.08em] -translate-x-1/2 whitespace-nowrap text-[0.26em] font-semibold uppercase tracking-[0.08em] text-white/85 transition-opacity duration-200 ${
                      isAmountHovered
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    Lost Revenue!
                  </span>
                </span>
                {content.headlineMiddle.trimStart()}
                {content.headlineNoWrap ?? ""}
              </span>
              <span className="block w-full text-center">{content.headlineLine2}</span>
            </motion.span>
          </h1>

          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8">
            <motion.p
              variants={revealUp}
              className="hub-hero-subheadline w-full text-center font-archivo text-lg font-normal leading-relaxed text-gray-200 sm:text-2xl md:text-3xl"
            >
              {subheadlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.p>

            <div className="flex w-full flex-col items-center gap-3">
              <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...springReveal, delay: 0.5 }}
            className="w-full"
          >
            <div className="flex min-h-[56px] flex-col items-stretch overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-[#991B1B]/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.2)] backdrop-blur-md sm:min-h-[60px] sm:flex-row sm:rounded-full">
              <label className="flex min-w-0 flex-1 items-center gap-3 py-3 pl-4 pr-3 sm:gap-3.5 sm:py-4 sm:pl-6">
                <span className="shrink-0 text-lg leading-none md:text-xl" aria-hidden>
                  👋
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.emailPlaceholder}
                  required
                  className="hub-hero-email w-full min-w-0 bg-transparent px-1 text-base font-normal text-white placeholder:text-gray-400 focus:outline-none sm:text-lg"
                />
              </label>
              <motion.button
                type="submit"
                whileHover={{ filter: "brightness(1.08)" }}
                whileTap={{ filter: "brightness(0.95)" }}
                className="hub-hero-submit flex h-12 shrink-0 items-center justify-center gap-2 self-stretch bg-[#991B1B] px-4 font-archivo text-lg font-extrabold uppercase text-brand-white sm:h-auto sm:gap-3 sm:px-8 sm:text-2xl"
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
            className="-mt-1 flex w-full flex-col items-start gap-3 px-1 py-2 sm:-mt-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-2.5"
          >
            <motion.p
              variants={revealUp}
              className="min-w-0 text-left text-sm leading-snug text-gray-400 sm:text-[15px]"
            >
              {content.disclaimer}
            </motion.p>

            <motion.a
              href="#stories"
              variants={revealUp}
              className="flex shrink-0 cursor-pointer items-center gap-2 transition-opacity duration-200 hover:opacity-75 sm:gap-2.5"
            >
              <motion.div
                variants={starStagger}
                className="flex items-center gap-1 sm:gap-1.5"
                aria-hidden
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span key={i} variants={starPop}>
                    <Image
                      src="/icons/star.svg"
                      alt=""
                      width={20}
                      height={19}
                      className="h-[17px] w-[18px] sm:h-5 sm:w-5"
                    />
                  </motion.span>
                ))}
              </motion.div>
              <span className="hub-hero-trust text-sm text-brand-white/90 sm:text-base">
                {content.rating}
              </span>
              </motion.a>
            </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
