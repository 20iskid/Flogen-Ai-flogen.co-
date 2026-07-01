"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type HubPageCtaProps = {
  kicker?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  href: string;
  label: string;
  dark?: boolean;
};

export default function HubPageCta({
  kicker,
  title,
  titleAccent,
  description,
  href,
  label,
  dark = true,
}: HubPageCtaProps) {
  const isMailto = href.startsWith("mailto:");

  const className =
    "mt-10 inline-flex items-center gap-2 rounded-full bg-[#991B1B] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[6px_6px_0px_rgba(153,27,27,0.4)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(153,27,27,0.4)]";

  return (
    <section
      className={`relative overflow-hidden px-4 py-20 text-center md:px-8 md:py-28 lg:px-12 ${
        dark ? "bg-[#0B172A]" : "bg-[#FDFAFA]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(#991B1B 1px, transparent 1px), linear-gradient(90deg, #991B1B 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        {kicker ? (
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#991B1B]">
            {kicker}
          </p>
        ) : null}
        <h2
          className={`mt-4 text-3xl font-black uppercase leading-[0.92] tracking-tighter md:text-5xl ${
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
        {description ? (
          <p className={`mx-auto mt-5 max-w-xl text-lg ${dark ? "text-gray-400" : "text-gray-600"}`}>
            {description}
          </p>
        ) : null}
        {isMailto ? (
          <a href={href} className={className}>
            {label}
            <Image src="/icons/arrow-doit.svg" alt="" width={10} height={18} className="h-4 w-2 brightness-0 invert" />
          </a>
        ) : (
          <Link href={href} className={className}>
            {label}
            <Image src="/icons/arrow-doit.svg" alt="" width={10} height={18} className="h-4 w-2 brightness-0 invert" />
          </Link>
        )}
      </motion.div>
    </section>
  );
}
