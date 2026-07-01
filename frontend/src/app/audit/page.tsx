import type { Metadata } from "next";
import AuditPageContent from "@/components/site/pages/AuditPageContent";

export const metadata: Metadata = {
  title: "Free Audit — Flogen",
  description:
    "Book a free revenue audit. We map your leaks, quantify the damage, and show you the system we'd build to fix it.",
};

export default function AuditPage() {
  return <AuditPageContent />;
}
