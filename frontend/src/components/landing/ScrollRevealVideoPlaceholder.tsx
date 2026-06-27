"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/hero-bg.mp4";

// Words framing the video box — outer margins so they don't compete with it.
const WORDS = [
  // ── top strip ──
  { label: "Promised",  top: "3%",  left: "3%",   opacity: 0.26, speed: 0.85, size: "1.55rem", rotate: -3   },
  { label: "Wasted",    top: "6%",  left: "24%",  opacity: 0.19, speed: 1.1,  size: "1.15rem", rotate:  2   },
  { label: "Burned",    top: "2%",  left: "48%",  opacity: 0.23, speed: 0.72, size: "1.7rem",  rotate: -1.5 },
  { label: "Ghosted",   top: "5%",  left: "74%",  opacity: 0.2,  speed: 1.0,  size: "1.3rem",  rotate:  3   },
  { label: "Ignored",   top: "3%",  left: "88%",  opacity: 0.17, speed: 0.9,  size: "1.45rem", rotate: -2   },
  // ── left margin ──
  { label: "Cheated",   top: "28%", left: "1%",   opacity: 0.22, speed: 1.15, size: "1.4rem",  rotate:  1.5 },
  { label: "Drained",   top: "48%", left: "0.5%", opacity: 0.19, speed: 0.8,  size: "1.65rem", rotate: -2.5 },
  { label: "Misled",    top: "68%", left: "1.5%", opacity: 0.24, speed: 1.05, size: "1.2rem",  rotate:  2   },
  // ── right margin ──
  { label: "Forgotten", top: "26%", left: "85%",  opacity: 0.2,  speed: 0.9,  size: "1.5rem",  rotate: -1.5 },
  { label: "Betrayed",  top: "46%", left: "86%",  opacity: 0.17, speed: 1.2,  size: "1.2rem",  rotate:  3   },
  { label: "Trapped",   top: "67%", left: "84%",  opacity: 0.23, speed: 0.78, size: "1.6rem",  rotate: -2   },
  // ── bottom strip ──
  { label: "Drowning",  top: "88%", left: "4%",   opacity: 0.21, speed: 1.1,  size: "1.3rem",  rotate:  1.5 },
  { label: "Bleeding",  top: "91%", left: "28%",  opacity: 0.18, speed: 0.82, size: "1.75rem", rotate: -1   },
  { label: "Stagnant",  top: "89%", left: "56%",  opacity: 0.2,  speed: 1.0,  size: "1.15rem", rotate:  2.5 },
  { label: "Exhausted", top: "92%", left: "80%",  opacity: 0.22, speed: 0.88, size: "1.45rem", rotate: -2   },
] as const;

export default function ScrollRevealVideoPlaceholder() {
  const sectionRef  = useRef<HTMLElement>(null);
  const shellRef    = useRef<HTMLDivElement>(null);
  const playRef     = useRef<HTMLButtonElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setVideoOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Pause / play modal video on open/close
  useEffect(() => {
    const v = modalVideoRef.current;
    if (!v) return;
    if (videoOpen) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [videoOpen]);

  useEffect(() => {
    let active  = true;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!active || !sectionRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const wordEls = gsap.utils.toArray<HTMLElement>("[data-word]");
        const n       = wordEls.length;

        if (wordEls.length) {
          // Three-phase scrubbed timeline:
          // Enter  0 → 0.38  (staggered rise + fade in)
          // Plateau 0.38 → 0.52 (visible)
          // Exit   0.52 → 0.80  (staggered drift up + fade out — all gone by 80% so
          //                       words clear the screen before the section exits)
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end:   "bottom top",
              scrub: 1.25,
              invalidateOnRefresh: true,
              onToggle: ({ isActive }) => {
                wordEls.forEach((el) => {
                  el.style.willChange = isActive ? "transform, opacity" : "auto";
                });
              },
            },
          });

          wordEls.forEach((el, i) => {
            const speed   = Number(el.dataset.speed   ?? "1");
            const opacity = Number(el.dataset.opacity ?? "0.2");

            // Enter stagger: index 0 at t=0, last at t=0.36
            const enterAt = (i / n) * 0.36;
            // Exit stagger: reversed — first word exits last (nice cascade)
            // All exits complete by t ≈ 0.80
            const exitAt  = 0.50 + ((n - 1 - i) / n) * 0.22;

            tl.fromTo(
              el,
              { y: 38 * speed, autoAlpha: 0, scale: 0.88 },
              { y: 0, autoAlpha: opacity, scale: 1, ease: "power2.out", duration: 0.18 },
              enterAt,
            );

            tl.to(
              el,
              { y: -36 * speed, autoAlpha: 0, ease: "power2.in", duration: 0.18 },
              exitAt,
            );
          });
        }

        // Video box cinematic pop-in
        if (shellRef.current) {
          gsap.fromTo(
            shellRef.current,
            { y: 72, scale: 0.88, opacity: 0, rotateX: 18, transformPerspective: 1000 },
            {
              y: 0, scale: 1, opacity: 1, rotateX: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        // Play button gentle pulse
        if (playRef.current) {
          gsap.to(playRef.current, {
            scale: 1.07,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      }, sectionRef);

      cleanup = () => ctx.revert();
    })();

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#FDFAFA] pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-12"
        aria-label="Video presentation"
      >
        {/* Background word layer */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          {WORDS.map((w, i) => (
            <span
              key={`${w.label}-${i}`}
              data-word
              data-speed={w.speed}
              data-opacity={w.opacity}
              className="absolute select-none whitespace-nowrap text-[#991B1B]"
              style={{
                top:           w.top,
                left:          w.left,
                fontSize:      w.size,
                opacity:       0,
                transform:     `rotate(${w.rotate}deg)`,
                fontFamily:    "var(--font-tiny5), monospace",
                letterSpacing: "0.06em",
              }}
            >
              {w.label}
            </span>
          ))}
        </div>

        {/* Video placeholder box */}
        <div className="section-x relative z-10">
          <div className="mx-auto max-w-5xl [perspective:1000px] [transform-style:preserve-3d]">
            <div ref={shellRef} className="origin-center transform-gpu will-change-transform">
              {/* Translucent glass box — no blue border */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/50 bg-white/20 backdrop-blur-sm">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14)_0%,transparent_65%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/10"
                  aria-hidden
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    ref={playRef}
                    type="button"
                    aria-label="Play video"
                    onClick={() => setVideoOpen(true)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-[#991B1B] text-[#FDFAFA] shadow-brand-card sm:h-24 sm:w-24 md:h-28 md:w-28"
                  >
                    <Play
                      className="ml-1 h-9 w-9 fill-current sm:h-10 sm:w-10 md:h-12 md:w-12"
                      strokeWidth={0}
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video modal ────────────────────────────────────────────── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            key="video-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-md"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              key="video-shell"
              initial={{ scale: 0.82, opacity: 0, y: 48 }}
              animate={{ scale: 1,    opacity: 1, y: 0  }}
              exit={{    scale: 0.88, opacity: 0, y: 24 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative mx-4 w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full bg-black">
                <video
                  ref={modalVideoRef}
                  src={VIDEO_SRC}
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                />
              </div>

              {/* Close button */}
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setVideoOpen(false)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
