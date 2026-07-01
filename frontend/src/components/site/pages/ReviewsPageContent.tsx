import Link from "next/link";
import HubPageHero from "@/components/site/HubPageHero";
import HubPageLayout from "@/components/site/HubPageLayout";
import { baseLandingContent } from "@/lib/landing/base";

export default function ReviewsPageContent() {
  const { testimonials } = baseLandingContent;

  return (
    <HubPageLayout>
      <HubPageHero
        kicker="Client proof"
        title="Real operators. Real numbers."
        description="Every client came to us with the same problem — leads going cold, manual chaos, and revenue walking out the door. Here's what changed."
      />

      <section className="bg-[#FDFAFA] px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-3xl border-2 border-[#0B172A] bg-white p-8 shadow-[4px_4px_0px_#0B172A]"
            >
              <p className="flex-1 text-base leading-relaxed text-[#0B172A]/80">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-[#0B172A]/10 pt-6">
                <p className="font-bold text-[#0B172A]">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
                <p className="mt-2 text-sm font-black uppercase tracking-wider text-[#991B1B]">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg text-gray-600">
            Want the full collection of client stories?
          </p>
          <Link
            href="/#stories"
            className="mt-6 inline-flex rounded-full bg-[#991B1B] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:brightness-110"
          >
            Read all stories
          </Link>
        </div>
      </section>
    </HubPageLayout>
  );
}
