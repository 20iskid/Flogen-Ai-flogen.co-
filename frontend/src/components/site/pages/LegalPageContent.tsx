import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";

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

export default function TermsPageContent() {
  return (
    <HubPageLayout headerTone="light">
      <HubPageHero
        dark={false}
        kicker="Legal"
        title="Terms of"
        titleAccent="Service"
        description="Last updated: March 2026"
        badges={["Legal", "Policy", "Flogen"]}
      />
      <LegalBody sections={termsSections} />
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

export function PrivacyPageContent() {
  return (
    <HubPageLayout headerTone="light">
      <HubPageHero
        dark={false}
        kicker="Legal"
        title="Privacy"
        titleAccent="Policy"
        description="Last updated: March 2026"
        badges={["Privacy", "Data", "NDA"]}
      />
      <LegalBody sections={privacySections} />
    </HubPageLayout>
  );
}

function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="bg-[#FDFAFA] px-4 py-12 md:px-8 md:py-16 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-black uppercase tracking-tight text-[#0B172A]">
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
        ))}
      </div>
    </section>
  );
}
