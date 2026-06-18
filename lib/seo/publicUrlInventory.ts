import { SITE_URL } from "../site";
import { services, servicePath } from "../data/services";
import { caseTypes, caseTypePath } from "../data/case-types";
import { practiceAreas } from "../data/practice-areas";
import { insights } from "../data/insights";

/** Paths indexed in sitemap (no trailing slash). */
export const APP_STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  ...services.map((s) => servicePath(s.id)),
  "/case-types",
  ...caseTypes.map((c) => caseTypePath(c.slug)),
  "/practice-areas",
  ...practiceAreas.map((p) => `/practice-areas/${p.slug}`),
  "/case-studies",
  "/qualifications-accreditations",
  "/how-we-work",
  "/insights",
  ...insights.map((i) => `/insights/${i.slug}`),
] as const;

/** Valid routes excluded from sitemap (noindex or utility) */
export const NON_INDEX_PATHS = [
  "/thank-you",
  "/privacy",
  "/terms",
  "/cookies",
  "/contact",
  "/fees",
] as const;

export type PublicUrlInventory = {
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(): PublicUrlInventory {
  const paths = [...new Set(APP_STATIC_PATHS)].sort();
  const allUrls = paths.map((p) =>
    p === "/" ? SITE_URL : `${SITE_URL}${p}`
  );
  return { allPaths: paths, allUrls };
}

export function getSitemapPriority(path: string): number {
  if (path === "/") return 1.0;
  if (
    path === "/about" ||
    path === "/services" ||
    path.startsWith("/services/")
  )
    return 0.9;
  if (path === "/case-types" || path.startsWith("/case-types/")) return 0.88;
  if (path === "/practice-areas" || path.startsWith("/practice-areas/"))
    return path === "/practice-areas" ? 0.88 : 0.85;
  if (
    path === "/case-studies" ||
    path === "/how-we-work" ||
    path === "/qualifications-accreditations"
  )
    return 0.87;
  if (path === "/insights") return 0.85;
  if (path.startsWith("/insights/")) return 0.8;
  if (path === "/cookies" || path === "/privacy" || path === "/terms")
    return 0.3;
  return 0.7;
}

export function getSitemapChangeFreq(
  path: string
): "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" {
  if (path === "/" || path === "/insights") return "weekly";
  if (path === "/privacy" || path === "/terms" || path === "/cookies")
    return "yearly";
  return "monthly";
}
