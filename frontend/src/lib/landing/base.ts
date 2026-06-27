import type { BaseHubHero, HubLandingContent, LandingUvp } from "@/lib/landing/types";

const baseUvpItems: LandingUvp[] = [
  {
    icon: "bot",
    title: "AI Systems That Print Profit",
    description:
      "Production-grade automation wired into your existing stack — not generic chatbots or off-the-shelf templates.",
  },
  {
    icon: "zap",
    title: "Live in 30 Days",
    description:
      "We deploy fast because every week without a system is revenue walking out the door.",
  },
  {
    icon: "gauge",
    title: "ROI Or Refund",
    description:
      "We benchmark before we build. Miss agreed KPIs and you don't pay. Period.",
  },
  {
    icon: "layers",
    title: "Built Around Your Business",
    description:
      "Intake, follow-up, scheduling, and integrations — one team, zero finger-pointing.",
  },
  {
    icon: "shield",
    title: "Pilot-Ready & Secure",
    description:
      "Full NDA, encrypted pipelines, and audit trails from day one on every engagement.",
  },
];

export const baseLandingContent: HubLandingContent = {
  metadata: {
    title: "Flogen — Absolute System Autonomy",
    description:
      "That revenue you lost last month didn't have to leave. Get your free audit and see how Flogen helps you close more with less manual work.",
  },
  hero: {
    headlineBefore: "That ",
    headlineAmount: "$22,000",
    headlineMiddle: " You Lost ",
    headlineNoWrap: "Last Month",
    headlineLine2: "Did Not Have To Leave!",
    subheadline:
      "Less manual, less slow, less losing, more closed,\nmore you doing what you are actually good at",
    emailPlaceholder:
      "Enter your email here and we'll send some 'magic'...",
    navCtaLabel: "Get Your Free Audit Today!",
    submitLabel: "Do it",
    disclaimer: "*The audit is free. The leads you are losing are not.",
    rating: "4.8 stars out of 93+ clients",
    ctaHref: "#audit",
  } satisfies BaseHubHero,
  socialProof: {
    label: "Trusted across industries",
    logos: ["FLOGEN", "PARTNERS", "OPERATORS", "FOUNDERS", "TEAMS"],
  },
  niches: {
    title: "Choose your industry.",
    subtitle:
      "Every page below uses the same proven system — customized copy, workflows, and integrations for your exact niche.",
  },
  pas: {
    title: "Here's the brutal truth about your business right now.",
    paragraphs: [
      "You didn't build a company to babysit manual processes while competitors with better systems eat your lunch.",
      "The gap isn't talent or hustle — it's automation. And until you fix the machine underneath your revenue, every dollar you spend on growth is gasoline on a bonfire.",
    ],
    painPoints: [
      "Leads slip through cracks because follow-up is manual, slow, or nonexistent.",
      "Your team burns hours on repetitive admin instead of high-value work.",
      "Tools don't talk to each other — so data lives in silos and deals die in the gaps.",
      "Every month without a system costs compounding revenue you'll never recover.",
    ],
    bridge:
      "Flogen doesn't sell software. We install profit engines tailored to your industry. Here's what changes:",
    solutions: [
      "Custom workflows that eliminate 60–80% of manual ops within 90 days.",
      "Always-on intake and nurture that converts leads while you sleep.",
      "Integrations built around the software you already use and trust.",
      "Measurable ROI from day one — no vanity metrics, no excuses.",
    ],
  },
  uvp: {
    title: "Why operators choose Flogen",
    titleAccent: "over every other agency.",
    items: baseUvpItems,
  },
  testimonials: {
    title: "From pain to proof.",
    subtitle: "Real businesses. Real numbers. Across every industry we serve.",
    items: [
      {
        quote:
          "We picked our niche page, booked the audit, and had a live system in 28 days. The ROI wasn't theoretical — it hit our P&L in week six.",
        name: "Marcus Chen",
        role: "CEO, Vertex Labs",
        result: "+$340K ARR",
      },
      {
        quote:
          "Every vendor promised AI. Flogen was the only one that showed up with industry-specific workflows and a money-back guarantee.",
        name: "Sarah Okonkwo",
        role: "Founder, Pulse Health",
        result: "3.2x ROAS",
      },
      {
        quote:
          "Our response time went from hours to seconds. The right niche landing page told our story — then they built the machine behind it.",
        name: "James Whitfield",
        role: "COO, Orion Digital",
        result: "+218% leads",
      },
    ],
  },
  finalCta: {
    title: "Not sure where to start?",
    titleLine2: "Pick your industry and go.",
    description:
      "Each niche page breaks down your exact revenue leaks and how we fix them in 30 days. Full NDA. Money-back guarantee. No fluff.",
    ctaLabel: "View all industries",
    ctaHref: "#industries",
  },
};
