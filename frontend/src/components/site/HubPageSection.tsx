"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HubPageSectionProps = {
  children: ReactNode;
  dark?: boolean;
  kicker?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  id?: string;
  className?: string;
  innerClassName?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function HubPageSection({
  children,
  dark = false,
  kicker,
  title,
  titleAccent,
  description,
  id,
  className = "",
  innerClassName = "max-w-6xl",
}: HubPageSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-4 py-16 md:px-8 md:py-24 lg:px-12 ${
        dark ? "bg-[#0B172A] text-[#FDFAFA]" : "bg-[#FDFAFA] text-[#0B172A]"
      } ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${dark ? "opacity-[0.05]" : "opacity-[0.035]"}`}
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(${dark ? "#FDFAFA" : "#0B172A"} 1px, transparent 1px),
            linear-gradient(90deg, ${dark ? "#FDFAFA" : "#0B172A"} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {dark ? (
        <div
          className="pointer-events-none absolute -right-1/4 top-0 h-80 w-80 rounded-full bg-[#991B1B]/15 blur-[100px]"
          aria-hidden
        />
      ) : null}

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className={`relative z-10 mx-auto ${innerClassName}`}
      >
        {(kicker || title) && (
          <header className="mb-12 md:mb-16">
            {kicker ? (
              <span
                className={`mb-4 inline-block -rotate-1 rounded-sm border-2 px-3 py-1.5 text-xs font-black uppercase tracking-[0.25em] shadow-[3px_3px_0px_#991B1B] ${
                  dark
                    ? "border-[#991B1B] bg-[#991B1B] text-[#FDFAFA]"
                    : "border-[#0B172A] bg-[#0B172A] text-[#FDFAFA]"
                }`}
              >
                {kicker}
              </span>
            ) : null}
            {title ? (
              <h2
                className={`max-w-4xl text-3xl font-black uppercase leading-[0.92] tracking-tighter md:text-5xl lg:text-6xl ${
                  dark ? "text-[#FDFAFA]" : "text-[#0B172A]"
                }`}
              >
                {title}
                {titleAccent ? (
                  <>
                    <br />
                    <span className="text-[#991B1B]">{titleAccent}</span>
                  </>
                ) : null}
              </h2>
            ) : null}
            {description ? (
              <p
                className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
}
