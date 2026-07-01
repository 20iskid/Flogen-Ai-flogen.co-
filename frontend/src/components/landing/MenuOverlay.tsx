"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FlogenLogo from "@/components/landing/FlogenLogo";
import { MENU_LINKS } from "@/lib/site/navigation";

const linkClass =
  "block text-center font-black uppercase leading-[0.88] tracking-tighter transition-all duration-300 ease-out text-[clamp(1.5rem,5.2vmin,3.75rem)] sm:text-[clamp(1.65rem,4.8vmin,4.5rem)] md:text-[clamp(1.85rem,4.2vmin,5.25rem)] lg:text-[clamp(2rem,3.5vw,6rem)]";

type MenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setHoveredIndex(null);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          key="menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[200] flex flex-col bg-[#0B172A]/90 backdrop-blur-3xl"
          style={{
            height: "100svh",
            maxHeight: "100dvh",
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <header className="relative z-10 flex w-full shrink-0 items-center justify-between px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-5">
            <div className="flex flex-1 items-center justify-start">
              <span className="hidden w-[4.5rem] sm:inline sm:w-[5.5rem]" aria-hidden />
            </div>

            <div className="flex flex-none items-center justify-center">
              <Link
                href="/"
                onClick={handleClose}
                className="inline-flex max-w-full shrink-0 justify-center"
              >
                <FlogenLogo className="h-8 w-auto max-w-[9rem] sm:h-10 sm:max-w-[11rem] md:h-12 md:max-w-[14rem] lg:h-14 lg:max-w-[16rem]" />
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#FDFAFA] transition-colors hover:text-[#991B1B] sm:text-sm md:text-base"
                aria-label="Close menu"
              >
                <span className="hidden sm:inline">Close</span>
                <X className="h-6 w-6 stroke-[2.5] transition-colors group-hover:text-[#991B1B] sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </button>
            </div>
          </header>

          <nav
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex w-full flex-col items-center gap-0.5 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[clamp(0.5rem,4vh,3rem)] sm:gap-1 sm:pb-[max(2rem,env(safe-area-inset-bottom))] md:gap-1.5 md:pb-10">
              {MENU_LINKS.map((link, index) => {
                const isHovered = hoveredIndex === index;
                const isDimmed =
                  hoveredIndex !== null && hoveredIndex !== index;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                      delay: 0.06 + index * 0.08,
                    }}
                    className="w-full shrink-0"
                  >
                    <Link
                      href={link.href}
                      onClick={handleClose}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className={`${linkClass} ${
                        isHovered
                          ? "text-[#991B1B] opacity-100 blur-none grayscale-0"
                          : isDimmed
                            ? "text-[#FDFAFA] opacity-20 blur-md grayscale"
                            : "text-[#FDFAFA] opacity-100 blur-none grayscale-0"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
