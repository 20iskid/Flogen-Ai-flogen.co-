"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Rocket, Target, Users } from "lucide-react";
import HubBrutalistCard from "@/components/site/HubBrutalistCard";
import HubPageCta from "@/components/site/HubPageCta";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";
import HubPageSection from "@/components/site/HubPageSection";
import HubStatStrip from "@/components/site/HubStatStrip";
import { getNicheList } from "@/lib/landing/niches";

const values = [
  {
    number: "01",
    title: "Systems over slogans",
    body: "We don't sell dashboards that collect dust. We install production-grade automation that your team actually uses every single day.",
    icon: Target,
  },
  {
    number: "02",
    title: "ROI or refund",
    body: "We benchmark before we build. Miss agreed KPIs and you don't pay. We only win when you win — that's the deal.",
    icon: Rocket,
  },
  {
    number: "03",
    title: "Speed without shortcuts",
    body: "Live in 30 days — because every week without a system is revenue you'll never get back and never even know you lost.",
    icon: Heart,
  },
] as const;

const timeline = [
  {
    year: "The problem",
    text: "Sharp operators losing deals they should have won — not from lack of talent, but from voicemails, slow follow-up, and tools that don't talk.",
  },
  {
    year: "The insight",
    text: "The gap wasn't effort. It was systems. Competitors with worse products were winning because they answered faster and followed up automatically.",
  },
  {
    year: "Today",
    text: "Flogen builds bespoke intake, nurture, and workflow automation across ten industries — live in 30 days, NDA-covered, ROI-guaranteed.",
  },
] as const;

const principles = [
  "No bloated retainers — fixed scope, fixed timeline",
  "One team owns intake through integration",
  "Every build ships with measurable KPIs",
  "NDA and encrypted pipelines from day one",
] as const;

export default function AboutPageContent() {
  const niches = getNicheList().slice(0, 6);

  return (
    <HubPageLayout>
      <HubPageHero
        kicker="About flogen"
        title="We build revenue engines,"
        titleAccent="not websites."
        description="Flogen is a custom automation studio for high-growth businesses tired of manual processes, cold leads, and agencies that overpromise."
        badges={["30 days", "ROI", "Systems"]}
      />

      <HubStatStrip
        stats={[
          { value: "10+", label: "Industries" },
          { value: "30d", label: "Avg. go-live" },
          { value: "93+", label: "Clients served" },
          { value: "4.8★", label: "Avg. rating" },
        ]}
      />

      <HubPageSection innerClassName="max-w-3xl">
        <p className="text-xl leading-relaxed text-gray-600 md:text-2xl">
          We started Flogen because we kept watching sharp operators lose deals
          they should have won — not from lack of talent, but from{" "}
          <span className="font-bold text-[#0B172A]">broken systems</span>.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          Today we build bespoke intake, nurture, and workflow automation for law
          firms, clinics, agencies, and operators across ten industries — all live
          in 30 days, all backed by an NDA and a money-back guarantee.
        </p>
      </HubPageSection>

      <HubPageSection
        dark
        kicker="Our story"
        title="From frustration"
        titleAccent="to systems."
      >
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`relative flex flex-col gap-4 border-l-4 border-[#991B1B] py-8 pl-8 md:flex-row md:gap-12 ${
                i < timeline.length - 1 ? "border-b border-[#FDFAFA]/10" : ""
              }`}
            >
              <span className="shrink-0 text-sm font-black uppercase tracking-[0.2em] text-[#991B1B] md:w-32">
                {item.year}
              </span>
              <p className="text-lg leading-relaxed text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </HubPageSection>

      <HubPageSection
        kicker="What we believe"
        title="Non-negotiables"
        titleAccent="we live by."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <HubBrutalistCard
              key={value.title}
              number={value.number}
              icon={value.icon}
              title={value.title}
              body={value.body}
            />
          ))}
        </div>
      </HubPageSection>

      <HubPageSection
        dark
        kicker="How we operate"
        title="Small team."
        titleAccent="Big outcomes."
        description="We're operators who build for operators — not a 200-person agency where your project gets lost in a queue."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-[#FDFAFA]/10 bg-white/[0.03] p-8">
            <Users className="h-10 w-10 text-[#991B1B]" />
            <h3 className="mt-6 text-2xl font-black uppercase text-[#FDFAFA]">
              Elite by design
            </h3>
            <ul className="mt-6 space-y-3">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#991B1B]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border-2 border-[#991B1B] bg-[#991B1B]/10 p-8">
            <p className="text-5xl font-black tracking-tighter text-[#FDFAFA] md:text-6xl">
              30
              <span className="text-[#991B1B]">.</span>
            </p>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-[#991B1B]">
              Days to live
            </p>
            <p className="mt-4 text-gray-400">
              Not a roadmap. Not a strategy deck. A working system wired into your
              stack — intake, follow-up, integrations, and ROI tracking from day one.
            </p>
          </div>
        </div>
      </HubPageSection>

      <HubPageSection
        kicker="Who we serve"
        title="Ten industries."
        titleAccent="One engine."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {niches.map((niche) => (
            <Link
              key={niche.slug}
              href={niche.href}
              className="rounded-xl border-2 border-[#0B172A]/10 bg-white px-4 py-4 text-center text-sm font-black uppercase tracking-tight text-[#0B172A] shadow-[3px_3px_0px_#0B172A] transition-all hover:border-[#991B1B] hover:text-[#991B1B] hover:shadow-[3px_3px_0px_#991B1B]"
            >
              {niche.name}
            </Link>
          ))}
        </div>
        <Link
          href="/#industries"
          className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#991B1B] hover:underline"
        >
          See all industries
          <Image src="/icons/arrow-doit.svg" alt="" width={10} height={18} className="h-3 w-1.5" />
        </Link>
      </HubPageSection>

      <HubPageCta
        title="Ready to stop losing"
        titleAccent="deals you should win?"
        href="/audit"
        label="Book your free audit"
      />
    </HubPageLayout>
  );
}
