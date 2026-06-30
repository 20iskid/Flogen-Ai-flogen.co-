"use client";

import BaseHeroVideoSection from "@/components/landing/BaseHeroVideoSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import LandingFooter from "@/components/landing/LandingFooter";
import HubTestimonialsSection from "@/components/landing/HubTestimonialsSection";
import PasSection from "@/components/landing/PasSection";
import ScrollRevealVideoPlaceholder from "@/components/landing/ScrollRevealVideoPlaceholder";
import SocialProofStrip from "@/components/landing/SocialProofStrip";
import WhatWeDo from "@/components/landing/WhatWeDo";
import UvpGrid from "@/components/landing/UvpGrid";
import type { LandingContent } from "@/lib/landing/types";
import { isHubHero } from "@/lib/landing/types";

type LandingPageProps = {
  content: LandingContent;
};

export default function LandingPage({ content }: LandingPageProps) {
  const { hero } = content;

  if (!isHubHero(hero)) {
    throw new Error(`Niche "${content.slug}" must use hub hero layout.`);
  }

  return (
    <div className="overflow-x-clip">
      <BaseHeroVideoSection content={hero} videoSrc={hero.heroVideo} />
      <ScrollRevealVideoPlaceholder />
      <HubTestimonialsSection />
      <SocialProofStrip content={content.socialProof} />
      <WhatWeDo />
      <PasSection content={content.pas} />
      <UvpGrid content={content.uvp} />
      <FinalCtaSection content={content.finalCta} />
      <LandingFooter />
    </div>
  );
}
