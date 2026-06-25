"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";
import { fadeSlideUp, staggerContainer, viewportOnce } from "@/lib/motion";

const reviews = [
  {
    name: "Marcus T.",
    initials: "MT",
    quote:
      "That was an amazing experience! Now we have new partners for life THANK YOU FLOGEN!",
  },
  {
    name: "Sarah Chen",
    initials: "SC",
    quote:
      "I've worked with a lot of developers, and this team is in a completely different category. They don't just build what you ask for, they understand what you're trying to achieve and make it better. They think like product owners, not just developers. I came in with my vision..and they improved it, and executed it at a level I wasn't even expecting! From day one, they were fast, responsive, and incredibly detail-oriented. Every feature was thought through, every edge case considered, and everything delivered cleanly and professionally. No hand-holding, no chasing, no confusion, which was very important to me. What stood out most was their ability to take a complex concept and execute it in a way that actually works in the real world. They ask the right questions, anticipate problems before they happen, and come back with solutions...not excuses as to why it can't be done. Communication was seamless, timelines were respected, and the quality of work exceeded expectations across the board. If you care about building something properly, this is the team you want. Highly, highly recommended!",
  },
  {
    name: "James R.",
    initials: "JR",
    quote: "Great results. Already planning our next build.",
  },
  {
    name: "Northline Ventures",
    initials: "NV",
    quote:
      "Working with the team was an outstanding experience. They were incredibly easy to collaborate with, always solution-oriented and ready to adapt to any challenge that came up. Their ability to think creatively and find practical effective fixes demonstrated massive skill and deep expertise. The team consistently delivered high-quality work, communicated clearly, and showed genuine commitment to achieving the best outcome. Truly exceptional work. Highly recommended.",
  },
  {
    name: "David K.",
    initials: "DK",
    quote: "Very ambitious, hard working, easy communication. Highly recommended!",
  },
  {
    name: "Rachel M.",
    initials: "RM",
    quote:
      "While searching for the right team to help grow my business, I never imagined I would find someone this competent, dedicated, and genuinely invested in my success. I would recommend Flogen to anyone.",
  },
  {
    name: "Alex P.",
    initials: "AP",
    quote:
      "Amazing, the most talented team I've ever worked with, I highly suggest them!",
  },
] as const;

function StarRating() {
  return (
    <div className="mt-4 flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-[#991B1B] text-[#991B1B]"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function HubTestimonialsSection() {
  return (
    <section className="bg-[#FDFAFA] py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-4 text-center"
      >
        <motion.span
          variants={fadeSlideUp}
          className="inline-block rounded-full bg-[#991B1B] px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#FDFAFA]"
        >
          We&apos;re seeing stars
        </motion.span>

        <motion.h2
          variants={fadeSlideUp}
          className="mx-auto mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#0B172A] md:text-7xl"
        >
          Stories like these are why we exist
        </motion.h2>

        <motion.p
          variants={fadeSlideUp}
          className="mx-auto mt-6 max-w-3xl text-xl text-gray-600"
        >
          We&apos;re trying to make building elite digital solutions easier, quicker, and
          more predictable for the ambitious folks who run businesses every day.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto mt-16 max-w-7xl columns-1 gap-6 px-4 md:columns-2 lg:columns-3"
      >
          {reviews.map((review) => (
            <motion.article
              key={review.name}
              variants={fadeSlideUp}
              whileHover={{ y: -4 }}
              className="mb-6 break-inside-avoid rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgba(11,23,42,0.06)] transition-shadow duration-200 hover:shadow-[0_16px_48px_rgba(11,23,42,0.12)]"
            >
              <header className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B172A] text-sm font-bold text-white"
                  aria-hidden
                >
                  {review.initials}
                </div>
                <div className="flex min-w-0 flex-1 items-center gap-1.5">
                  <p className="truncate font-bold text-[#0B172A]">{review.name}</p>
                  <BadgeCheck
                    className="h-4 w-4 shrink-0 text-[#991B1B]"
                    aria-label="Verified client"
                  />
                </div>
              </header>

              <StarRating />

              <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                &ldquo;{review.quote}&rdquo;
              </p>
            </motion.article>
          ))}
      </motion.div>
    </section>
  );
}
