"use client";

import { Coffee, Globe, Laptop, Sparkles, Zap } from "lucide-react";
import HubBrutalistCard from "@/components/site/HubBrutalistCard";
import HubPageCta from "@/components/site/HubPageCta";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";
import HubPageSection from "@/components/site/HubPageSection";
import HubStatStrip from "@/components/site/HubStatStrip";

const roles = [
  {
    title: "Automation Engineer",
    type: "Remote · Full-time",
    body: "Build production workflows, integrations, and internal tools for high-growth clients. You'll own systems end-to-end — from API wiring to deployment.",
    tags: ["Node.js", "APIs", "Workflows", "Integrations"],
  },
  {
    title: "Growth Strategist",
    type: "Remote · Contract",
    body: "Map revenue leaks, design conversion systems, and own client ROI benchmarks. You think in funnels, not features.",
    tags: ["ROI modeling", "Funnel design", "Client-facing", "Analytics"],
  },
  {
    title: "Full-Stack Product Builder",
    type: "Remote · Full-time",
    body: "Ship custom dashboards, client portals, and automation UIs that operators actually use. Design sense required — brutalist taste a plus.",
    tags: ["React", "Next.js", "UI/UX", "TypeScript"],
  },
] as const;

const perks = [
  { icon: Globe, title: "Fully remote", body: "Work from anywhere. Async-first. Results over hours logged." },
  { icon: Zap, title: "High impact", body: "Small team — your work ships to real businesses with real revenue on the line." },
  { icon: Coffee, title: "No bureaucracy", body: "No standups about standups. No reorgs. Just build." },
  { icon: Laptop, title: "Top gear", body: "Equipment stipend and tools budget so you're never fighting your setup." },
] as const;

const culture = [
  "We hire builders, not passengers",
  "ROI is the only metric that matters",
  "Speed is a feature — ship in weeks, not quarters",
  "Direct access to founders and clients",
] as const;

export default function CareersPageContent() {
  return (
    <HubPageLayout>
      <HubPageHero
        kicker="Careers"
        title="Build systems that"
        titleAccent="print profit."
        description="We're a small, elite team obsessed with automation, speed, and measurable outcomes. If that's you, we want to hear from you."
        badges={["Remote", "Elite", "Build"]}
      />

      <HubStatStrip
        stats={[
          { value: "100%", label: "Remote" },
          { value: "<10", label: "Team size" },
          { value: "30d", label: "Ship cycle" },
          { value: "∞", label: "Coffee" },
        ]}
      />

      <HubPageSection
        kicker="Culture"
        title="We don't do corporate."
        titleAccent="We do outcomes."
        description="Flogen is for people who'd rather ship a working system than sit in another alignment meeting."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {perks.map((perk) => (
            <HubBrutalistCard
              key={perk.title}
              icon={perk.icon}
              title={perk.title}
              body={perk.body}
            />
          ))}
        </div>
      </HubPageSection>

      <HubPageSection
        dark
        kicker="Life here"
        title="What it's actually"
        titleAccent="like."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <ul className="space-y-4">
            {culture.map((line, i) => (
              <li
                key={line}
                className="flex items-start gap-4 border-b border-[#FDFAFA]/10 pb-4"
              >
                <span className="text-2xl font-black text-[#991B1B]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-lg text-gray-300">{line}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center rounded-2xl border-2 border-[#991B1B] bg-[#991B1B]/10 p-10 text-center">
            <div>
              <Sparkles className="mx-auto h-12 w-12 text-[#991B1B]" />
              <p className="mt-6 text-3xl font-black uppercase leading-tight tracking-tighter text-[#FDFAFA]">
                Your code closes deals.
              </p>
              <p className="mt-4 text-gray-400">
                Every workflow you build directly impacts a real operator&apos;s revenue.
                That&apos;s the job. That&apos;s the reward.
              </p>
            </div>
          </div>
        </div>
      </HubPageSection>

      <HubPageSection
        kicker="Open roles"
        title="Current"
        titleAccent="openings."
      >
        <div className="space-y-6">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-2xl border-2 border-[#0B172A] bg-white p-6 shadow-[6px_6px_0px_#0B172A] transition-all hover:shadow-[6px_6px_0px_#991B1B] md:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#0B172A]">
                  {role.title}
                </h3>
                <span className="inline-flex w-fit rounded-sm border-2 border-[#991B1B] bg-[#991B1B]/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#991B1B]">
                  {role.type}
                </span>
              </div>
              <p className="mt-4 text-gray-600">{role.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0B172A]/15 px-3 py-1 text-xs font-semibold text-[#0B172A]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`mailto:careers@flogen.co?subject=Application:%20${encodeURIComponent(role.title)}`}
                className="mt-6 inline-flex rounded-full bg-[#0B172A] px-6 py-3 text-xs font-black uppercase tracking-widest text-[#FDFAFA] transition-colors hover:bg-[#991B1B]"
              >
                Apply now
              </a>
            </article>
          ))}
        </div>
        <p className="mt-12 rounded-2xl border-2 border-dashed border-[#0B172A]/20 bg-white p-8 text-center text-gray-600">
          Don&apos;t see your role? Send your portfolio and what you&apos;d build to{" "}
          <a
            href="mailto:careers@flogen.co"
            className="font-black text-[#991B1B] hover:underline"
          >
            careers@flogen.co
          </a>
          {" "}— we hire for talent, not titles.
        </p>
      </HubPageSection>

      <HubPageCta
        kicker="Not hiring yet?"
        title="See what we build"
        titleAccent="for clients."
        description="Explore the systems our team ships — then come back when you're ready."
        href="/our-accomplishments"
        label="Explore our system"
      />
    </HubPageLayout>
  );
}
