"use client";

import BaseHeroVideoSection from "@/components/landing/BaseHeroVideoSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import HeroSection from "@/components/landing/HeroSection";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingHeader from "@/components/landing/LandingHeader";
import PasSection from "@/components/landing/PasSection";
import SocialProofStrip from "@/components/landing/SocialProofStrip";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import UvpGrid from "@/components/landing/UvpGrid";
import WarningBar from "@/components/landing/WarningBar";
import type { LandingContent } from "@/lib/landing/types";
import { isHubHero } from "@/lib/landing/types";

type LandingPageProps = {
  content: LandingContent;
};

export default function LandingPage({ content }: LandingPageProps) {
  const { hero } = content;

  return (
    <div className="overflow-x-clip">
      {!isHubHero(hero) && <WarningBar content={content.warningBar} />}
      {isHubHero(hero) ? (
        <BaseHeroVideoSection content={hero} videoSrc={hero.heroVideo} />
      ) : (
        <>
          <LandingHeader />
          <HeroSection content={hero} />
        </>
      )}
      <SocialProofStrip content={content.socialProof} />
      <PasSection content={content.pas} />
      <UvpGrid content={content.uvp} />
      <TestimonialsSection content={content.testimonials} />
      <FinalCtaSection content={content.finalCta} />
      <LandingFooter />
    </div>
  );
}
