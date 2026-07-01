import type { Metadata } from "next";
import OurSystemPageContent from "@/components/site/pages/OurSystemPageContent";

export const metadata: Metadata = {
  title: "Our System — Flogen",
  description:
    "The revenue engine Flogen installs in 30 days — custom automation, integrations, and ROI tracking.",
};

export default function OurAccomplishmentsPage() {
  return <OurSystemPageContent />;
}
