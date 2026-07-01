import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/site/pages/LegalPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Flogen",
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
