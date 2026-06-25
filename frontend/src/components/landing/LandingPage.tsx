"use client";

import NicheHeroVideoSection from "@/components/landing/NicheHeroVideoSection";
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

type LandingPageProps = {
  content: LandingContent;
};

export default function LandingPage({ content }: LandingPageProps) {
  const hasVideoHero = Boolean(content.hero.heroVideo);

  return (
    <div className="overflow-x-clip">
      <WarningBar content={content.warningBar} />
      {hasVideoHero ? (
        <NicheHeroVideoSection
          content={content.hero}
          videoSrc={content.hero.heroVideo}
          ctaFallback="#audit"
        />
      ) : (
        <>
          <LandingHeader />
          <HeroSection content={content.hero} />
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
