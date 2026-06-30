"use client";

import { motion, useInView } from "framer-motion";
import { BadgeCheck, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { Sora } from "next/font/google";
import { forwardRef, useRef, useState } from "react";
import { fadeSlideUp, staggerContainer, viewportOnce } from "@/lib/motion";

const reviews = [
  {
    name: "Michael T.",
    category: "Agency",
    date: "May 14, 2026",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    text: "That was an amazing experience! Now we have new partners for life THANK YOU FLOGEN!",
  },
  {
    name: "Sarah Jenkins",
    category: "SaaS",
    date: "April 28, 2025",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    text: "I've worked with a lot of developers, and this team is in a completely different category. They don't just build what you ask for, they understand what you're trying to achieve and make it better. They think like product owners, not just developers. I came in with my vision..and they improved it, and executed it at a level I wasn't even expecting! From day one, they were fast, responsive, and incredibly detail-oriented. Every feature was thought through, every edge case considered, and everything delivered cleanly and professionally. No hand-holding, no chasing, no confusion, which was very important to me. What stood out most was their ability to take a complex concept and execute it in a way that actually works in the real world. They ask the right questions, anticipate problems before they happen, and come back with solutions...not excuses as to why it can't be done. Communication was seamless, timelines were respected, and the quality of work exceeded expectations across the board. If you care about building something properly, this is the team you want. Highly, highly recommended!",
  },
  {
    name: "David R.",
    category: "E-Commerce",
    date: "April 12, 2024",
    rating: 4,
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    text: "Great results. Already planning our next build.",
  },
  {
    name: "Elena Rostova",
    category: "Law Firm",
    date: "March 30, 2023",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    text: "Working with the team was an outstanding experience. They were incredibly easy to collaborate with, always solution-oriented and ready to adapt to any challenge that came up. Their ability to think creatively and find practical effective fixes demonstrated massive skill and deep expertise. The team consistently delivered high-quality work, communicated clearly, and showed genuine commitment to achieving the best outcome. Truly exceptional work. Highly recommended.",
  },
  {
    name: "Marcus Chen",
    category: "Consulting",
    date: "March 15, 2026",
    rating: 4.5,
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "Very ambitious, hard working, easy communication. Highly recommended!",
  },
  {
    name: "Rachel Dawes",
    category: "Real Estate",
    date: "February 22, 2025",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=150&q=80",
    text: "While searching for the right team to help grow my business, I never imagined I would find someone this competent, dedicated, and genuinely invested in my success. I would recommend Flogen to anyone.",
  },
  {
    name: "James Wilson",
    category: "Tech Startup",
    date: "February 08, 2024",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    text: "Amazing, the most talented team I've ever worked with, I highly suggest them!",
  },
  {
    name: "Priya N.",
    category: "Healthcare",
    date: "June 02, 2026",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&q=80",
    text: "Love working with Flogen. Great team that deeply understands what your business actually needs. Thank you.",
  },
  {
    name: "Thomas Lee",
    category: "Finance",
    date: "May 28, 2023",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    text: "Working with Flogen was an absolute pleasure. Their attention to detail, professionalism, and genuine commitment made the entire process seamless. They truly went above and beyond. Highly recommended.",
  },
  {
    name: "Angela Brooks",
    category: "Marketing",
    date: "May 19, 2025",
    rating: 4.5,
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    text: "Wonderful first experience. Very knowledgeable, quick to respond, and efficient in every way. Looking forward to many more projects together.",
  },
  {
    name: "Chris Alvarez",
    category: "Construction",
    date: "May 08, 2024",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    text: "Great communication throughout. They jumped on a call, made sure everything was clear, and kept things moving. Would absolutely work with them again.",
  },
  {
    name: "Nathan Price",
    category: "Logistics",
    date: "April 22, 2026",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    text: "The kind of team you work with your eyes closed. Fast, clear, asked the right questions, and took the time to explain every step. Just go for it.",
  },
  {
    name: "Lisa Hart",
    category: "Retail",
    date: "April 05, 2023",
    rating: 4,
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    text: "Thank you for the quick delivery. Exactly what we needed.",
  },
  {
    name: "Omar Hassan",
    category: "FinTech",
    date: "March 22, 2025",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&q=80",
    text: "Exceptionally sharp team. Gave them a really difficult project and they delivered without hesitation. Already on our third project together.",
  },
  {
    name: "Victoria Lane",
    category: "Insurance",
    date: "March 08, 2024",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
    text: "Solved every problem that came up without a single excuse. Real expertise, perfect communication, and results we are genuinely proud of.",
  },
  {
    name: "Kevin O'Brien",
    category: "Hospitality",
    date: "February 18, 2026",
    rating: 4,
    text: "Good work. Does a great job.",
  },
  {
    name: "Patricia Gomez",
    category: "Manufacturing",
    date: "February 02, 2023",
    rating: 5,
    text: "Flogen completed our project with complete professionalism and in record time. They understood every requirement before starting, delivered ahead of deadline, and exceeded expectations entirely. Highly recommended to anyone who wants fast reliable exceptional work.",
  },
  {
    name: "Brian Foster",
    category: "EdTech",
    date: "January 20, 2025",
    rating: 4.5,
    avatarUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    text: "They asked the right questions, fully understood our needs, and went the extra mile to make sure everything matched our expectations.",
  },
] as const;

const CLAMP_CHAR_THRESHOLD = 160;
const HOVER_CARD_BG = "#FFF7F7";
const HOVER_CARD_BORDER = "rgba(153, 27, 27, 0.28)";
const HOVER_CARD_SHADOW = "0 18px 42px rgba(153, 27, 27, 0.12)";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
});

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="mt-4 flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1;

        if (rating >= starValue) {
          return (
            <Star
              key={i}
              className="h-4 w-4 fill-current text-[#991B1B]"
              strokeWidth={0}
            />
          );
        }

        if (rating >= starValue - 0.5) {
          return (
            <StarHalf
              key={i}
              className="h-4 w-4 fill-current text-[#991B1B]"
              strokeWidth={0}
            />
          );
        }

        return (
          <Star
            key={i}
            className="h-4 w-4 fill-current text-gray-300"
            strokeWidth={0}
          />
        );
      })}
    </div>
  );
}

