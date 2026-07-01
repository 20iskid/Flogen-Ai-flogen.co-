"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import CalendlyBooking from "@/components/site/CalendlyBooking";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";

const perks = [
  "Full revenue leak analysis across your current stack",
  "Custom automation roadmap — not a generic PDF",
  "ROI benchmarks before we build anything",
  "NDA-covered. Zero obligation to proceed.",
] as const;

export default function AuditPageContent() {
  return (
    <HubPageLayout>
      <HubPageHero
        kicker="Free audit"
        title="See exactly what your broken systems"
        titleAccent="are costing you."
        description="Book a 30-minute call with our CEO. We map your leaks, quantify the damage, and show you the system we'd build to fix it — in 30 days or less."
        badges={["Free", "30 min", "NDA"]}
      />

      <section className="bg-[#FDFAFA] px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black uppercase tracking-tighter text-[#0B172A] md:text-4xl">
            What you get
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-start gap-3 rounded-2xl border-2 border-[#0B172A]/10 bg-white p-6 shadow-[4px_4px_0px_#0B172A] transition-colors hover:border-[#991B1B]/30"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[#991B1B]">
                  <Check className="h-3.5 w-3.5 stroke-[3] text-white" />
                </span>
                <span className="text-base leading-relaxed text-[#0B172A]/80">
                  {perk}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CalendlyBooking />

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
