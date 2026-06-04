import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "Fees | Matrimonial Forensic Accountant UK",
  description:
    "Transparent fee structure for matrimonial forensic accounting and expert witness services. Hourly rates, fixed fees, and Legal Aid compatible engagements.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Fees", path: "/fees" },
        ])}
      />
      <PageHero
        title="Fees"
        subtitle="Transparent pricing for matrimonial forensic accounting and expert witness services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Fees" },
        ]}
      />

      <Section>
        <h2 className="font-serif text-2xl font-semibold text-navy">
          Our Approach to Fees
        </h2>
        <p className="mt-4 max-w-3xl text-body leading-relaxed">
          Matrimonial Forensic Accountant charges on an hourly basis for most
          engagements, reflecting the time required to conduct forensic analysis
          and produce a court-quality report. We provide a fee estimate at the
          outset of every instruction and update clients proactively if scope
          changes materially.
        </p>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl font-semibold text-navy">
          Indicative Rates
        </h2>
        <ul className="mt-4 max-w-3xl space-y-2 text-body">
          <li>Standard engagement: £250 to £400 per hour</li>
          <li>
            Complex High Court financial remedy matters: £400 to £600 per hour
          </li>
        </ul>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl font-semibold text-navy">
          Report Costs: Guide Prices
        </h2>
        <p className="mt-4 text-sm text-charcoal">
          Indicative ranges depending on complexity and document volume:
        </p>
        <ul className="mt-4 max-w-3xl space-y-2 text-body">
          <li>Matrimonial business valuation (SME): £3,000 to £10,000</li>
          <li>Financial remedy SJE report (shared): £2,000 to £8,000 per party</li>
          <li>Form E review and analysis: £1,500 to £5,000</li>
          <li>Hidden asset investigation (preliminary): £1,500 to £5,000</li>
          <li>Income and lifestyle analysis: £2,000 to £7,000</li>
          <li>High net worth multi-entity valuation: £10,000 to £25,000+</li>
        </ul>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl font-semibold text-navy">
          Fixed Fee Engagements
        </h2>
        <p className="mt-4 max-w-3xl text-body leading-relaxed">
          For clearly defined scope instructions, we are happy to agree a fixed
          fee, providing cost certainty for budget purposes. We discuss fixed
          fee options at the outset where appropriate.
        </p>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl font-semibold text-navy">
          Legal Aid
        </h2>
        <p className="mt-4 max-w-3xl text-body leading-relaxed">
          We accept Legal Aid instructions for appropriate family proceedings.
          Prior authority from the Legal Aid Agency is required before
          instruction is accepted.
        </p>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl font-semibold text-navy">
          No Contingency Fees
        </h2>
        <p className="mt-4 max-w-3xl text-body leading-relaxed">
          Expert witnesses must be independent and their fees must not depend on
          the outcome of proceedings. We do not accept contingency fee
          arrangements.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
