import type { Metadata } from "next";
import AboutPageContent from "@/components/site/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us — Flogen",
  description:
    "Flogen builds custom automation systems for high-growth businesses — live in 30 days with NDA and money-back guarantee.",
};

export default function AboutUsPage() {
  return <AboutPageContent />;
}
