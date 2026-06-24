import BaseLandingPage from "@/components/landing/BaseLandingPage";
import { baseLandingContent } from "@/lib/landing/base";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: baseLandingContent.metadata.title,
  description: baseLandingContent.metadata.description,
};

export default function Home() {
  return <BaseLandingPage content={baseLandingContent} />;
}
