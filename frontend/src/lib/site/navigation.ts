export type SiteNavLink = {
  label: string;
  href: string;
};

/** Primary site pages — single source of truth for menu & footer */
export const SITE_NAV = {
  home: { label: "Home", href: "/" },
  audit: { label: "Audit", href: "/audit" },
  ourSystem: { label: "Our System", href: "/our-accomplishments" },
  about: { label: "About", href: "/about-us" },
  stories: { label: "Stories", href: "/reviews" },
  careers: { label: "Careers", href: "/careers" },
  industries: { label: "Industries", href: "/#industries" },
  terms: { label: "Terms of Service", href: "/terms" },
  privacy: { label: "Privacy Policy", href: "/privacy" },
} as const satisfies Record<string, SiteNavLink>;

/** Full-screen menu — every inner page + homepage sections */
export const MENU_LINKS: SiteNavLink[] = [
  SITE_NAV.home,
  SITE_NAV.audit,
  SITE_NAV.ourSystem,
  SITE_NAV.about,
  SITE_NAV.stories,
  SITE_NAV.careers,
  SITE_NAV.industries,
];

/** Footer company column */
export const FOOTER_COMPANY_LINKS: SiteNavLink[] = [
  SITE_NAV.home,
  SITE_NAV.about,
  SITE_NAV.ourSystem,
  SITE_NAV.stories,
  SITE_NAV.careers,
  { label: "Book Audit", href: SITE_NAV.audit.href },
];

export const FOOTER_LEGAL_LINKS: SiteNavLink[] = [
  SITE_NAV.terms,
  SITE_NAV.privacy,
];
