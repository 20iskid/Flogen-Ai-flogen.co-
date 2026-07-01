import type { Metadata } from "next";
import ReviewsPageContent from "@/components/site/pages/ReviewsPageContent";

export const metadata: Metadata = {
  title: "Reviews — Flogen",
  description: "Real client results from operators who fixed their revenue leaks with Flogen.",
};

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}
