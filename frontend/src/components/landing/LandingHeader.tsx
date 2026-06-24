import { LogoLink } from "@/components/landing/Logo";

export default function LandingHeader() {
  return (
    <header className="section-x border-b border-white/10 bg-brand-navy py-4 sm:py-5">
      <div className="mx-auto flex max-w-6xl justify-center">
        <LogoLink
          variant="full"
          className="hidden h-8 max-w-[min(100%,18rem)] w-auto sm:h-9 md:block md:h-10 md:max-w-[min(100%,22rem)]"
        />
        <LogoLink
          variant="mark"
          className="h-9 w-auto max-w-[3.5rem] sm:h-10 md:hidden"
        />
      </div>
    </header>
  );
}
