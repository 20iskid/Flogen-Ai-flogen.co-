"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";
import BaseLandingPage from "@/components/landing/BaseLandingPage";
import SplashLoader from "@/components/landing/SplashLoader";
import type { HubLandingContent } from "@/lib/landing/types";

const SPLASH_SEEN_KEY = "flogen-splash-seen";
const SPLASH_DURATION_MS = 1800;

type SplashLandingPageProps = {
  content: HubLandingContent;
};

export default function SplashLandingPage({ content }: SplashLandingPageProps) {
  const [isSplashing, setIsSplashing] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(SPLASH_SEEN_KEY)) {
      setIsSplashing(false);
      return;
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SPLASH_SEEN_KEY, "1");
      setIsSplashing(false);
    }, SPLASH_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <LayoutGroup id="flogen-splash">
      <motion.div
        initial={false}
        animate={{ opacity: isSplashing ? 0 : 1 }}
        transition={{ duration: 0.5, delay: isSplashing ? 0 : 0.15 }}
        className={isSplashing ? "pointer-events-none" : undefined}
        aria-hidden={isSplashing}
      >
        <BaseLandingPage content={content} splashComplete={!isSplashing} />
      </motion.div>

      <AnimatePresence mode="popLayout">
        {isSplashing ? <SplashLoader key="splash" /> : null}
      </AnimatePresence>
    </LayoutGroup>
  );
}
