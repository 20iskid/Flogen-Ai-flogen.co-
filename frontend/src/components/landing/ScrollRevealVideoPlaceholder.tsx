"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { forwardRef, useEffect, useRef, useState } from "react";

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

// Exposes the <section> so BaseLandingPage can drive the cross-section star drift.
const ScrollRevealVideoPlaceholder = forwardRef<HTMLElement>(
  function ScrollRevealVideoPlaceholder(_, fwdRef) {
  const sectionRef  = useRef<HTMLElement>(null);
  const shellRef    = useRef<HTMLDivElement>(null);
  const playRef     = useRef<HTMLButtonElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  // Mirror the internal ref out to the forwarded ref.
  const setRef: React.RefCallback<HTMLElement> = (el) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
    if (typeof fwdRef === "function") fwdRef(el);
    else if (fwdRef) (fwdRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

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
        // Animate the INNER element (rise + word→star crossfade).  The outer
        // [data-word] parent is left untouched here — BaseLandingPage's coordinator
        // owns the parent's transform so it can carry the * down into the
        // testimonials section without fighting this timeline.
        const innerEls = gsap.utils.toArray<HTMLElement>("[data-word-inner]", sectionRef.current);
        const n        = innerEls.length;

        if (innerEls.length) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end:   "bottom top",
              scrub: 1.6,
              invalidateOnRefresh: true,
              onToggle: ({ isActive }) => {
                innerEls.forEach((el) => {
                  el.style.willChange = isActive ? "transform, opacity" : "auto";
                });
              },
            },
          });

          innerEls.forEach((inner, i) => {
            const speed   = Number(inner.dataset.speed   ?? "1");
            const opacity = Number(inner.dataset.opacity ?? "0.2");
            const rotate  = Number(inner.dataset.rotate  ?? "0");

            const labelEl = inner.querySelector<HTMLElement>("[data-word-label]");
            const starEl  = inner.querySelector<HTMLElement>("[data-word-star]");

            // GSAP owns the base rotation so the inline transform never collides.
            gsap.set(inner,  { rotation: rotate, transformOrigin: "center center" });
            gsap.set(labelEl, { autoAlpha: 1 });
            // xPercent/yPercent keep the * centered on the word's anchor point
            // (GSAP owns the transform, so no inline translate to collide with).
            gsap.set(starEl,  { autoAlpha: 0, scale: 1.45, rotation: 10, xPercent: -50, yPercent: -50 });

            // ENTER: a soft, slightly longer rise + fade to the word's faint opacity.
            const enterAt = (i / n) * 0.18;
            tl.fromTo(
              inner,
              { y: 30 * speed, autoAlpha: 0, scale: 0.94 },
              { y: 0, autoAlpha: opacity, scale: 1, ease: "power2.out", duration: 0.2 },
              enterAt,
            );

            // CONVERT: word label gently dissolves while the asterisk eases in with
            // a soft settle (back.out, low overshoot).  A long crossfade keeps it calm.
            // Finishes well before ~0.4 (when the cross-section travel begins) so the
            // elements are already * — not words — while they drift out.
            const convertAt = 0.22 + (i / n) * 0.05;
            if (labelEl) {
              tl.to(labelEl, { autoAlpha: 0, duration: 0.12, ease: "sine.inOut" }, convertAt);
            }
            if (starEl) {
              tl.to(
                starEl,
                { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.16, ease: "back.out(1.3)" },
                convertAt,
              );
            }
          });
        }

        // Video box — scroll-scrubbed 3D reveal as you scroll down
        if (shellRef.current) {
          gsap.fromTo(
            shellRef.current,
            {
              y: 96,
              scale: 0.8,
              opacity: 0.4,
              rotateX: 45,
              transformPerspective: 1000,
              boxShadow: "0 24px 48px -12px rgba(11, 23, 42, 0.25)",
            },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              rotateX: 0,
              boxShadow: "0 48px 96px -16px rgba(11, 23, 42, 0.55)",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "start end",
                end: "center center",
                scrub: 1.2,
                invalidateOnRefresh: true,
                onToggle: ({ isActive }) => {
                  if (shellRef.current) {
                    shellRef.current.style.willChange = isActive
                      ? "transform, opacity"
                      : "auto";
                  }
                },
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
        ref={setRef}
        className="relative z-0 -mt-12 min-h-[72vh] bg-[#FDFAFA] pb-16 pt-8 sm:-mt-16 sm:pb-20 sm:pt-10 md:-mt-20 md:pb-24 md:pt-12"
        aria-label="Video presentation"
      >
        {/*
          Background word layer.  overflow is NOT clipped on this section, so the
          asterisks can drift past the bottom edge into the testimonials section.
          Structure per word:
            [data-word]        ← outer: position only; coordinator drifts this down
              [data-word-inner] ← rotation + enter rise + word→star crossfade
                [data-word-label] the word
                [data-word-star]  the *
        */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          {WORDS.map((w, i) => (
            <span
              key={`${w.label}-${i}`}
              data-word
              className="absolute"
              style={{ top: w.top, left: w.left }}
            >
              <span
                data-word-inner
                data-speed={w.speed}
                data-opacity={w.opacity}
                data-rotate={w.rotate}
                className="relative block select-none whitespace-nowrap text-[#991B1B]"
                style={{
                  fontSize:      w.size,
                  opacity:       0,
                  fontFamily:    "var(--font-tiny5), monospace",
                  letterSpacing: "0.06em",
                }}
              >
                <span data-word-label className="block">
                  {w.label}
                </span>
                <span
                  data-word-star
                  className="absolute left-1/2 top-1/2"
                  style={{
                    fontSize:   `calc(${w.size} * 1.1)`,
                    lineHeight: 1,
                    textShadow: "0 0 14px rgba(153,27,27,0.22)",
                  }}
                >
                  *
                </span>
              </span>
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
});

export default ScrollRevealVideoPlaceholder;
