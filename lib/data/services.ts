import type { FAQ } from "./faq";

export type ServiceContentBlock =
  | { type: "prose"; heading?: string; paragraphs: string[] }
  | { type: "list"; heading: string; items: string[] }
  | {
      type: "table";
      heading: string;
      columns: string[];
      rows: string[][];
    };

export type Service = {
  id: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  blocks: ServiceContentBlock[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    id: "expert-witness",
    title: "Expert Witness Reports",
    description:
      "FPR Part 25 compliant expert reports for financial remedy, Schedule 1, and TOLATA proceedings.",
    metaTitle: "Expert Witness Reports | Matrimonial Forensic Accountant UK",
    metaDescription:
      "FPR Part 25 compliant expert witness reports for financial remedy and family proceedings. Single joint expert appointments available.",
    blocks: [
      {
        type: "prose",
        heading: "FPR Part 25 Compliant Expert Reports",
        paragraphs: [
          "All Matrimonial Forensic Accountant expert reports comply with FPR Part 25 and Practice Direction 25A for family proceedings. Our reports include a statement of truth where required and reflect our primary duty to the court.",
        ],
      },
      {
        type: "prose",
        heading: "Single Joint Expert (SJE) Appointments",
        paragraphs: [
          "We are available for SJE appointments under FPR 25.11, jointly instructed by both parties. We understand the joint letter of instruction format and the written questions process in financial remedy proceedings.",
        ],
      },
      {
        type: "list",
        heading: "What Our Expert Reports Cover",
        items: [
          "Matrimonial business and share valuation",
          "Form E review and financial disclosure analysis",
          "Income analysis, add-backs, and lifestyle benchmarking",
          "Hidden asset and undisclosed income findings",
          "Schedule 1 income and capital assessments",
          "TOLATA contribution and financial history analysis",
        ],
      },
      {
        type: "prose",
        heading: "Our Duty to the Court",
        paragraphs: [
          "Our duty is to the court, not to the party instructing us. We advise instructing solicitors promptly if our preliminary view may be adverse, because early advice is more useful than a late surprise.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are your family court expert reports FPR Part 25 compliant?",
        answer:
          "Yes. All family court expert reports comply with FPR Part 25 and Practice Direction 25A, including a statement of truth where required. Our primary duty is to the court.",
      },
      {
        question: "Do you accept single joint expert appointments?",
        answer:
          "Yes. We accept SJE appointments under FPR 25.11 in financial remedy and related family proceedings, jointly instructed by both parties.",
      },
    ],
  },
  {
    id: "business-valuation",
    title: "Business Valuation",
    description:
      "Matrimonial business valuations with personal and transferable goodwill analysis and liquidity assessment.",
    metaTitle: "Business Valuation in Divorce | Matrimonial Forensic Accountant UK",
    metaDescription:
      "Matrimonial business valuations for financial remedy proceedings. Personal and transferable goodwill, liquidity analysis, and FPR Part 25 compliant reports.",
    blocks: [
      {
        type: "prose",
        heading: "Matrimonial Business Valuation",
        paragraphs: [
          "Business valuation in divorce requires adjustments that do not arise in commercial valuations. We address personal versus transferable goodwill, maintainable earnings, and whether the business can fund a lump sum or maintenance order.",
        ],
      },
      {
        type: "list",
        heading: "Our Valuation Approach",
        items: [
          "Maintainable earnings for trading businesses",
          "Net asset value for property or investment vehicles",
          "Discounted cash flow where appropriate to growth companies",
          "Liquidity analysis for lump sum orders",
          "Clear explanation of methodology for the Family Court",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you approach goodwill in matrimonial valuations?",
        answer:
          "We distinguish personal goodwill from transferable goodwill and explain the impact on the matrimonial valuation conclusion in terms the court can follow.",
      },
      {
        question: "Can you value multiple businesses in one instruction?",
        answer:
          "Yes. We value multiple entities where required, addressing cross-guarantees, shared overheads, and the appropriate methodology for each business.",
      },
    ],
  },
  {
    id: "form-e-review",
    title: "Form E Review & Analysis",
    description:
      "Forensic review of Form E financial disclosure, identifying inconsistencies and matters requiring clarification.",
    metaTitle: "Form E Review & Analysis | Matrimonial Forensic Accountant UK",
    metaDescription:
      "Forensic Form E review for family proceedings. Identify inconsistencies, undisclosed matters, and issues requiring further disclosure.",
    blocks: [
      {
        type: "prose",
        heading: "Forensic Form E Review",
        paragraphs: [
          "We conduct detailed forensic review of Form E financial disclosure and supporting documents, identifying inconsistencies between declared assets, income, and expenditure and the underlying financial records.",
        ],
      },
      {
        type: "list",
        heading: "What We Review",
        items: [
          "Form E sections and supporting documents",
          "Bank statements and credit card records",
          "Business accounts and tax returns",
          "Property and investment holdings",
          "Matters requiring clarification or further disclosure",
        ],
      },
    ],
    faqs: [
      {
        question: "When is a Form E forensic review appropriate?",
        answer:
          "A forensic review is appropriate where disclosure appears incomplete, inconsistent, or where specific assets or income require expert analysis before FDR or final hearing.",
      },
      {
        question: "Can Form E review support a non-disclosure application?",
        answer:
          "Yes. Our analysis can identify matters supporting requests for further disclosure or specific issue directions, subject to the court's case management decisions.",
      },
    ],
  },
  {
    id: "hidden-assets",
    title: "Hidden Asset Investigation",
    description:
      "Independent investigation of undisclosed assets, income, and lifestyle inconsistencies in family proceedings.",
    metaTitle: "Hidden Asset Investigation | Matrimonial Forensic Accountant UK",
    metaDescription:
      "Forensic investigation of hidden assets and undisclosed income in divorce and financial remedy proceedings. LPP when instructed via solicitors.",
    blocks: [
      {
        type: "prose",
        heading: "Independent Matrimonial Investigations",
        paragraphs: [
          "We conduct proportionate forensic investigations for family law solicitors, working under legal professional privilege where required to protect findings from premature disclosure.",
        ],
      },
      {
        type: "list",
        heading: "What We Investigate",
        items: [
          "Suspected undisclosed bank accounts and investments",
          "Income inconsistent with declared Form E position",
          "Related-party transactions and unexplained transfers",
          "Offshore structures and trust holdings",
          "Lifestyle expenditure inconsistent with declared resources",
          "Pre-FDR fact-finding before specific issue directions",
        ],
      },
      {
        type: "prose",
        heading: "Legal Professional Privilege",
        paragraphs: [
          "When instructed via a solicitor, investigation reports attract legal professional privilege until the client decides to deploy them in proceedings.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can investigation findings be protected from disclosure?",
        answer:
          "When instructed via solicitors, reports attract legal professional privilege until the client decides to disclose, allowing informed assessment before committing to a course of action.",
      },
      {
        question: "How long does a preliminary hidden asset investigation take?",
        answer:
          "Preliminary assessments typically take one to two weeks depending on document volume. We agree scope at the outset to keep the investigation proportionate.",
      },
    ],
  },
  {
    id: "income-lifestyle",
    title: "Income & Lifestyle Analysis",
    description:
      "Income reconstruction, add-backs, and lifestyle benchmarking for maintenance and financial remedy claims.",
    metaTitle: "Income & Lifestyle Analysis | Matrimonial Forensic Accountant UK",
    metaDescription:
      "Income reconstruction and lifestyle analysis for financial remedy and maintenance claims in UK family proceedings.",
    blocks: [
      {
        type: "prose",
        heading: "Income Reconstruction",
        paragraphs: [
          "We reconstruct maintainable income from business accounts, tax returns, and bank records, addressing director remuneration, dividends, trust distributions, and complex remuneration structures.",
        ],
      },
      {
        type: "prose",
        heading: "Lifestyle Analysis",
        paragraphs: [
          "Where declared income is inconsistent with identified expenditure, we benchmark lifestyle against financial records to identify matters requiring explanation or add-back.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is lifestyle analysis in financial remedy proceedings?",
        answer:
          "Lifestyle analysis compares declared income and resources against identified expenditure and asset acquisition, highlighting inconsistencies that may indicate undisclosed income or assets.",
      },
      {
        question: "Can you analyse self-employed income for maintenance claims?",
        answer:
          "Yes. We establish maintainable income from business records, addressing add-backs and the distinction between business and personal resources.",
      },
    ],
  },
  {
    id: "add-backs",
    title: "Add-backs & Financial Reconstruction",
    description:
      "Forensic reconstruction of maintainable income and identification of discretionary expenditure add-backs.",
    metaTitle: "Add-backs & Financial Reconstruction | Matrimonial Forensic Accountant UK",
    metaDescription:
      "Forensic add-backs and income reconstruction for matrimonial proceedings. Identify discretionary expenditure and establish maintainable income.",
    blocks: [
      {
        type: "prose",
        heading: "Add-backs and Income Reconstruction",
        paragraphs: [
          "We identify discretionary expenditure and accounting adjustments that should be added back to establish maintainable income for periodical payments and financial remedy claims.",
        ],
      },
      {
        type: "list",
        heading: "Common Add-back Categories",
        items: [
          "Excessive director remuneration",
          "Personal expenses through the business",
          "Related-party transactions",
          "Unexplained cash withdrawals",
          "Non-commercial expenditure",
        ],
      },
    ],
    faqs: [
      {
        question: "What are add-backs in matrimonial income analysis?",
        answer:
          "Add-backs adjust declared income for expenditure that is personal or discretionary rather than genuinely required for the business, establishing a maintainable income figure for the court.",
      },
      {
        question: "Do add-backs require a full expert report?",
        answer:
          "Depending on the case, add-backs may be addressed in a dedicated income report or as part of a wider FPR Part 25 expert report. We advise on proportionate scope at the outset.",
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function servicePath(id: string): string {
  return `/services/${id}`;
}

/** Nav and footer links */
export function getServiceHref(service: Service): string {
  return servicePath(service.id);
}
