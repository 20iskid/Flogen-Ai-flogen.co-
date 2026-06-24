import { LogoLink } from "@/components/landing/Logo";

export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-x bg-brand-navy py-10 text-brand-white sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:gap-6 lg:flex-row lg:justify-between lg:text-left">
        <LogoLink
          variant="full"
          className="h-7 w-auto max-w-[min(100%,16rem)] sm:h-8 lg:max-w-[min(100%,18rem)]"
        />

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-brand-white/50 sm:gap-8">
          <a href="/about-us" className="transition-colors hover:text-brand-white">
            About
          </a>
          <a href="/careers" className="transition-colors hover:text-brand-white">
            Careers
          </a>
          <a href="/audit" className="transition-colors hover:text-brand-white">
            Audit
          </a>
        </nav>

        <p className="text-xs text-brand-white/40 sm:text-sm">
          &copy; {year} Flogen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
