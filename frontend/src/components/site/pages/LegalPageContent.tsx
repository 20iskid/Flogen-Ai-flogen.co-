"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import HubPageCta from "@/components/site/HubPageCta";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";
import HubPageSection from "@/components/site/HubPageSection";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

const termsSections: LegalSection[] = [
  {
    title: "Agreement",
    paragraphs: [
      "By accessing or using Flogen services and this website, you agree to these Terms of Service. If you do not agree, do not use our services.",
    ],
  },
  {
    title: "Services",
    paragraphs: [
      "Flogen provides custom automation consulting, system design, and implementation services. Specific deliverables, timelines, and KPIs are defined in individual client agreements.",
      "Free audits are provided without obligation. Recommendations following an audit do not constitute a binding contract until a separate agreement is signed.",
    ],
  },
  {
    title: "Payment & guarantee",
    paragraphs: [
      "Paid engagements require a signed statement of work. Where a money-back or ROI guarantee applies, the specific conditions will be documented in your client agreement.",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "Flogen is not liable for indirect, incidental, or consequential damages arising from use of our website or services, except where prohibited by law.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these terms? Email hello@flogen.co.",
    ],
  },
];

const termsHighlights = [
  { label: "Free audits", value: "No obligation" },
  { label: "Paid work", value: "Signed SOW required" },
  { label: "Guarantees", value: "Per client agreement" },
] as const;

export default function TermsPageContent() {
  return (
    <HubPageLayout headerTone="light">
      <HubPageHero
        dark={false}
        kicker="Legal"
        title="Terms of"
        titleAccent="Service"
        description="Last updated: March 2026. Plain language summary below — the full terms follow."
        badges={["Legal", "Policy", "Flogen"]}
      />
      <LegalHighlights items={termsHighlights} />
      <LegalBody sections={termsSections} />
      <HubPageCta
        dark={false}
        kicker="Questions?"
        title="Talk to a human"
        description="Legal jargon is boring. If something's unclear, email us directly."
        href="mailto:hello@flogen.co"
        label="Email hello@flogen.co"
      />
    </HubPageLayout>
  );
}

const privacySections: LegalSection[] = [
  {
    title: "What we collect",
    paragraphs: [
      "We collect information you provide directly — such as your name, email address, company name, and messages submitted through our audit or contact forms.",
      "We may collect usage data including pages visited, device type, and approximate location through standard analytics tools.",
    ],
  },
  {
    title: "How we use it",
    paragraphs: [
      "We use your information to respond to inquiries, deliver services, improve our website, and communicate about Flogen offerings you may find relevant.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Data security",
    paragraphs: [
      "Client engagements are covered by NDA where applicable. We use industry-standard measures to protect data in transit and at rest.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "You may request access, correction, or deletion of your personal data by contacting hello@flogen.co.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Privacy questions? Email hello@flogen.co.",
    ],
  },
];

const privacyHighlights = [
  { label: "We sell data", value: "Never" },
  { label: "Client work", value: "NDA covered" },
  { label: "Your rights", value: "Access & deletion" },
] as const;

export function PrivacyPageContent() {
  return (
    <HubPageLayout headerTone="light">
      <HubPageHero
        dark={false}
        kicker="Legal"
        title="Privacy"
        titleAccent="Policy"
        description="Last updated: March 2026. We collect the minimum needed to serve you — nothing more."
        badges={["Privacy", "Data", "NDA"]}
      />
      <LegalHighlights items={privacyHighlights} />
      <LegalBody sections={privacySections} />
      <HubPageCta
        dark={false}
        kicker="Your data"
        title="You're in control"
        description="Request access, correction, or deletion anytime. No runaround."
        href="mailto:hello@flogen.co"
        label="Contact privacy team"
      />
    </HubPageLayout>
  );
}

function LegalHighlights({
  items,
}: {
  items: readonly { label: string; value: string }[];
}) {
  return (
    <div className="border-y-2 border-[#0B172A]/10 bg-white">
      <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y-2 divide-[#0B172A]/10 sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="px-6 py-8 text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
              {item.label}
            </p>
            <p className="mt-2 text-xl font-black text-[#991B1B]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <HubPageSection innerClassName="max-w-4xl">
      <div className="space-y-6">
        {sections.map((section, i) => (
          <motion.article
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.45 }}
            className="rounded-2xl border-2 border-[#0B172A]/10 bg-white p-6 shadow-[4px_4px_0px_#0B172A] md:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0B172A] text-sm font-black text-[#FDFAFA]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h2 className="text-lg font-black uppercase tracking-tight text-[#0B172A]">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-base leading-relaxed text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-4 rounded-2xl border-2 border-dashed border-[#991B1B]/30 bg-[#991B1B]/5 p-6">
        <Shield className="h-8 w-8 shrink-0 text-[#991B1B]" />
        <p className="text-sm text-gray-600">
          Client engagements are covered by NDA. We take data protection seriously —
          if you have concerns, reach out before you sign anything.
        </p>
      </div>
    </HubPageSection>
  );
}
