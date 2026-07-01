import type { Metadata } from "next";
import TermsPageContent from "@/components/site/pages/LegalPageContent";

export const metadata: Metadata = {
  title: "Terms of Service — Flogen",
};

export default function TermsPage() {
  return <TermsPageContent />;
}
