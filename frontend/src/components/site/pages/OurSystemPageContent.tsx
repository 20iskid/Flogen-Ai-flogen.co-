"use client";

import { Bot, Gauge, Layers, Shield, Zap } from "lucide-react";
import HubBrutalistCard from "@/components/site/HubBrutalistCard";
import HubPageCta from "@/components/site/HubPageCta";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";
import HubPageSection from "@/components/site/HubPageSection";
import HubStatStrip from "@/components/site/HubStatStrip";
import { baseLandingContent } from "@/lib/landing/base";

const iconMap = {
  bot: Bot,
  zap: Zap,
  gauge: Gauge,
  layers: Layers,
  shield: Shield,
} as const;

const phases = [
  {
    week: "Week 1",
    title: "Audit & architecture",
    body: "We map your stack, quantify leaks, and design the system — integrations, workflows, and KPIs locked before a single line ships.",
  },
  {
    week: "Week 2–3",
    title: "Build & wire",
    body: "Intake, nurture, scheduling, CRM sync, and internal dashboards — built custom, not templated. Daily progress, zero black box.",
  },
  {
    week: "Week 4",
    title: "Launch & benchmark",
    body: "Go live with your team. ROI benchmarks activated. We don't hand off a PDF — we hand off a machine that prints profit.",
  },
] as const;

const integrations = [
  "HubSpot", "Salesforce", "Calendly", "Zapier", "Slack",
  "Google Workspace", "Stripe", "Twilio", "Notion", "Custom APIs",
] as const;

const beforeAfter = [
  { label: "Lead response", before: "4+ hours", after: "< 60 sec" },
  { label: "Follow-up consistency", before: "Manual / spotty", after: "100% automated" },
  { label: "Tool stack", before: "Siloed chaos", after: "One connected engine" },
  { label: "ROI visibility", before: "Guesswork", after: "Live dashboards" },
] as const;

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

      <HubStatStrip
        stats={[
          { value: "30d", label: "Go-live" },
          { value: "5+", label: "Integrations" },
          { value: "ROI", label: "Guaranteed" },
          { value: "NDA", label: "Day one" },
        ]}
      />

      <HubPageSection
        dark
        kicker="The timeline"
        title="Four weeks."
        titleAccent="One engine."
        description="No six-month roadmaps. No discovery phases that never end. A fixed cadence from audit to live system."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase, i) => (
            <div
              key={phase.week}
              className="relative rounded-2xl border-2 border-[#FDFAFA]/10 bg-white/[0.03] p-8"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em] text-[#991B1B]">
                {phase.week}
              </span>
              <span className="absolute right-6 top-6 text-4xl font-black text-[#FDFAFA]/5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-black uppercase text-[#FDFAFA]">{phase.title}</h3>
              <p className="mt-3 text-gray-400">{phase.body}</p>
            </div>
          ))}
        </div>
      </HubPageSection>

      <HubPageSection
        kicker="Before & after"
        title="What changes when"
        titleAccent="the system goes live."
      >
        <div className="overflow-hidden rounded-2xl border-2 border-[#0B172A] shadow-[6px_6px_0px_#0B172A]">
          <div className="grid grid-cols-3 bg-[#0B172A] px-4 py-3 text-xs font-black uppercase tracking-widest text-[#FDFAFA] md:px-6">
            <span>Metric</span>
            <span className="text-center text-gray-500">Before</span>
            <span className="text-center text-[#991B1B]">After</span>
          </div>
          {beforeAfter.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-3 border-t border-[#0B172A]/10 bg-white px-4 py-4 md:px-6"
            >
              <span className="font-bold text-[#0B172A]">{row.label}</span>
              <span className="text-center text-gray-400 line-through">{row.before}</span>
              <span className="text-center font-black text-[#991B1B]">{row.after}</span>
            </div>
          ))}
        </div>
      </HubPageSection>

      <HubPageSection
        kicker="Why operators choose"
        title="Flogen over every"
        titleAccent="other agency."
        description="Five pillars. One system. Zero finger-pointing between vendors."
      >
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {uvp.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <HubBrutalistCard
                key={item.title}
                number={String(i + 1).padStart(2, "0")}
                icon={Icon}
                title={item.title}
                body={item.description}
              />
            );
          })}
        </div>
      </HubPageSection>

      <HubPageSection
        dark
        kicker="Integrations"
        title="Plugs into"
        titleAccent="what you already use."
      >
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[#FDFAFA]/15 bg-white/[0.03] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-gray-400 transition-colors hover:border-[#991B1B]/50 hover:text-[#991B1B]"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-gray-500">
          Don&apos;t see your stack? We build custom API connectors — if it has an
          endpoint, we wire it in.
        </p>
      </HubPageSection>

      <HubPageSection innerClassName="max-w-4xl">
        <div className="rounded-2xl border-2 border-[#991B1B] bg-[#991B1B]/5 p-8 text-center md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#991B1B]">
            The guarantee
          </p>
          <h3 className="mt-4 text-3xl font-black uppercase tracking-tighter text-[#0B172A] md:text-4xl">
            ROI or refund. Period.
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-gray-600">
            We benchmark before we build. Miss agreed KPIs and you don&apos;t pay.
            That&apos;s not marketing — it&apos;s in your contract.
          </p>
        </div>
      </HubPageSection>

      <HubPageCta
        title="Ready to see it on"
        titleAccent="your business?"
        href="/audit"
        label="Book your free audit"
      />
    </HubPageLayout>
  );
}
