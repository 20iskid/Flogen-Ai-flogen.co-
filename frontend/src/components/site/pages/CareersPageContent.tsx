import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";

const roles = [
  {
    title: "Automation Engineer",
    type: "Remote · Full-time",
    body: "Build production workflows, integrations, and internal tools for high-growth clients.",
  },
  {
    title: "Growth Strategist",
    type: "Remote · Contract",
    body: "Map revenue leaks, design conversion systems, and own client ROI benchmarks.",
  },
] as const;

export default function CareersPageContent() {
  return (
    <HubPageLayout>
      <HubPageHero
        kicker="Careers"
        title="Build systems that"
        titleAccent="print profit."
        description="We're a small, elite team obsessed with automation, speed, and measurable outcomes. If that's you, we want to hear from you."
        badges={["Remote", "Elite", "Build"]}
      />

      <section className="bg-[#FDFAFA] px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-[#0B172A] md:text-3xl">
            Open roles
          </h2>
          <div className="mt-8 space-y-4">
            {roles.map((role) => (
              <article
                key={role.title}
                className="rounded-2xl border-2 border-[#0B172A] bg-white p-6 shadow-[4px_4px_0px_#0B172A] md:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-black text-[#0B172A]">{role.title}</h3>
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#991B1B]">
                    {role.type}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">{role.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-gray-600">
            Don&apos;t see your role? Send your portfolio and what you&apos;d build
            to{" "}
            <a
              href="mailto:careers@flogen.co"
              className="font-semibold text-[#991B1B] hover:underline"
            >
              careers@flogen.co
            </a>
          </p>
        </div>
      </section>
    </HubPageLayout>
  );
}
