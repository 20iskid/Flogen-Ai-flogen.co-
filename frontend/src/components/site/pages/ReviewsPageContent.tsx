"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import HubPageCta from "@/components/site/HubPageCta";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";
import HubPageSection from "@/components/site/HubPageSection";
import HubStatStrip from "@/components/site/HubStatStrip";
import { baseLandingContent } from "@/lib/landing/base";

const extraReviews = [
  {
    quote:
      "Response time went from hours to seconds. We stopped losing warm leads to competitors who simply answered faster.",
    name: "Elena Rostova",
    role: "Managing Partner, Rostova Legal",
    result: "+41% consults",
    industry: "Law",
    rating: 5,
  },
  {
    quote:
      "Flogen built the nurture system our team couldn't stay consistent on. Discovery calls doubled in 45 days.",
    name: "Robert Hayes",
    role: "Founder, Hayes Wealth",
    result: "+2.1x consultations",
    industry: "Finance",
    rating: 5,
  },
  {
    quote:
      "Live in 30 days. Our reps sell now — they don't babysit spreadsheets. That alone paid for the engagement.",
    name: "Marcus Lee",
    role: "CEO, Apex Facility Services",
    result: "-65% sales admin",
    industry: "HVAC",
    rating: 5,
  },
] as const;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-[#991B1B] text-[#991B1B]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPageContent() {
  const { testimonials } = baseLandingContent;
  const allReviews = [...testimonials.items, ...extraReviews];

  return (
    <HubPageLayout>
      <HubPageHero
        kicker="Client proof"
        title="Real operators."
        titleAccent="Real numbers."
        description="Every client came to us with the same problem — leads going cold, manual chaos, and revenue walking out the door. Here's what changed."
        badges={["Verified", "ROI", "Proof"]}
      />

      <HubStatStrip
        stats={[
          { value: "+340K", label: "ARR added" },
          { value: "3.2x", label: "Avg. ROAS" },
          { value: "+218%", label: "Lead volume" },
          { value: "4.8★", label: "Client rating" },
        ]}
      />

      <HubPageSection
        kicker="Case studies"
        title="The before &"
        titleAccent="after."
        description="Same pattern every time: broken intake, manual follow-up, tools that don't connect. Then we install the system."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { before: "Leads going cold", after: "Sub-60s response", stat: "+218%" },
            { before: "Manual admin chaos", after: "Automated workflows", stat: "-65%" },
            { before: "Agency dashboards", after: "Live revenue engine", stat: "+$340K" },
          ].map((item) => (
            <div
              key={item.before}
              className="rounded-2xl border-2 border-[#0B172A] bg-white p-6 shadow-[5px_5px_0px_#991B1B]"
            >
              <p className="text-xs font-black uppercase tracking-widest text-gray-400">Before</p>
              <p className="mt-1 font-bold text-[#0B172A]/60 line-through">{item.before}</p>
              <p className="mt-4 text-xs font-black uppercase tracking-widest text-[#991B1B]">After</p>
              <p className="mt-1 text-lg font-black text-[#0B172A]">{item.after}</p>
              <p className="mt-4 text-3xl font-black tracking-tighter text-[#991B1B]">{item.stat}</p>
            </div>
          ))}
        </div>
      </HubPageSection>

      <HubPageSection
        dark
        kicker="Testimonials"
        title="In their"
        titleAccent="words."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allReviews.map((item, i) => (
            <motion.article
              key={`${item.name}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="flex flex-col rounded-2xl border-2 border-[#FDFAFA]/10 bg-white/[0.03] p-8"
            >
              {"rating" in item && item.rating ? (
                <Stars count={item.rating} />
              ) : (
                <Stars count={5} />
              )}
              <p className="mt-4 flex-1 text-base leading-relaxed text-gray-300">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-[#FDFAFA]/10 pt-6">
                <p className="font-bold text-[#FDFAFA]">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
                {"industry" in item ? (
                  <span className="mt-2 inline-block rounded-sm bg-[#991B1B]/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#991B1B]">
                    {item.industry}
                  </span>
                ) : null}
                <p className="mt-3 text-sm font-black uppercase tracking-wider text-[#991B1B]">
                  {item.result}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </HubPageSection>

      <HubPageSection innerClassName="max-w-2xl text-center">
        <p className="text-lg text-gray-600">
          Want the full collection — including video walkthroughs and detailed case studies?
        </p>
        <Link
          href="/#stories"
          className="mt-6 inline-flex rounded-full border-2 border-[#0B172A] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#0B172A] shadow-[4px_4px_0px_#0B172A] transition-all hover:border-[#991B1B] hover:text-[#991B1B] hover:shadow-[4px_4px_0px_#991B1B]"
        >
          Read stories on homepage
        </Link>
      </HubPageSection>

      <HubPageCta
        title="Want results"
        titleAccent="like these?"
        description="Book a free audit. We'll map your leaks and show you exactly what we'd build."
        href="/audit"
        label="Book your free audit"
      />
    </HubPageLayout>
  );
}
