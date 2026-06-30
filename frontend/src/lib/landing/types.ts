export type NicheSlug =
  | "law-firms"
  | "dental-clinics"
  | "hvac-home-services"
  | "financial-advisors"
  | "staffing-agencies"
  | "independent-auto-repair"
  | "immigration-attorneys"
  | "commercial-cleaning-b2b"
  | "funeral-homes"
  | "independent-insurance-brokers";

export type HeadlineSegment = {
  text: string;
  variant?: "default" | "highlight" | "muted";
};

export type UvpIcon = "bot" | "zap" | "gauge" | "layers" | "shield";

export type LandingUvp = {
  icon: UvpIcon;
  title: string;
  description: string;
};

export type LandingTestimonial = {
  quote: string;
  name: string;
  role: string;
  result: string;
};

export type ClassicHero = {
  layout?: "classic";
  headline: HeadlineSegment[];
  subheadline: string;
  ctaLabel: string;
  ctaHref?: string;
  heroVideo?: string;
};

export type HubHero = BaseHubHero & {
  layout: "hub";
  heroVideo?: string;
};

export type LandingHero = ClassicHero | HubHero;

export function isHubHero(hero: LandingHero): hero is HubHero {
  return hero.layout === "hub";
}

export type LandingContent = {
  slug: NicheSlug;
  name: string;
  metadata: {
    title: string;
    description: string;
  };
  warningBar: {
    message: string;
    cta: string;
  };
  hero: LandingHero;
  socialProof: {
    label: string;
    logos: string[];
  };
  pas: {
    title: string;
    paragraphs: string[];
    leadIn?: string;
    painPoints: string[];
    closing?: string;
    bridge?: string;
    solutions?: string[];
  };
  uvp: {
    title: string;
    titleAccent: string;
    items: LandingUvp[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: LandingTestimonial[];
  };
  finalCta: {
    title: string;
    titleLine2: string;
    description: string;
    ctaLabel: string;
    ctaHref?: string;
  };
};

export type BaseHubHero = {
  headlineBefore: string;
  headlineAmount: string;
  headlineMiddle: string;
  headlineNoWrap?: string;
  headlineLine2: string;
  subheadline: string;
  emailPlaceholder: string;
  navCtaLabel: string;
  submitLabel: string;
  disclaimer: string;
  rating: string;
  ctaHref?: string;
};

export type HubLandingContent = {
  metadata: {
    title: string;
    description: string;
  };
  hero: BaseHubHero;
  socialProof: LandingContent["socialProof"];
  niches: {
    title: string;
    subtitle: string;
  };
  pas: LandingContent["pas"];
  uvp: LandingContent["uvp"];
  testimonials: LandingContent["testimonials"];
  finalCta: LandingContent["finalCta"];
};
