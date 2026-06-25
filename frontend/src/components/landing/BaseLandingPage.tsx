"use client";

import BaseHeroVideoSection from "@/components/landing/BaseHeroVideoSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import LandingFooter from "@/components/landing/LandingFooter";
import HubTestimonialsSection from "@/components/landing/HubTestimonialsSection";
import NicheGridSection from "@/components/landing/NicheGridSection";
import PasSection from "@/components/landing/PasSection";
import ScrollRevealVideoPlaceholder from "@/components/landing/ScrollRevealVideoPlaceholder";
import SocialProofStrip from "@/components/landing/SocialProofStrip";
import UvpGrid from "@/components/landing/UvpGrid";
import type { HubLandingContent } from "@/lib/landing/types";

type BaseLandingPageProps = {
  content: HubLandingContent;
};

export default function BaseLandingPage({ content }: BaseLandingPageProps) {
  return (
    <div className="overflow-x-clip">
      <BaseHeroVideoSection content={content.hero} />
      <ScrollRevealVideoPlaceholder />
      <HubTestimonialsSection />
      <SocialProofStrip content={content.socialProof} />
      <NicheGridSection content={content.niches} />
      <PasSection content={content.pas} />
      <UvpGrid content={content.uvp} />
      <FinalCtaSection content={content.finalCta} />
      <LandingFooter />
    </div>
  );
}
