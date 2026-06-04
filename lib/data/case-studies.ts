export type CaseStudy = {
  title: string;
  background: string;
  instruction: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title:
      "Financial Remedy: Business Valuation and Hidden Income in Divorce Proceedings",
    background:
      "High-value financial remedy proceedings involving a spouse who owned several businesses in the hospitality sector. The other party suspected significant undisclosed income.",
    instruction:
      "FPR Part 25 single joint expert appointment to value the businesses and assess the income available for maintenance purposes.",
    approach:
      "Reviewed four years of business accounts, management information, and bank statements; conducted lifestyle analysis benchmarking declared income against identified expenditure; identified multiple add-backs and adjusted the income figure.",
    outcome:
      "The adjusted income figure was substantially higher than the declared position. The valuation and income analysis formed the basis for the consent order reached at the FDR hearing.",
  },
  {
    title:
      "Matrimonial Business Valuation: Personal Goodwill in a Professional Practice",
    background:
      "Financial remedy proceedings concerning a partner in a medical practice. The parties disputed the matrimonial value of the practice and the extent of personal goodwill.",
    instruction:
      "Party-appointed expert to value the practice and address the personal versus transferable goodwill issue for the court.",
    approach:
      "Analysed practice accounts, partner drawings, and comparable transactions; applied maintainable earnings methodology with a clear split between personal and transferable goodwill; assessed liquidity for any lump sum order.",
    outcome:
      "The report's goodwill analysis was accepted by both parties' counsel. The matter settled before final hearing with a consent order reflecting the expert's matrimonial valuation range.",
  },
  {
    title: "Hidden Assets: Lifestyle Analysis and Undisclosed Bank Accounts",
    background:
      "Financial remedy proceedings where the respondent declared modest income but maintained a lifestyle inconsistent with disclosed resources.",
    instruction:
      "Instructed via solicitors under legal professional privilege to investigate financial records and identify undisclosed assets and income.",
    approach:
      "Conducted lifestyle analysis against declared income; traced bank and credit card transactions; identified offshore account activity and undeclared rental income from a property not disclosed on Form E.",
    outcome:
      "The investigation supported an application for further disclosure. Following specific issue directions, the respondent's revised disclosure led to a revised open offer and settlement at FDR.",
  },
  {
    title: "Schedule 1: Income Analysis for High Earner with Complex Remuneration",
    background:
      "Schedule 1 proceedings where the paying parent was a senior executive with equity incentives, deferred bonuses, and trust distributions.",
    instruction:
      "Expert report on the paying parent's maintainable income and capital resources for housing and maintenance claims.",
    approach:
      "Reconstructed maintainable income from employment contracts, bonus history, and trust distributions; analysed the liquidity of equity holdings; addressed the treatment of deferred remuneration in periodical payments calculations.",
    outcome:
      "The court accepted the expert's income analysis for the purposes of the interim maintenance order. The final Schedule 1 order reflected the capital and income conclusions in the report.",
  },
];
