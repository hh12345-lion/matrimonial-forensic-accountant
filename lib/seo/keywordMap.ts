/**
 * Keyword-to-URL mapping for internal linking and content planning.
 */

export type KeywordTier = "branded" | "transactional" | "informational" | "practice-area";

export type KeywordMapping = {
  tier: KeywordTier;
  keywords: string[];
  primaryUrls: string[];
  secondaryUrls: string[];
};

export const KEYWORD_MAPPINGS: KeywordMapping[] = [
  {
    tier: "branded",
    keywords: [
      "Matrimonial Forensic Accountant",
      "matrimonial forensic accountant UK",
      "matrimonialforensicaccountant.com",
    ],
    primaryUrls: ["/"],
    secondaryUrls: ["/about", "/services", "/contact"],
  },
  {
    tier: "transactional",
    keywords: [
      "matrimonial forensic accountant expert witness UK",
      "forensic accountant divorce UK",
      "family court forensic accountant UK",
    ],
    primaryUrls: ["/services/expert-witness", "/services"],
    secondaryUrls: ["/practice-areas", "/contact"],
  },
  {
    tier: "informational",
    keywords: [
      "business valuation divorce expert",
      "hidden assets divorce forensic accountant",
    ],
    primaryUrls: [
      "/insights/instructing-matrimonial-forensic-accountant",
      "/insights/business-valuation-divorce-guide",
      "/faq",
    ],
    secondaryUrls: ["/services/expert-witness"],
  },
];

export function getUrlsForPracticeAreaSlug(slug: string): {
  primary: string;
  services: string[];
  insights: string[];
} {
  const map: Record<string, { services: string[]; insights: string[] }> = {
    "financial-remedy-divorce": {
      services: ["/services/expert-witness", "/services/business-valuation"],
      insights: ["business-valuation-divorce-guide"],
    },
    "business-valuation-matrimonial": {
      services: ["/services/business-valuation", "/services/expert-witness"],
      insights: ["business-valuation-divorce-guide"],
    },
    "hidden-assets-undisclosed-income": {
      services: ["/services/hidden-assets", "/services/income-lifestyle"],
      insights: ["hidden-assets-divorce-guide"],
    },
    "schedule-1-children-act": {
      services: ["/services/expert-witness"],
      insights: ["instructing-matrimonial-forensic-accountant"],
    },
    "tolata-cohabitation": {
      services: ["/services/expert-witness"],
      insights: [],
    },
    "high-net-worth-complex-matrimonial": {
      services: ["/services/expert-witness", "/services/hidden-assets"],
      insights: ["business-valuation-divorce-guide"],
    },
  };

  const entry = map[slug] ?? {
    services: ["/services/expert-witness"],
    insights: [],
  };
  return {
    primary: `/practice-areas/${slug}`,
    services: entry.services,
    insights: entry.insights.map((s) => `/insights/${s}`),
  };
}
