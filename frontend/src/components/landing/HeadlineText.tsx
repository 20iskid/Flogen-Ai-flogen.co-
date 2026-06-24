"use client";

import type { HeadlineSegment } from "@/lib/landing/types";

export function renderHeadlineSegment(
  segment: HeadlineSegment,
  key: number
) {
  const className =
    segment.variant === "highlight"
      ? "text-brand-red"
      : segment.variant === "muted"
        ? "text-brand-white/90"
        : undefined;

  if (className) {
    return (
      <span key={key} className={className}>
        {segment.text}
      </span>
    );
  }

  return <span key={key}>{segment.text}</span>;
}
