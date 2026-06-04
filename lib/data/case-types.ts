import type { FAQ } from "./faq";

export type CaseType = {
  slug: string;
  hubLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  paragraphs: string[];
  faqs: FAQ[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "business-valuation-divorce",
    hubLabel: "Business Valuation in Divorce",
    title: "Business Valuation in Divorce",
    metaTitle: "Business Valuation in Divorce UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Matrimonial business valuation for financial remedy: personal goodwill, liquidity, and FPR Part 25 expert reports.",
    h1: "Business Valuation in Divorce",
    paragraphs: [
      "When a spouse owns a trading company or professional practice, the business interest is often the largest matrimonial asset. Valuation must address personal versus transferable goodwill and whether the business can fund a lump sum or maintenance order.",
      "We produce FPR Part 25 compliant matrimonial business valuation reports for party-appointed and single joint expert instructions.",
    ],
    faqs: [
      {
        question: "How is business valuation different in divorce?",
        answer:
          "Matrimonial valuations apply family-law adjustments: excluding non-transferable personal goodwill, assessing liquidity, and focusing on resources available for distribution rather than a theoretical open-market sale price alone.",
      },
      {
        question: "What is personal versus transferable goodwill?",
        answer:
          "Personal goodwill attaches to the individual and typically does not transfer on sale. Transferable business goodwill has realisable value and is central to the matrimonial valuation debate in owner-managed businesses.",
      },
    ],
  },
  {
    slug: "hidden-assets-investigation",
    hubLabel: "Hidden Assets Investigation",
    title: "Hidden Assets Investigation",
    metaTitle: "Hidden Assets Investigation Divorce UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Forensic hidden asset investigation: Form E review, bank analysis, lifestyle gaps, and overseas tracing in UK family proceedings.",
    h1: "Hidden Assets Investigation",
    paragraphs: [
      "Undisclosed assets undermine fair financial remedy outcomes. We investigate whether Form E disclosure is complete and consistent with bank statements, company records, and other available evidence.",
      "Investigations instructed via solicitors may be protected by legal professional privilege until the client decides to deploy findings in proceedings.",
    ],
    faqs: [
      {
        question: "How are hidden assets identified?",
        answer:
          "We cross-reference Form E disclosure with bank statements, lifestyle expenditure, company records, and transfers to connected parties, trusts, or overseas structures.",
      },
      {
        question: "Can investigation run before court proceedings?",
        answer:
          "Yes, under solicitor instruction and privilege, to assess whether further disclosure or a formal application is warranted.",
      },
    ],
  },
  {
    slug: "lifestyle-analysis-income",
    hubLabel: "Lifestyle Analysis & Income",
    title: "Lifestyle Analysis and Income Assessment",
    metaTitle: "Lifestyle Analysis Divorce UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Lifestyle analysis and income assessment in UK financial remedy and Schedule 1 proceedings.",
    h1: "Lifestyle Analysis & Income",
    paragraphs: [
      "Lifestyle analysis compares evidenced expenditure to declared income. A material gap supports arguments that undisclosed income or capital has funded living costs.",
      "We provide structured analysis suitable for questionnaire support, FDR negotiation, or FPR Part 25 expert evidence.",
    ],
    faqs: [
      {
        question: "What is lifestyle analysis?",
        answer:
          "It benchmarks actual expenditure against declared income and resources, often using bank and card statements to establish a pattern inconsistent with the Form E position.",
      },
      {
        question: "Can the court impute income?",
        answer:
          "Where disclosure is inadequate and expert analysis establishes higher resources were available, the court may draw adverse inferences or impute income.",
      },
    ],
  },
  {
    slug: "form-e-financial-disclosure",
    hubLabel: "Form E Financial Disclosure",
    title: "Form E Financial Disclosure Review",
    metaTitle: "Form E Review UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Forensic Form E review for family proceedings: inconsistencies, missing assets, and matters requiring clarification.",
    h1: "Form E Financial Disclosure",
    paragraphs: [
      "We conduct forensic review of Form E and supporting documents, identifying inconsistencies and matters requiring clarification or further disclosure.",
      "Early Form E analysis helps solicitors focus questionnaire and expert instructions before FDR.",
    ],
    faqs: [
      {
        question: "When is Form E forensic review useful?",
        answer:
          "When disclosure appears incomplete, valuations are disputed, or specific accounts require expert interpretation before financial remedy negotiations.",
      },
      {
        question: "Does review replace an expert report?",
        answer:
          "Form E review may be a preliminary step or part of a wider FPR Part 25 expert instruction, depending on what the court requires.",
      },
    ],
  },
  {
    slug: "add-backs-financial-reconstruction",
    hubLabel: "Add-backs & Reconstruction",
    title: "Add-backs and Financial Reconstruction",
    metaTitle: "Add-backs Divorce UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Add-backs and income reconstruction for maintenance and financial remedy claims in UK family proceedings.",
    h1: "Add-backs & Financial Reconstruction",
    paragraphs: [
      "We identify discretionary expenditure and adjustments to establish maintainable income for periodical payments and lump sum claims.",
      "Common add-backs include excessive director remuneration, personal expenses through the business, and related-party transactions.",
    ],
    faqs: [
      {
        question: "What are add-backs?",
        answer:
          "Add-backs adjust declared income for personal or discretionary expenditure run through a business, establishing maintainable income for the court.",
      },
      {
        question: "Are add-backs always accepted by the court?",
        answer:
          "The court decides on the evidence. Our role is to present a clear, evidence-based reconstruction with supporting schedules.",
      },
    ],
  },
  {
    slug: "self-employed-income-assessment",
    hubLabel: "Self-Employed Income",
    title: "Self-Employed Income Assessment",
    metaTitle: "Self-Employed Income Divorce UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Self-employed and director income analysis for financial remedy: maintainable earnings from accounts and tax returns.",
    h1: "Self-Employed Income Assessment",
    paragraphs: [
      "Self-employed and director-controlled income requires analysis beyond tax returns alone. We reconstruct maintainable earnings from accounts, management information, and bank evidence.",
      "We address business trajectory, one-off items, and the split between business and personal resources.",
    ],
    faqs: [
      {
        question: "Why is self-employed income difficult in divorce?",
        answer:
          "Owners can control remuneration timing, expenses, and dividends. Forensic analysis establishes maintainable income rather than tax-efficient drawings alone.",
      },
      {
        question: "Do you analyse company and personal accounts together?",
        answer:
          "Yes. We review business and personal records to understand how income and benefits flow to the spouse.",
      },
    ],
  },
  {
    slug: "schedule-1-children-act",
    hubLabel: "Schedule 1 (Children Act)",
    title: "Schedule 1 Financial Provision",
    metaTitle: "Schedule 1 Forensic Accounting UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Forensic accounting for Schedule 1 claims: income, capital, and housing provision for children.",
    h1: "Schedule 1 (Children Act)",
    paragraphs: [
      "Schedule 1 proceedings require analysis of the paying parent's income, capital, and ability to meet housing and maintenance claims for children.",
      "We address complex remuneration, trusts, and business interests where accounting expertise is required.",
    ],
    faqs: [
      {
        question: "What does a forensic accountant do in Schedule 1 cases?",
        answer:
          "We analyse income and capital resources, produce expert reports where required, and support counsel on the financial evidence underpinning housing and periodical payment claims.",
      },
      {
        question: "Is the analysis different from financial remedy?",
        answer:
          "The forensic techniques overlap, but the issues focus on provision for children rather than matrimonial asset division.",
      },
    ],
  },
  {
    slug: "tolata-cohabitation",
    hubLabel: "TOLATA & Cohabitation",
    title: "TOLATA and Cohabitation Disputes",
    metaTitle: "TOLATA Forensic Accounting UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Financial analysis for TOLATA and cohabitation property disputes: contributions and funding history.",
    h1: "TOLATA & Cohabitation",
    paragraphs: [
      "TOLATA and cohabitation disputes often require reconstruction of financial contributions to property acquisition, mortgage payments, and improvements.",
      "We provide evidence-quality analysis of the financial history relevant to beneficial interest claims.",
    ],
    faqs: [
      {
        question: "What financial evidence is needed for TOLATA?",
        answer:
          "Contribution schedules, bank evidence, and business income analysis where property was funded through trading entities.",
      },
      {
        question: "Do you provide legal advice on beneficial interest?",
        answer:
          "No. We provide forensic accounting analysis only; legal characterisation is for counsel.",
      },
    ],
  },
  {
    slug: "overseas-assets-trusts",
    hubLabel: "Overseas Assets & Trusts",
    title: "Overseas Assets and Trust Structures",
    metaTitle: "Overseas Assets Divorce UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Forensic analysis of overseas assets, trusts, and international structures in UK family proceedings.",
    h1: "Overseas Assets & Trusts",
    paragraphs: [
      "Overseas bank accounts, foreign property, offshore companies, and trusts require forensic analysis where they form part of English financial remedy proceedings.",
      "We explain structures and fund flows in terms suitable for the Family Court, coordinating with foreign advisers where needed.",
    ],
    faqs: [
      {
        question: "Can you trace overseas assets?",
        answer:
          "We analyse available records to trace ownership and fund flows proportionate to the issues in dispute.",
      },
      {
        question: "How are trusts treated in financial remedy?",
        answer:
          "Trust analysis depends on the deed, distributions, and beneficial interests. We provide accounting evidence; legal characterisation is for the court.",
      },
    ],
  },
  {
    slug: "high-net-worth-divorce",
    hubLabel: "High Net Worth Divorce",
    title: "High Net Worth Divorce",
    metaTitle: "High Net Worth Divorce Forensic Accounting UK | Matrimonial Forensic Accountant",
    metaDescription:
      "Forensic accounting for high net worth financial remedy: multi-entity structures, trusts, and complex remuneration.",
    h1: "High Net Worth Divorce",
    paragraphs: [
      "High net worth proceedings involve multiple businesses, trusts, investment portfolios, and complex remuneration. We provide senior-led analysis across structures without losing clarity for the court.",
      "Instructions include SJE appointments, multi-entity valuations, and investigations where disclosure is contested.",
    ],
    faqs: [
      {
        question: "How do you manage complexity in HNW cases?",
        answer:
          "We agree scope at the outset, coordinate entity-by-entity analysis, and present conclusions in clear schedules linked to the issues the court must decide.",
      },
      {
        question: "Do you handle cryptocurrency in HNW divorces?",
        answer:
          "Where digital assets are identified, we conduct tracing and valuation analysis proportionate to the case.",
      },
    ],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return caseTypes.find((c) => c.slug === slug);
}

export function caseTypePath(slug: string): string {
  return `/case-types/${slug}`;
}
