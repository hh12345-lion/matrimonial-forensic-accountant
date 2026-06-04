import { SITE_URL, SITE_NAME, SITE_EMAIL } from "./site";
import { getOrganizationSameAs } from "./seo/sameAs";
import { services as siteServices, servicePath } from "./data/services";
import type { FAQ } from "./data/faq";

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data) };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqPageSchema(faqs: FAQ[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

const schemaServices = siteServices.map((s) => ({
  id: s.id,
  name: s.title,
  description: s.description,
  url: `${SITE_URL}${servicePath(s.id)}`,
}));

export function servicePageSchema(serviceId: string) {
  const service = siteServices.find((s) => s.id === serviceId);
  if (!service) return null;
  const url = `${SITE_URL}${servicePath(serviceId)}`;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.description,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United Kingdom",
  };
}

export function homepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "UK specialist matrimonial forensic accounting practice providing FPR Part 25 expert witness reports, business valuations, and financial investigations for family proceedings.",
        inLanguage: "en-GB",
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/insights?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
        },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        description:
          "UK specialist matrimonial forensic accounting practice providing FPR Part 25 expert witness reports, business valuations, and financial investigations for family proceedings.",
        sameAs: getOrganizationSameAs(),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professional-service`,
        name: SITE_NAME,
        url: SITE_URL,
        serviceType: "Matrimonial Forensic Accounting",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "United Kingdom",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Forensic Accounting Services",
          itemListElement: schemaServices.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              "@id": `${s.url}#service`,
              name: s.name,
              description: s.description,
              url: s.url,
              provider: { "@id": `${SITE_URL}/#organization` },
            },
          })),
        },
      },
    ],
  };
}

export function servicesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": schemaServices.map((s) => ({
      "@type": "Service",
      "@id": `${s.url}#service`,
      name: s.name,
      description: s.description,
      url: s.url,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: "United Kingdom",
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = `${SITE_URL}/insights/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "en-GB",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
