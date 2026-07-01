"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";

const perks = [
  "Full revenue leak analysis across your current stack",
  "Custom automation roadmap — not a generic PDF",
  "ROI benchmarks before we build anything",
  "NDA-covered. Zero obligation to proceed.",
] as const;

export default function AuditPageContent() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = `mailto:hello@flogen.co?subject=Free%20Audit%20Request&body=Email:%20${encodeURIComponent(email)}`;
  };

  return (
    <HubPageLayout>
      <HubPageHero
        kicker="Free audit"
        title="See exactly what your broken systems are costing you."
        description="Book a free audit. We map your leaks, quantify the damage, and show you the system we'd build to fix it — in 30 days or less."
      />

      <section className="bg-[#FDFAFA] px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#0B172A] md:text-4xl">
              What you get
            </h2>
            <ul className="mt-8 space-y-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[#991B1B]">
                    <Check className="h-3.5 w-3.5 stroke-[3] text-white" />
                  </span>
                  <span className="text-base leading-relaxed text-[#0B172A]/80 md:text-lg">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-gray-500">
              *The audit is free. The leads you are losing are not.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-3xl border-2 border-[#0B172A] bg-white p-8 shadow-[6px_6px_0px_#0B172A] md:p-10"
          >
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#0B172A]">
              Book your audit
            </h3>
            <p className="mt-2 text-gray-600">
              Enter your email and we&apos;ll reach out within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="hub-hero-email w-full rounded-xl border-2 border-[#0B172A]/15 bg-[#FDFAFA] px-4 py-4 text-base text-[#0B172A] placeholder:text-gray-400 focus:border-[#991B1B] focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#991B1B] px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:brightness-110"
              >
                See what this is costing you
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </form>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-gray-500">
              <Check className="h-3.5 w-3.5 text-[#991B1B]" aria-hidden />
              It&apos;s completely free
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0B172A] px-4 py-16 text-center md:px-8 md:py-20">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#991B1B]">
          Prefer to browse first?
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black uppercase tracking-tighter text-[#FDFAFA] md:text-4xl">
          Pick your industry and see how we fix it.
        </h2>
        <a
          href="/#industries"
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#FDFAFA]/20 px-8 py-4 text-sm font-black uppercase tracking-widest text-[#FDFAFA] transition-colors hover:border-[#991B1B] hover:text-[#991B1B]"
        >
          View all industries
          <Image src="/icons/arrow-doit.svg" alt="" width={10} height={18} className="h-4 w-2" />
        </a>
      </section>
    </HubPageLayout>
  );
}
