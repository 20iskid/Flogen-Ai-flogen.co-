import Link from "next/link";

type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
};

const sources = {
  full: { src: "/logos/flogen-logo.svg", alt: "Flogen" },
  mark: { src: "/logos/flogen-mark.svg", alt: "Flogen mark" },
} as const;

export default function Logo({ variant = "full", className = "" }: LogoProps) {
  const { src, alt } = sources[variant];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  );
}

type LogoLinkProps = LogoProps & {
  href?: string;
};

export function LogoLink({
  variant = "full",
  className = "",
  href = "/",
}: LogoLinkProps) {
  return (
    <Link href={href} className="inline-flex shrink-0">
      <Logo variant={variant} className={className} />
    </Link>
  );
}
