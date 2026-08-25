export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.matrimonialforensicaccountant.com";

export const SITE_NAME = "Matrimonial Forensic Accountant";

export const SITE_EMAIL = "contact@matrimonialforensicaccountant.com";

/** Hostname for lead webhooks (e.g. matrimonialforensicaccountant.com). */
export function getSiteDomain(): string {
  try {
    return new URL(SITE_URL).hostname.replace(/^www\./, "");
  } catch {
    return "matrimonialforensicaccountant.com";
  }
}

/** Shown in copy and schema: practice is UK-only (England & Wales family courts). */
export const SITE_REGION =
  "United Kingdom (England and Wales family proceedings)";

export const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ??
  "https://www.linkedin.com/company/matrimonial-forensic-accountant";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const CTA_LABEL = "Enquire";

export const caseTypeSlugs = [
  "business-valuation-divorce",
  "hidden-assets-investigation",
  "lifestyle-analysis-income",
  "form-e-financial-disclosure",
  "add-backs-financial-reconstruction",
  "self-employed-income-assessment",
  "schedule-1-children-act",
  "tolata-cohabitation",
  "overseas-assets-trusts",
  "high-net-worth-divorce",
] as const;
