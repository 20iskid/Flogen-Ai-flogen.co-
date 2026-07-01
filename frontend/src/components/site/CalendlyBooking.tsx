"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import { getCalendlyEmbedUrl } from "@/lib/site/calendly";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const FLOAT_BADGES = [
  { label: "30 min", rotate: "-rotate-6", position: "left-4 top-8 md:left-8 md:top-12" },
  { label: "NDA", rotate: "rotate-3", position: "right-6 top-16 md:right-12 md:top-20" },
  { label: "Free", rotate: "-rotate-2", position: "left-8 bottom-20 md:left-16 md:bottom-24" },
] as const;

const CALL_POINTS = [
  { icon: Calendar, text: "Pick a slot that works — no back-and-forth emails." },
  { icon: Clock, text: "30 minutes. We map your leaks and quantify the damage." },
  { icon: Shield, text: "NDA-covered. Zero obligation to proceed." },
] as const;

export default function CalendlyBooking() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return;

    const embedUrl = getCalendlyEmbedUrl();

    const initWidget = () => {
      parent.innerHTML = "";
      window.Calendly?.initInlineWidget({
        url: embedUrl,
        parentElement: parent,
      });
    };

    if (window.Calendly) {
      initWidget();
      return;
    }

    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (existing) {
      existing.addEventListener("load", initWidget);
      return () => existing.removeEventListener("load", initWidget);
    }

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0B172A] px-4 py-20 md:px-8 md:py-28 lg:px-12">
      {/* Grid + glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(#FDFAFA 1px, transparent 1px),
            linear-gradient(90deg, #FDFAFA 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#991B1B]/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-[#991B1B]/10 blur-[100px]"
        aria-hidden
      />

      {/* Diagonal accent stripe */}
      <div
        className="pointer-events-none absolute -right-20 top-0 h-full w-24 skew-x-[-12deg] bg-[#991B1B]/15 md:w-32"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#991B1B]/40 bg-[#991B1B]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#991B1B]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#991B1B] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#991B1B]" />
            </span>
            Live availability
          </span>
          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-tighter text-[#FDFAFA] md:text-6xl">
            Book your audit
            <br />
            <span className="text-[#991B1B]">with our CEO.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
            No sales pitch. No generic deck. Just a straight conversation about
            what your broken systems are costing you — and how we&apos;d fix it.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-12 lg:items-start">
          {/* Left — call prep */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span
              className="absolute -left-2 -top-4 inline-block -rotate-6 rounded-sm border-2 border-[#991B1B] bg-[#991B1B] px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_#0B172A]"
              aria-hidden
            >
              01
            </span>

            <div className="rounded-3xl border-2 border-[#FDFAFA]/10 bg-[#0B172A] p-8 shadow-[8px_8px_0px_#991B1B] md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#991B1B]">
                What happens on the call
              </p>
              <ul className="mt-8 space-y-6">
                {CALL_POINTS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#FDFAFA]/15 bg-[#FDFAFA]/5">
                      <Icon className="h-5 w-5 text-[#991B1B]" strokeWidth={2} />
                    </span>
                    <span className="pt-1.5 text-base leading-relaxed text-gray-300">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-[#FDFAFA]/10 pt-6 text-sm italic text-gray-500">
                *The audit is free. The leads you are losing are not.
              </p>
            </div>
          </motion.div>

          {/* Right — Calendly frame */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {FLOAT_BADGES.map((badge, i) => (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                className={`pointer-events-none absolute z-20 hidden rounded-sm border-2 border-[#0B172A] bg-[#FDFAFA] px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#0B172A] shadow-[3px_3px_0px_#991B1B] sm:block ${badge.rotate} ${badge.position}`}
                aria-hidden
              >
                {badge.label}
              </motion.span>
            ))}

            {/* Brutalist outer frame */}
            <div className="relative rounded-[2rem] border-2 border-[#991B1B] bg-[#991B1B] p-2 shadow-[12px_12px_0px_rgba(153,27,27,0.45)] md:p-3">
              <div className="overflow-hidden rounded-[1.65rem] border-2 border-[#0B172A] bg-[#FDFAFA]">
                {/* Window chrome */}
                <div className="flex items-center gap-2 border-b-2 border-[#0B172A]/10 bg-[#FDFAFA] px-5 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#991B1B]/80" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0B172A]/20" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0B172A]/20" aria-hidden />
                  <span className="ml-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#0B172A]/40">
                    Pick your slot
                  </span>
                </div>

                <div
                  ref={containerRef}
                  className="calendly-audit-embed min-h-[620px] w-full md:min-h-[680px]"
                />
              </div>
            </div>

            {/* Corner bracket accents */}
            <span
              className="pointer-events-none absolute -bottom-3 -left-3 h-8 w-8 border-b-4 border-l-4 border-[#FDFAFA]/30"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -right-3 -top-3 h-8 w-8 border-r-4 border-t-4 border-[#FDFAFA]/30"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
