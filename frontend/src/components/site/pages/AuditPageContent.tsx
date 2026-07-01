"use client";

import Image from "next/image";
import { Check, Clock, FileSearch, Map, MessageSquare, Users } from "lucide-react";
import CalendlyBooking from "@/components/site/CalendlyBooking";
import HubBrutalistCard from "@/components/site/HubBrutalistCard";
import HubPageCta from "@/components/site/HubPageCta";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";
import HubPageSection from "@/components/site/HubPageSection";
import HubStatStrip from "@/components/site/HubStatStrip";

const perks = [
  "Full revenue leak analysis across your current stack",
  "Custom automation roadmap — not a generic PDF",
  "ROI benchmarks before we build anything",
  "NDA-covered. Zero obligation to proceed.",
] as const;

const auditSteps = [
  {
    number: "01",
    title: "You book",
    body: "Pick a slot on our CEO's calendar. No forms, no sales rep buffer — straight to the person who builds the systems.",
    icon: Clock,
  },
  {
    number: "02",
    title: "We diagnose",
    body: "In 30 minutes we map your intake, follow-up, tools, and team workflow — then quantify where revenue is leaking.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "You get the plan",
    body: "Walk away with a custom automation roadmap, ROI benchmarks, and a clear picture of what we'd build in 30 days.",
    icon: Map,
  },
] as const;

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. The audit costs you nothing. The leads you're losing because of broken systems are what's expensive.",
  },
  {
    q: "Do I need to be ready to buy?",
    a: "No obligation. Many operators book the audit just to understand the damage — then decide on their timeline.",
  },
  {
    q: "What should I prepare?",
    a: "Know your current tools, your biggest bottleneck, and roughly how many leads or deals slip through each month. That's enough.",
  },
  {
    q: "Who shows up on the call?",
    a: "Our CEO — the same person who scopes and oversees every system we install. No junior handoff.",
  },
] as const;

const fitFor = [
  "Law firms losing intake to slow follow-up",
  "Clinics with no-shows and manual scheduling chaos",
  "Agencies drowning in client admin instead of delivery",
  "Operators who've been burned by dashboards that collect dust",
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

      <HubStatStrip
        stats={[
          { value: "$0", label: "Audit cost" },
          { value: "30m", label: "On the call" },
          { value: "24hr", label: "Follow-up" },
          { value: "NDA", label: "Covered" },
        ]}
      />

      <HubPageSection
        kicker="Deliverables"
        title="What you walk away"
        titleAccent="with."
      >
        <ul className="grid gap-5 sm:grid-cols-2">
          {perks.map((perk, i) => (
            <li
              key={perk}
              className="flex items-start gap-4 rounded-2xl border-2 border-[#0B172A]/10 bg-white p-6 shadow-[4px_4px_0px_#0B172A] transition-all hover:border-[#991B1B]/40 hover:shadow-[4px_4px_0px_#991B1B]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#991B1B] text-xs font-black text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="pt-0.5 text-base leading-relaxed text-[#0B172A]/80">{perk}</span>
            </li>
          ))}
        </ul>
      </HubPageSection>

      <HubPageSection
        dark
        kicker="The process"
        title="Three steps."
        titleAccent="Zero fluff."
        description="No discovery deck. No 47-slide PDF. Just a straight diagnosis and a plan you can act on."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {auditSteps.map((step) => (
            <HubBrutalistCard
              key={step.number}
              dark
              number={step.number}
              icon={step.icon}
              title={step.title}
              body={step.body}
            />
          ))}
        </div>
      </HubPageSection>

      <HubPageSection
        kicker="Fit check"
        title="This audit is for operators who"
        titleAccent="are done guessing."
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {fitFor.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-[#0B172A]/10 bg-white px-5 py-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#991B1B]" strokeWidth={3} />
              <span className="text-[#0B172A]/80">{item}</span>
            </li>
          ))}
        </ul>
      </HubPageSection>

      <CalendlyBooking />

      <HubPageSection
        dark
        kicker="FAQ"
        title="Questions before"
        titleAccent="you book."
        innerClassName="max-w-4xl"
      >
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              className="group rounded-2xl border-2 border-[#FDFAFA]/10 bg-white/[0.03] open:border-[#991B1B]/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-black uppercase tracking-tight text-[#FDFAFA] marker:content-none">
                <span className="flex items-center gap-4">
                  <span className="text-sm text-[#991B1B]">{String(i + 1).padStart(2, "0")}</span>
                  {faq.q}
                </span>
                <MessageSquare className="h-5 w-5 shrink-0 text-[#991B1B]/60" />
              </summary>
              <p className="border-t border-[#FDFAFA]/10 px-6 pb-5 pt-4 text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </HubPageSection>

      <HubPageCta
        kicker="Not ready to book?"
        title="Browse your industry"
        titleAccent="first."
        description="See how we fix revenue leaks for operators exactly like you — niche by niche."
        href="/#industries"
        label="View all industries"
      />
    </HubPageLayout>
  );
}
