import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section, Prose } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata = buildMetadata({
  title:
    "About Matrimonial Forensic Accountant | UK Matrimonial Forensic Accounting Practice",
  description:
    "Matrimonial Forensic Accountant is a specialist UK forensic accounting practice for family proceedings. Senior-led engagements, FPR Part 25 compliance, and a track record in financial remedy and matrimonial disputes.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        title="About Matrimonial Forensic Accountant"
        subtitle="An independent UK forensic accounting practice for England and Wales family proceedings. We instruct only in matrimonial and family financial disputes before the English and Welsh courts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <Section>
        <Prose>
          <h2>The Practice</h2>
          <p>
            Matrimonial Forensic Accountant is an independent boutique forensic
            accounting practice founded on a single principle: that every client
            deserves direct access to senior expertise, not a relationship
            partner who passes work to a junior team.
          </p>
          <p>
            We work with family law solicitors and barristers in England and
            Wales on expert witness instructions in financial remedy, Schedule
            1, and TOLATA proceedings. We focus exclusively on UK matrimonial
            and family financial disputes under English law, not general
            commercial litigation or proceedings in other jurisdictions.
          </p>

          <h2>Geographic Scope</h2>
          <p>
            Matrimonial Forensic Accountant accepts instructions for proceedings
            in England and Wales only. Our expert reports are prepared for the
            Family Court and comply with the Family Procedure Rules (FPR Part
            25). We analyse overseas assets and structures where they form part
            of English financial remedy proceedings, but we do not accept
            standalone instructions for family or matrimonial disputes outside
            the United Kingdom.
          </p>

          <h2>Our Approach</h2>
          <p>
            We do not take instructions we cannot serve well. Before accepting
            any engagement, we assess whether we have the specific matrimonial
            forensic expertise the case requires, and if not, we say so.
          </p>
          <p>
            Every expert report reflects our honest, independent view of the
            financial issues, consistent with our duty to the court under FPR
            Part 25, regardless of which party has instructed us.
          </p>

          <h2>Qualifications &amp; Accreditations</h2>
          <ul>
            <li>ACA / FCA (ICAEW)</li>
            <li>CFE (Certified Fraud Examiner)</li>
            <li>ICAEW Forensic &amp; Expert Witness Accreditation</li>
            <li>Member: Academy of Experts</li>
            <li>Member: Expert Witness Institute</li>
          </ul>
          <p>
            <Link
              href="/qualifications-accreditations"
              className="text-gold hover:underline"
            >
              View full qualifications and accreditations
            </Link>
          </p>

          <h2>Scope of Practice</h2>
          <p>We accept instructions across:</p>
          <ul>
            <li>Financial remedy and divorce (FPR Part 25)</li>
            <li>Schedule 1 (Children Act 1989) financial provision</li>
            <li>TOLATA and cohabitation property disputes</li>
            <li>Pre-FDR forensic investigations under privilege</li>
            <li>High net worth and complex matrimonial proceedings</li>
            <li>Nuptial agreement financial analysis</li>
          </ul>
        </Prose>
      </Section>

      <CTASection
        title="Discuss Your Instruction"
        buttonText="Instruct Us"
      />
    </>
  );
}
