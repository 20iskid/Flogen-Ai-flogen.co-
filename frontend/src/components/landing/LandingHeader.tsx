import { LogoLink } from "@/components/landing/Logo";

export default function LandingHeader() {
  return (
    <header className="border-b border-white/10 bg-brand-navy px-6 py-5">
      <div className="mx-auto flex max-w-6xl justify-center">
        <LogoLink
          variant="full"
          className="hidden h-9 w-auto md:block md:h-10"
        />
        <LogoLink
          variant="mark"
          className="h-10 w-auto md:hidden"
        />
      </div>
    </header>
  );
}
