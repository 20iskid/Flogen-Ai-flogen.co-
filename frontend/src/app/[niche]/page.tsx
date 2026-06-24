import LandingPage from "@/components/landing/LandingPage";
import { getAllNicheSlugs, getNicheContent } from "@/lib/landing/niches";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type NichePageProps = {
  params: Promise<{ niche: string }>;
};

export async function generateStaticParams() {
  return getAllNicheSlugs().map((niche) => ({ niche }));
}

export async function generateMetadata({
  params,
}: NichePageProps): Promise<Metadata> {
  const { niche } = await params;
  const content = getNicheContent(niche);

  if (!content) {
    return { title: "Not Found — Flogen" };
  }

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function NicheLandingPage({ params }: NichePageProps) {
  const { niche } = await params;
  const content = getNicheContent(niche);

  if (!content) {
    notFound();
  }

  return <LandingPage content={content} />;
}
