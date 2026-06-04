import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  nofollow?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  nofollow = false,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
  };
}

/** Homepage title per SEO-ARCHITECTURE.md Appendix A */
export const HOME_TITLE =
  "Matrimonial Forensic Accountant | Expert Witness & Family Forensic Accounting UK";
