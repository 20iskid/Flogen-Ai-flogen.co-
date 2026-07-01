import { Bot, Gauge, Layers, Shield, Zap } from "lucide-react";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";
import { baseLandingContent } from "@/lib/landing/base";

const iconMap = {
  bot: Bot,
  zap: Zap,
  gauge: Gauge,
  layers: Layers,
  shield: Shield,
} as const;

export default function OurSystemPageContent() {
  const { uvp } = baseLandingContent;

  return (
    <HubPageLayout>
      <HubPageHero
        kicker="Our system"
        title="The revenue engine we install"
        titleAccent="in 30 days."
        description="Not another agency retainer. A custom automation system wired into your stack — intake, follow-up, integrations, and ROI tracking from day one."
        badges={["Custom", "Automate", "Track"]}
      />

      <section className="bg-[#FDFAFA] px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-3xl font-black uppercase tracking-tighter text-[#0B172A] md:text-5xl">
            {uvp.title}{" "}
            <span className="text-[#991B1B]">{uvp.titleAccent}</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {uvp.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-[#0B172A]/10 bg-white p-8 transition-all duration-300 hover:border-[#991B1B]/40 hover:shadow-[0_16px_40px_rgba(153,27,27,0.08)]"
                >
                  <span
                    className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#991B1B]/10 blur-2xl transition-colors group-hover:bg-[#991B1B]/20"
                    aria-hidden
                  />
                  <Icon className="relative z-10 h-8 w-8 text-[#991B1B]" strokeWidth={1.75} />
                  <h3 className="relative z-10 mt-6 text-xl font-black text-[#0B172A]">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-base leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0B172A] px-4 py-16 text-center md:px-8 md:py-20">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-[#FDFAFA] md:text-4xl">
          Ready to see it on your business?
        </h2>
        <a
          href="/audit"
          className="mt-8 inline-flex rounded-full bg-[#991B1B] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:brightness-110"
        >
          Book your free audit
        </a>
      </section>
    </HubPageLayout>
  );
}
