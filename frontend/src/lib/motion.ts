import type { Transition, Variants } from "framer-motion";

export const springReveal: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 28,
  mass: 0.8,
};

export const snapHover = { duration: 0.15, ease: "easeOut" as const };

export const revealUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: springReveal,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const fadeSlideUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: springReveal,
  },
};

export const checkPop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 22,
    },
  },
};

export const slideDown: Variants = {
  hidden: { y: -48, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 500, damping: 35 },
  },
};

export const heartbeat = {
  scale: [1, 1.03, 1] as [number, number, number],
  transition: {
    repeat: Infinity,
    duration: 1.5,
    ease: "easeInOut" as const,
  },
};

export const float = {
  y: [0, -5, 0] as [number, number, number],
  transition: {
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut" as const,
  },
};

export const viewportOnce = { once: true, amount: 0.2 as const };
