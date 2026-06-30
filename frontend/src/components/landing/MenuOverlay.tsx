"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "@/components/landing/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Audit", href: "/audit" },
  { label: "Industries", href: "#industries" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "/audit" },
] as const;

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
          className="fixed inset-0 z-[200] bg-[#0B172A]/90 backdrop-blur-3xl"
        >
          <div className="flex h-full min-h-[100dvh] flex-col">
            <header className="relative z-10 flex w-full shrink-0 items-center justify-between px-3 py-4 sm:px-4 sm:py-5 md:px-8 md:py-6">
              <div className="flex flex-1 items-center justify-start">
                <span className="hidden w-[4.5rem] sm:inline sm:w-[5.5rem]" aria-hidden />
              </div>

              <div className="flex flex-none items-center justify-center">
                <Link
                  href="/"
                  onClick={handleClose}
                  className="inline-flex max-w-full shrink-0 justify-center"
                >
                  <Logo
                    variant="full"
                    className="h-10 w-auto max-w-[10.5rem] brightness-0 invert sm:h-14 sm:max-w-[15rem] lg:h-[4.5rem] lg:max-w-[19rem]"
                  />
                </Link>
              </div>

              <div className="flex flex-1 items-center justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="group flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#FDFAFA] transition-colors hover:text-[#991B1B] sm:text-base"
                  aria-label="Close menu"
                >
                  <span className="hidden sm:inline">Close</span>
                  <X className="h-7 w-7 stroke-[2.5] transition-colors group-hover:text-[#991B1B] sm:h-8 sm:w-8" />
                </button>
              </div>
            </header>

            <nav
              className="flex flex-1 flex-col items-center justify-center gap-4 px-4 pb-16 md:gap-8"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {NAV_LINKS.map((link, index) => {
                const isHovered = hoveredIndex === index;
                const isDimmed =
                  hoveredIndex !== null && hoveredIndex !== index;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                      delay: 0.08 + index * 0.1,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleClose}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className={`block text-center text-5xl font-black uppercase leading-none tracking-tighter transition-all duration-300 ease-out md:text-8xl lg:text-[9rem] ${
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
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
