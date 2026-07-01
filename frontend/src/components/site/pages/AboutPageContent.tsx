import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";

const values = [
  {
    title: "Systems over slogans",
    body: "We don't sell dashboards that collect dust. We install production-grade automation that your team actually uses.",
  },
  {
    title: "ROI or refund",
    body: "We benchmark before we build. Miss agreed KPIs and you don't pay. We only win when you win.",
  },
  {
    title: "Speed without shortcuts",
    body: "Live in 30 days — because every week without a system is revenue you'll never get back.",
  },
] as const;

export default function AboutPageContent() {
  return (
    <HubPageLayout>
      <HubPageHero
        kicker="About flogen"
        title="We build revenue engines,"
        titleAccent="not websites."
        description="Flogen is a custom automation studio for high-growth businesses tired of manual processes, cold leads, and agencies that overpromise."
        badges={["30 days", "ROI", "Systems"]}
      />

      <section className="bg-[#FDFAFA] px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-gray-600 md:text-xl">
          <p>
            We started Flogen because we kept watching sharp operators lose deals
            they should have won — not from lack of talent, but from broken
            systems. Voicemails. Slow follow-up. Tools that don&apos;t talk to each
            other.
          </p>
          <p>
            Today we build bespoke intake, nurture, and workflow automation for
            law firms, clinics, agencies, and operators across ten industries —
            all live in 30 days, all backed by an NDA and a money-back guarantee.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-[#0B172A]/10 bg-white p-8"
            >
              <h3 className="text-xl font-black text-[#0B172A]">{value.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {value.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0B172A] px-4 py-16 text-center md:px-8 md:py-20">
        <a
          href="/audit"
          className="inline-flex rounded-full bg-[#991B1B] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:brightness-110"
        >
          Work with us
        </a>
      </section>
    </HubPageLayout>
  );
}
