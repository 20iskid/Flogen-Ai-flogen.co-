"use client";

import BaseHeroVideoSection from "@/components/landing/BaseHeroVideoSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import LandingFooter from "@/components/landing/LandingFooter";
import NicheGridSection from "@/components/landing/NicheGridSection";
import PasSection from "@/components/landing/PasSection";
import SocialProofStrip from "@/components/landing/SocialProofStrip";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import UvpGrid from "@/components/landing/UvpGrid";
import type { HubLandingContent } from "@/lib/landing/types";

type BaseLandingPageProps = {
  content: HubLandingContent;
};

export default function BaseLandingPage({ content }: BaseLandingPageProps) {
  return (
    <div className="overflow-x-clip">
      <BaseHeroVideoSection content={content.hero} />
      <SocialProofStrip content={content.socialProof} />
      <NicheGridSection content={content.niches} />
      <PasSection content={content.pas} />
      <UvpGrid content={content.uvp} />
      <TestimonialsSection content={content.testimonials} />
      <FinalCtaSection content={content.finalCta} />
      <LandingFooter />
    </div>
  );
}
