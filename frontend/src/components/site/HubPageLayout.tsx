import type { ReactNode } from "react";
import LandingFooter from "@/components/landing/LandingFooter";
import SiteHeader from "@/components/site/SiteHeader";

type HubPageLayoutProps = {
  children: ReactNode;
  headerTone?: "dark" | "light";
};

export default function HubPageLayout({
  children,
  headerTone = "dark",
}: HubPageLayoutProps) {
  return (
    <div className="overflow-x-clip bg-[#FDFAFA]">
      <SiteHeader tone={headerTone} />
      {children}
      <LandingFooter />
    </div>
  );
}
