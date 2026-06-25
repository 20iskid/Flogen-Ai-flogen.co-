"use client";

import BaseHeroVideoSection from "@/components/landing/BaseHeroVideoSection";
import type { HubLandingContent } from "@/lib/landing/types";

type BaseLandingPageProps = {
  content: HubLandingContent;
};

export default function BaseLandingPage({ content }: BaseLandingPageProps) {
  return (
    <div className="overflow-x-clip">
      <BaseHeroVideoSection content={content.hero} />
    </div>
  );
}