function getNameInitial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

function ReviewAvatar({ review }: { review: (typeof reviews)[number] }) {
  const sharedClassName =
    "h-12 w-12 shrink-0 rounded-full border border-white shadow-[0_4px_14px_rgba(11,23,42,0.14)]";

  if ("avatarUrl" in review && review.avatarUrl) {
    return (
      <Image
        src={review.avatarUrl}
        alt={review.name}
        width={48}
        height={48}
        className={`${sharedClassName} object-cover`}
      />
    );
  }

  const initial = getNameInitial(review.name);

  return (
    <div
      className={`${sharedClassName} flex items-center justify-center bg-[#991B1B] text-lg font-bold text-[#FDFAFA]`}
      role="img"
      aria-label={`${review.name} avatar`}
    >
      {initial}
    </div>
  );
}

type ReviewCardProps = {
  review: (typeof reviews)[number];
  index: number;
  expanded: boolean;
  onToggle: () => void;
};

function ReviewCard({ review, index, expanded, onToggle }: ReviewCardProps) {
  const isTruncatable = review.text.length > CLAMP_CHAR_THRESHOLD;

  return (
    <motion.article
      variants={fadeSlideUp}
      whileHover={{
        rotateX: 5,
        y: -4,
        backgroundColor: HOVER_CARD_BG,
        borderColor: HOVER_CARD_BORDER,
        boxShadow: HOVER_CARD_SHADOW,
      }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 28,
        mass: 0.85,
      }}
      className="flex origin-center cursor-default flex-col rounded-3xl border border-[#0B172A]/10 bg-white/90 p-6 shadow-[0_10px_30px_rgba(11,23,42,0.07)] backdrop-blur-[2px] transform-gpu [transform-style:preserve-3d]"
    >
      <header className="flex items-start gap-3">
        <ReviewAvatar review={review} />
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-2">
            <p className="truncate text-[15px] font-semibold text-[#0B172A]">{review.name}</p>
            <BadgeCheck
              className="h-3.5 w-3.5 shrink-0 text-[#991B1B]"
              aria-label="Verified client"
            />
          </div>
          <p className="mt-1 text-xs font-medium text-[#0B172A]/55">
            {review.category} - {review.date}
          </p>
        </div>
      </header>

      <div className="mt-4 flex items-center gap-2.5">
        <StarRating rating={review.rating} />
        <span className="text-xs font-semibold text-[#0B172A]/55">{review.rating.toFixed(1)}</span>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p
          id={`review-text-${index}`}
          className={`text-sm leading-relaxed text-[#0B172A]/75 transition-all duration-300 md:text-base ${
            isTruncatable && !expanded ? "line-clamp-4" : ""
          }`}
        >
          &ldquo;{review.text}&rdquo;
        </p>

        {isTruncatable ? (
          <button
            type="button"
            onClick={onToggle}
            className="pt-2 text-left text-sm font-semibold text-[#991B1B] underline-offset-4 hover:underline"
            aria-expanded={expanded}
            aria-controls={`review-text-${index}`}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        ) : null}
      </div>

      <footer className="mt-auto flex items-center justify-end border-t border-[#0B172A]/8 pt-4">
        <span className="text-[11px] font-medium text-[#0B172A]/50">Verified review</span>
      </footer>
    </motion.article>
  );
}

