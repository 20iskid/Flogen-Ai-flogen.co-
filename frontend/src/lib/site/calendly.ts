/** CEO audit booking — override via NEXT_PUBLIC_CALENDLY_URL in env */
const BASE_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/flogen/free-audit";

const THEME_PARAMS = new URLSearchParams({
  hide_gdpr_banner: "1",
  hide_event_type_details: "1",
  background_color: "fdfafa",
  text_color: "0b172a",
  primary_color: "991b1b",
});

export const CEO_CALENDLY_URL = BASE_URL;

export function getCalendlyEmbedUrl() {
  const separator = BASE_URL.includes("?") ? "&" : "?";
  return `${BASE_URL}${separator}${THEME_PARAMS.toString()}`;
}
