"use client";

const logos = ["ACME", "NEXUS", "VERTEX", "ORION", "PULSE"];

export default function SocialProofStrip() {
  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="overflow-hidden border-y border-brand-navy/10 bg-brand-white py-10">
      <p className="mb-8 text-center text-xs font-black uppercase tracking-[0.35em] text-brand-navy">
        Trusted by
      </p>

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16">
          {marqueeItems.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex h-14 min-w-[140px] items-center justify-center rounded-sm border border-brand-navy/10 bg-brand-navy/[0.03] px-8 text-lg font-black tracking-tighter text-brand-navy/40"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