const HubTestimonialsSection = forwardRef<HTMLElement>(
  function HubTestimonialsSection(_, ref) {
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const gridRef = useRef<HTMLDivElement>(null);
    const cardsInView = useInView(gridRef, {
      once: true,
      amount: 0.05,
      initial: true,
    });

    const toggleExpanded = (index: number) => {
      setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
      <section ref={ref} id="stories" className="relative scroll-mt-24 py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative z-10 mx-auto max-w-7xl px-4 text-center"
        >
          <motion.span
            variants={fadeSlideUp}
            className="relative z-10 inline-block rounded-full bg-[#991B1B] px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#FDFAFA]"
          >
            We&apos;re seeing stars
          </motion.span>

          <motion.h2
            variants={fadeSlideUp}
            className={`relative z-10 mx-auto mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#0B172A] md:text-7xl ${sora.className}`}
          >
            Stories like these are{" "}
            <span className="inline-block bg-gradient-to-r from-[#7F1111] via-[#991B1B] to-[#B42323] bg-clip-text text-transparent">
              why we exist
            </span>
          </motion.h2>

          <motion.p
            variants={fadeSlideUp}
            className="relative z-10 mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600"
          >
            Every client came to us tired of{" "}
            <span className="rounded bg-[#991B1B]/10 px-1">leads going cold</span>,{" "}
            <span className="rounded bg-[#991B1B]/10 px-1">
              budgets disappearing into thin air
            </span>
            , and{" "}
            <span className="rounded bg-[#991B1B]/10 px-1">
              watching competitors win deals they should have lost
            </span>
            . They were not failing because they{" "}
            <span className="rounded bg-[#991B1B]/10 px-1">lacked ambition</span>. They were
            failing because they lacked{" "}
            <span className="rounded bg-[#991B1B]/10 px-1">the right system</span>.{" "}
            <span className="font-semibold text-[#991B1B]">
              We built that system. We fixed that problem. We do it every single time.
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 overflow-visible px-4 [perspective:1200px] md:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${index}`}
              review={review}
              index={index}
              expanded={Boolean(expanded[index])}
              onToggle={() => toggleExpanded(index)}
            />
          ))}
        </motion.div>
      </section>
    );
  },
);

export default HubTestimonialsSection;
