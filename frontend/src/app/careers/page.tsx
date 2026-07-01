import type { Metadata } from "next";
import CareersPageContent from "@/components/site/pages/CareersPageContent";

export const metadata: Metadata = {
  title: "Careers — Flogen",
  description: "Join the Flogen team and build automation systems that print profit.",
};

export default function CareersPage() {
  return <CareersPageContent />;
}
