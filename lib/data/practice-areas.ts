import type { FAQ } from "./faq";

export type PracticeArea = {
  slug: string;
  title: string;
  shortDescription: string;
  h1: string;
  paragraphs: string[];
  faqs: FAQ[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "financial-remedy-divorce",
    title: "Financial Remedy & Divorce",
    shortDescription:
      "Form E analysis, business valuation, income assessment, and FPR Part 25 expert evidence in financial remedy proceedings.",
    h1: "Financial Remedy & Divorce",
    paragraphs: [
      "Matrimonial Forensic Accountant provides specialist forensic accounting and expert witness services in financial remedy proceedings following divorce and civil partnership dissolution. We accept instructions from family law solicitors and direct instructions from parties where appropriate, producing FPR Part 25 compliant expert reports on business valuation, income, add-backs, and asset disclosure issues.",
      "Our approach combines rigorous financial analysis with clear, judge-focused reporting. We address the specific issues that arise in matrimonial proceedings: the distinction between personal and transferable goodwill, liquidity analysis for lump sum orders, lifestyle analysis where income is disputed, and forensic review of Form E disclosure where inconsistencies require explanation.",
      "Typical instructions include single joint expert appointments to value businesses, party-appointed expert reports challenging the other side's valuation or income position, and preliminary assessments before FDR where the financial issues require early clarity.",
    ],
    faqs: [
      {
        question:
          "Does Matrimonial Forensic Accountant accept SJE appointments in financial remedy proceedings?",
        answer:
          "Yes. We are available for single joint expert appointments under FPR Part 25, jointly instructed by both parties. We understand the joint letter of instruction format, the written questions process, and the particular requirements of demonstrating independence in financial remedy proceedings.",
      },
      {
        question:
          "What financial issues can your expert reports address in divorce proceedings?",
        answer:
          "Our FPR Part 25 compliant reports can address business and share valuation, maintainable income and add-backs, Form E disclosure analysis, pension and investment valuations where accounting expertise is required, and lifestyle analysis where declared income is inconsistent with identified expenditure.",
      },
    ],
  },
  {
    slug: "business-valuation-matrimonial",
    title: "Business Valuation",
    shortDescription:
      "Matrimonial valuations of owner-managed and SME businesses with goodwill and liquidity analysis.",
    h1: "Business Valuation in Matrimonial Proceedings",
    paragraphs: [
      "Business valuation in divorce requires adjustments that do not arise in commercial valuations. Matrimonial Forensic Accountant applies methodology appropriate to the specific business and proceedings, addressing personal versus transferable goodwill, the impact of the matrimonial event on maintainable earnings, and whether the business can fund a lump sum or ongoing maintenance order.",
      "We value owner-managed businesses, professional practices, hospitality and retail groups, and investment holding structures. Our reports explain methodology choice clearly so the court understands why a particular approach has been applied, whether maintainable earnings, net asset value, or discounted cash flow.",
      "Instructions include SJE appointments to value one or more businesses, party expert reports responding to the other side's valuation, and preliminary valuation advice before FDR to support settlement negotiations.",
    ],
    faqs: [
      {
        question:
          "How do you approach goodwill in matrimonial business valuations?",
        answer:
          "We distinguish personal goodwill (attached to an individual spouse) from transferable goodwill (saleable with the business). This distinction directly affects the matrimonial value attributed to the business. We explain our analysis in terms the Family Court can follow, consistent with established case law on matrimonial business valuation.",
      },
      {
        question:
          "Do you assess whether a business can fund a financial remedy order?",
        answer:
          "Yes. Liquidity analysis is a standard component of our matrimonial valuations where a lump sum or transfer of business assets is proposed. We assess whether the business has sufficient distributable reserves or borrowing capacity to fund the order without jeopardising its ongoing operations.",
      },
    ],
  },
  {
    slug: "hidden-assets-undisclosed-income",
    title: "Hidden Assets & Undisclosed Income",
    shortDescription:
      "Forensic investigation of undisclosed assets, offshore structures, and lifestyle inconsistencies.",
    h1: "Hidden Assets & Undisclosed Income",
    paragraphs: [
      "Where a party suspects undisclosed assets or income in family proceedings, Matrimonial Forensic Accountant conducts proportionate forensic investigations under legal professional privilege when instructed via solicitors. We analyse bank statements, business records, property transactions, and lifestyle expenditure to identify matters inconsistent with the disclosed Form E position.",
      "Our investigations are designed to produce evidence-quality findings suitable for use in financial remedy proceedings, without unnecessary scope or cost. We trace fund flows, identify related-party transactions, and benchmark declared income against identified lifestyle expenditure.",
      "Instructions include pre-FDR investigations to assess whether a section 37 application may be warranted, support for specific issue directions requiring further disclosure, and expert analysis of financial records following a successful non-disclosure finding.",
    ],
    faqs: [
      {
        question:
          "Can investigation findings be protected from disclosure?",
        answer:
          "When instructed via solicitors, our investigation reports attract legal professional privilege until the client decides to disclose. This allows the instructing party to assess the strength of the non-disclosure case before committing to a particular course of action in proceedings.",
      },
      {
        question:
          "What records do you typically analyse in hidden asset investigations?",
        answer:
          "We review Form E and supporting documents, bank and credit card statements, business accounts and management information, property and land registry records, and publicly available information where relevant. The scope is agreed at the outset and kept proportionate to the issues in dispute.",
      },
    ],
  },
  {
    slug: "schedule-1-children-act",
    title: "Schedule 1 (Children Act)",
    shortDescription:
      "Financial analysis and expert evidence for Schedule 1 claims for financial provision for children.",
    h1: "Schedule 1 (Children Act 1989)",
    paragraphs: [
      "Schedule 1 proceedings require forensic accounting analysis of a parent's financial resources, income, and capital, often involving business interests and complex income structures. Matrimonial Forensic Accountant provides expert evidence on the paying parent's ability to meet housing and maintenance claims, including analysis of income, capital, and trust structures.",
      "We address the same forensic issues that arise in financial remedy proceedings but in the context of claims for financial provision for children, including periodical payments, lump sums for housing, and trust arrangements.",
      "Typical instructions include income analysis for high earners with complex remuneration, business valuation where the paying parent controls trading entities, and lifestyle analysis where declared resources are inconsistent with expenditure.",
    ],
    faqs: [
      {
        question:
          "Do you provide expert evidence in Schedule 1 proceedings?",
        answer:
          "Yes. We produce FPR Part 25 compliant expert reports for Schedule 1 proceedings, addressing income, capital, and business valuation issues. We accept both party-appointed and single joint expert instructions where the court directs joint evidence.",
      },
      {
        question:
          "Can you analyse trust structures in Schedule 1 cases?",
        answer:
          "We analyse trust and corporate structures where accounting expertise is required to establish the financial resources available to the paying parent, including distributions, loans, and beneficial interests. We work alongside family law counsel on the legal characterisation of structures.",
      },
    ],
  },
  {
    slug: "tolata-cohabitation",
    title: "TOLATA & Cohabitation",
    shortDescription:
      "Forensic accounting for beneficial interest and property disputes between cohabitees.",
    h1: "TOLATA & Cohabitation Disputes",
    paragraphs: [
      "Trusts of Land and Appointment of Trustees Act (TOLATA) claims and cohabitation property disputes often require forensic analysis of financial contributions, mortgage payments, and property-related expenditure over the course of a relationship. Matrimonial Forensic Accountant reconstructs financial contributions and analyses business income where property was funded from trading entities.",
      "We provide clear, evidence-based analysis suitable for County Court proceedings, explaining how identified contributions relate to the financial records available.",
      "Instructions include reconstruction of contributions to purchase and improvement costs, analysis of rental income and mortgage payments, and business income analysis where property acquisition was funded through owner-managed companies.",
    ],
    faqs: [
      {
        question:
          "What is your role in TOLATA proceedings?",
        answer:
          "We provide forensic accounting analysis of financial contributions and related income, producing expert reports where accounting expertise is required to establish the financial history relevant to beneficial interest claims. We do not provide legal advice on beneficial interest law.",
      },
      {
        question:
          "Can you work on cohabitation disputes without marriage?",
        answer:
          "Yes. Our expertise in family-related financial analysis extends to cohabitation property disputes, TOLATA claims, and other proceedings where forensic accounting evidence is required to establish financial contributions and resources.",
      },
    ],
  },
  {
    slug: "high-net-worth-complex-matrimonial",
    title: "High Net Worth & Complex Matrimonial",
    shortDescription:
      "Multi-jurisdictional assets, trusts, overseas holdings, and complex corporate structures in high-value proceedings.",
    h1: "High Net Worth & Complex Matrimonial Proceedings",
    paragraphs: [
      "High net worth financial remedy proceedings involve multiple businesses, offshore structures, trusts, investment portfolios, and complex remuneration arrangements. Matrimonial Forensic Accountant provides senior-led forensic analysis across these structures, producing expert evidence that addresses the full financial picture without losing clarity.",
      "We coordinate analysis across multiple entities, trace inter-company and cross-border transactions, and address cryptocurrency and digital asset holdings where identified. Our reports remain focused on the issues the court must determine.",
      "Instructions include SJE appointments in high-value financial remedy cases, forensic investigation of offshore and trust structures, and income analysis for executives with equity compensation, carried interest, and deferred remuneration.",
    ],
    faqs: [
      {
        question:
          "Do you handle overseas assets and offshore structures?",
        answer:
          "Yes. We analyse overseas bank accounts, foreign property, offshore companies, and trust structures where accounting expertise is required. We work with foreign advisers where local accounting input is needed and explain our analysis in a form suitable for the English Family Court.",
      },
      {
        question:
          "Can you analyse cryptocurrency in matrimonial proceedings?",
        answer:
          "Where digital assets are identified or suspected, we conduct forensic tracing and valuation analysis proportionate to the issues in the case, documenting holdings and transactions from available exchange records and wallet evidence.",
      },
    ],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
