import { LogoLink } from "@/components/landing/Logo";

export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy px-6 py-12 text-brand-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <LogoLink variant="full" className="h-8 w-auto sm:h-9" />

        <div className="flex gap-8 text-sm text-brand-white/50">
          <a href="/about-us" className="transition-colors hover:text-brand-white">
            About
          </a>
          <a href="/careers" className="transition-colors hover:text-brand-white">
            Careers
          </a>
          <a href="/audit" className="transition-colors hover:text-brand-white">
            Audit
          </a>
        </div>

        <p className="text-sm text-brand-white/40">
          &copy; {year} Flogen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
