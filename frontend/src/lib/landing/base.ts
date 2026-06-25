import type { BaseHubHero, HubLandingContent } from "@/lib/landing/types";

export const baseLandingContent: HubLandingContent = {
  metadata: {
    title: "Flogen — Recover Lost Revenue With Custom Automation",
    description:
      "That revenue you lost last month didn't have to leave. Get your free audit and see how Flogen helps you close more with less manual work.",
  },
  hero: {
    headlineBefore: "That ",
    headlineAmount: "$22,000",
    headlineMiddle: " You Lost Last Month ",
    headlineAfter: "Did Not Have To Leave!",
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
};
