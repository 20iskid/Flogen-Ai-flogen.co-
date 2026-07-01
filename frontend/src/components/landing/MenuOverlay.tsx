"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FlogenLogo from "@/components/landing/FlogenLogo";
import { MENU_LINKS } from "@/lib/site/navigation";

const linkClass =
  "hub-menu-link font-black uppercase tracking-tighter transition-all duration-300 ease-out";

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
          className="fixed inset-0 z-[200] flex h-[100dvh] max-h-[100dvh] flex-col bg-[#0B172A]/90 backdrop-blur-3xl"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <header className="relative z-10 flex w-full shrink-0 items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 md:px-8 md:py-4">
            <div className="flex flex-1 items-center justify-start">
              <span className="hidden w-[4.5rem] sm:inline sm:w-[5.5rem]" aria-hidden />
            </div>

            <div className="flex flex-none items-center justify-center">
              <Link
                href="/"
                onClick={handleClose}
                className="inline-flex max-w-full shrink-0 justify-center"
              >
                <FlogenLogo className="h-8 w-auto max-w-[9rem] sm:h-10 sm:max-w-[11rem] md:h-11 md:max-w-[13rem]" />
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#FDFAFA] transition-colors hover:text-[#991B1B] sm:text-sm"
                aria-label="Close menu"
              >
                <span className="hidden sm:inline">Close</span>
                <X className="h-6 w-6 stroke-[2.5] transition-colors group-hover:text-[#991B1B] sm:h-7 sm:w-7" />
              </button>
            </div>
          </header>

          <nav
            className="flex min-h-0 flex-1 flex-col overflow-hidden px-3 sm:px-4 md:px-8"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {MENU_LINKS.map((link, index) => {
              const isHovered = hoveredIndex === index;
              const isDimmed =
                hoveredIndex !== null && hoveredIndex !== index;

              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 28,
                    delay: 0.04 + index * 0.05,
                  }}
                  className="hub-menu-row"
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
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
