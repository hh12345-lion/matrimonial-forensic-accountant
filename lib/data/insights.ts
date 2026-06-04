export type InsightSection = {
  heading?: string;
  paragraphs: string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  sections: InsightSection[];
};

export const insights: InsightArticle[] = [
  {
    slug: "instructing-matrimonial-forensic-accountant",
    title:
      "Instructing a Matrimonial Forensic Accountant: What Family Solicitors Should Know",
    description:
      "How to choose a matrimonial forensic accountant, draft FPR Part 25 letters of instruction, and work effectively with experts in financial remedy proceedings.",
    excerpt:
      "Choosing the right expert, letter of instruction essentials, and SJE vs party appointment in family proceedings.",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
    sections: [
      {
        paragraphs: [
          "Instructing the right matrimonial forensic accountant can materially affect the trajectory of financial remedy proceedings. The expert's methodology, independence, and ability to communicate complex financial analysis to the family court are often as important as the underlying numbers.",
        ],
      },
      {
        heading: "Choosing the right expert",
        paragraphs: [
          "Look for a chartered accountant with specific family forensic experience, not general audit practice. ICAEW Forensic Accreditation, membership of the Academy of Experts, and a track record in FPR Part 25 proceedings are useful indicators.",
          "Confirm the expert has experience in your specific issues: matrimonial business valuation, hidden asset investigation, or Schedule 1 income analysis require different expertise. Ask whether a senior practitioner will lead the engagement and whether SJE appointments are accepted.",
        ],
      },
      {
        heading: "The letter of instruction",
        paragraphs: [
          "A clear letter of instruction should set out the proceedings, the issues for the expert, documents provided, the FPR Part 25 framework, and the timetable. Avoid framing questions to elicit a particular conclusion. The expert's duty is to the court.",
          "For joint instructions, both parties should agree the letter before substantive work begins. Disputes over scope at the draft report stage are costly and avoidable.",
        ],
      },
      {
        heading: "Party-appointed vs single joint expert",
        paragraphs: [
          "A party-appointed expert owes a duty to the court notwithstanding. An SJE under FPR 25.11 is jointly instructed and must demonstrate independence throughout. SJE appointments are common in financial remedy where both parties accept that a single valuation or income analysis is appropriate.",
          "Two party experts may be necessary where methodological positions are fundamentally opposed. Consider whether a joint expert meeting before FDR can narrow issues.",
        ],
      },
      {
        heading: "Working effectively with your expert",
        paragraphs: [
          "Provide complete financial documentation early, including Form E, business accounts, and bank statements. If non-disclosure is suspected, ask whether a preliminary investigation under privilege is appropriate before formal expert appointment.",
          "If the expert's preliminary view may be adverse, you need to know promptly. Reputable experts will advise at an early stage.",
        ],
      },
    ],
  },
  {
    slug: "business-valuation-divorce-guide",
    title:
      "Business Valuation in Divorce: The Key Issues for Family Law Solicitors",
    description:
      "Personal vs transferable goodwill, add-backs, income analysis, and liquidity in matrimonial business valuations.",
    excerpt:
      "The key forensic accounting issues in financial remedy business valuations and income analysis.",
    datePublished: "2025-02-10",
    dateModified: "2025-06-01",
    sections: [
      {
        paragraphs: [
          "Business valuation in financial remedy proceedings raises issues that do not arise in commercial valuations. Personal and transferable goodwill, add-backs to income, and liquidity analysis are central. Family law solicitors should ensure these issues are explicitly addressed in the expert's remit.",
        ],
      },
      {
        heading: "Personal and transferable goodwill",
        paragraphs: [
          "Much of a business's value may attach to the spouse personally rather than to the business as a transferable asset. The expert should explain how personal and transferable elements have been separated and the impact on the matrimonial valuation conclusion.",
        ],
      },
      {
        heading: "Add-backs and income analysis",
        paragraphs: [
          "Declared income from owner-managed businesses is often an unreliable guide to available resources. Forensic review may identify excessive remuneration, personal expenses through the business, and related-party transactions. Lifestyle analysis remains a valuable cross-check where disclosure is contested.",
        ],
      },
      {
        heading: "Liquidity",
        paragraphs: [
          "A high valuation is of limited use if the business cannot fund a lump sum without jeopardising operations. Liquidity analysis should address distributable reserves, banking covenants, and the realistic timing of value extraction.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "Matrimonial Forensic Accountant produces FPR Part 25 compliant reports addressing valuation methodology, income analysis, and liquidity in clear terms for the family court. See our Business Valuation practice area or contact us to discuss an instruction.",
        ],
      },
    ],
  },
  {
    slug: "hidden-assets-divorce-guide",
    title:
      "Hidden Assets in Divorce: A Practical Guide for Family Law Solicitors",
    description:
      "Identifying undisclosed assets and income in financial remedy proceedings, lifestyle analysis, and the role of forensic investigation.",
    excerpt:
      "How forensic accountants assist with non-disclosure cases in financial remedy proceedings.",
    datePublished: "2025-03-05",
    dateModified: "2025-06-01",
    sections: [
      {
        paragraphs: [
          "Non-disclosure of assets and income remains a significant issue in financial remedy proceedings. Forensic accountants assist solicitors by analysing financial records, conducting lifestyle analysis, and producing evidence suitable for further disclosure applications or expert evidence.",
        ],
      },
      {
        heading: "Signs that forensic investigation may be needed",
        paragraphs: [
          "Inconsistencies between Form E disclosure and lifestyle, unexplained fund transfers, related-party transactions, and offshore structures not adequately explained are common triggers for forensic instruction.",
          "Early investigation under legal professional privilege allows the client to assess the strength of the case before committing to specific issue directions or section 37 applications.",
        ],
      },
      {
        heading: "Lifestyle analysis",
        paragraphs: [
          "Benchmarking declared income and resources against identified expenditure can reveal matters requiring explanation. This analysis supports requests for further disclosure and informs settlement strategy before FDR.",
        ],
      },
      {
        heading: "Expert evidence after investigation",
        paragraphs: [
          "Investigation findings may lead to a formal FPR Part 25 expert appointment on income, valuation, or asset issues. The investigation and expert roles should be distinguished at the outset to avoid procedural complications.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We conduct proportionate investigations under privilege when instructed via solicitors. See our Hidden Assets practice area or contact us to discuss an instruction.",
        ],
      },
    ],
  },
  {
    slug: "choosing-single-joint-expert-family",
    title:
      "Choosing a Single Joint Expert in Family Proceedings: A Practical Guide",
    description:
      "When to appoint an SJE in financial remedy, agreeing the expert, joint letters of instruction, and the written questions process.",
    excerpt:
      "When an SJE is appropriate in family proceedings and how to manage the joint instruction process.",
    datePublished: "2025-04-20",
    dateModified: "2025-06-01",
    sections: [
      {
        paragraphs: [
          "Single joint expert appointments under FPR 25.11 are widely used in financial remedy proceedings to obtain a single business valuation or income analysis. The SJE is jointly instructed and must demonstrate independence throughout.",
        ],
      },
      {
        heading: "When is an SJE appropriate?",
        paragraphs: [
          "An SJE works well where both parties accept that expert evidence is needed on valuation or income and wish to avoid the cost of two competing experts. The court may direct an SJE where appropriate.",
          "An SJE is less suitable where each party intends to advance a fundamentally different methodological framework without constraint.",
        ],
      },
      {
        heading: "Agreeing the expert",
        paragraphs: [
          "Parties should agree an expert with matrimonial forensic experience, availability, and no conflicts. If agreement cannot be reached, the court may select the expert. Conflicts checks should be completed before nomination.",
        ],
      },
      {
        heading: "Joint letter of instruction",
        paragraphs: [
          "The joint letter should define the issues, list documents, set timetables, and address costs sharing. Both parties should sign off before substantive work begins.",
        ],
      },
      {
        heading: "Written questions and FDR",
        paragraphs: [
          "Written questions under FPR Part 25 should be focused. The SJE report often forms the basis for negotiation at FDR. Early agreement on scope reduces disputes after the draft report is delivered.",
          "Contact Matrimonial Forensic Accountant to discuss whether an SJE or party appointment is appropriate for your matter.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string): InsightArticle | undefined {
  return insights.find((i) => i.slug === slug);
}
