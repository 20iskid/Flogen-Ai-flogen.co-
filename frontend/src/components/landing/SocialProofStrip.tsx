"use client";

const logos = ["ACME", "NEXUS", "VERTEX", "ORION", "PULSE"];

export default function SocialProofStrip() {
  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="overflow-hidden border-y border-brand-navy/10 bg-brand-white py-8 sm:py-10">
      <p className="section-x mb-6 text-center text-[10px] font-black uppercase tracking-[0.25em] text-brand-navy sm:mb-8 sm:text-xs sm:tracking-[0.35em]">
        Trusted by
      </p>

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12 md:gap-16">
          {marqueeItems.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex h-12 min-w-[110px] items-center justify-center rounded-sm border border-brand-navy/10 bg-brand-navy/[0.03] px-5 text-base font-black tracking-tighter text-brand-navy/40 sm:h-14 sm:min-w-[140px] sm:px-8 sm:text-lg"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
