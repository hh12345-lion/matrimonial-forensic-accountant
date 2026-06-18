import { services, servicePath } from "../data/services";
import { practiceAreas } from "../data/practice-areas";
import { insights } from "../data/insights";
import { getUrlsForPracticeAreaSlug } from "./keywordMap";

export type InternalLink = { href: string; label: string };

export function getHomepageInternalLinks(): {
  services: InternalLink[];
  practiceAreas: InternalLink[];
  insights: InternalLink[];
} {
  return {
    services: services.slice(0, 4).map((s) => ({
      href: servicePath(s.id),
      label: s.title,
    })),
    practiceAreas: practiceAreas.slice(0, 4).map((p) => ({
      href: `/practice-areas/${p.slug}`,
      label: p.title,
    })),
    insights: insights.slice(0, 2).map((i) => ({
      href: `/insights/${i.slug}`,
      label: i.title,
    })),
  };
}

export function getPracticeAreaRelatedLinks(slug: string): {
  services: InternalLink[];
  insights: InternalLink[];
  other: InternalLink[];
} {
  const urls = getUrlsForPracticeAreaSlug(slug);
  return {
    services: urls.services.map((href) => {
      const match = services.find((s) => servicePath(s.id) === href);
      return { href, label: match?.title ?? "Related service" };
    }),
    insights: urls.insights.map((href) => {
      const slugPart = href.split("/").pop()!;
      const article = insights.find((x) => x.slug === slugPart);
      return { href, label: article?.title ?? "Related insight" };
    }),
    other: [
      { href: "/case-studies", label: "Case studies" },
      { href: "/how-we-work", label: "How we work" },
      { href: "/contact", label: "Contact us" },
    ],
  };
}

export function getInsightRelatedLinks(articleSlug: string): InternalLink[] {
  const map: Record<string, InternalLink[]> = {
    "instructing-matrimonial-forensic-accountant": [
      { href: "/services/expert-witness", label: "Expert witness reports" },
      { href: "/how-we-work", label: "How we work" },
      { href: "/practice-areas/financial-remedy-divorce", label: "Financial remedy" },
    ],
    "business-valuation-divorce-guide": [
      {
        href: "/practice-areas/business-valuation-matrimonial",
        label: "Business valuation",
      },
      { href: "/services/business-valuation", label: "Business valuation service" },
    ],
    "hidden-assets-divorce-guide": [
      {
        href: "/practice-areas/hidden-assets-undisclosed-income",
        label: "Hidden assets",
      },
      { href: "/services/hidden-assets", label: "Hidden asset investigation" },
    ],
    "choosing-single-joint-expert-family": [
      { href: "/services/expert-witness", label: "Expert witness reports" },
      {
        href: "/practice-areas/financial-remedy-divorce",
        label: "Financial remedy",
      },
    ],
  };
  return (
    map[articleSlug] ?? [
      { href: "/services", label: "Our services" },
      { href: "/contact", label: "Contact us" },
    ]
  );
}
