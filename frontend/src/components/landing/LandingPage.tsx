"use client";

import FinalCtaSection from "@/components/landing/FinalCtaSection";
import HeroSection from "@/components/landing/HeroSection";
import LandingFooter from "@/components/landing/LandingFooter";
import PasSection from "@/components/landing/PasSection";
import SocialProofStrip from "@/components/landing/SocialProofStrip";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import UvpGrid from "@/components/landing/UvpGrid";
import WarningBar from "@/components/landing/WarningBar";

export default function LandingPage() {
  return (
    <>
      <WarningBar />
      <HeroSection />
      <SocialProofStrip />
      <PasSection />
      <UvpGrid />
      <TestimonialsSection />
      <FinalCtaSection />
      <LandingFooter />
    </>
  );
}
