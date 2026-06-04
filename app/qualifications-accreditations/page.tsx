import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section, Prose } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "Qualifications & Accreditations | Matrimonial Forensic Accountant UK",
  description:
    "Matrimonial Forensic Accountant's professional credentials: ICAEW, CFE, ICAEW Forensic Accreditation, Academy of Experts, and CPR Part 35 expert witness qualifications.",
  path: "/qualifications-accreditations",
});

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Qualifications",
            path: "/qualifications-accreditations",
          },
        ])}
      />
      <PageHero
        title="Qualifications & Accreditations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Qualifications" },
        ]}
      />

      <Section>
        <Prose>
          <h2>Professional Qualifications</h2>
          <h3>ACA / FCA (ICAEW)</h3>
          <p>
            Fellow of the Institute of Chartered Accountants in England and Wales:
            the primary UK chartered accountancy qualification and the baseline
            credential for expert witness accounting work.
          </p>
          <h3>CFE (Certified Fraud Examiner)</h3>
          <p>
            Awarded by the Association of Certified Fraud Examiners (ACFE), the
            primary global credential for fraud investigation and forensic accounting
            specialists.
          </p>
          <h3>ICAEW Forensic &amp; Expert Witness Accreditation</h3>
          <p>
            ICAEW&apos;s specialist forensic accounting accreditation, with rigorous
            vetting ensuring court-recognised expertise as a practising expert witness.
          </p>

          <h2>Professional Memberships</h2>
          <h3>Academy of Experts</h3>
          <p>
            Full member of the Academy of Experts, the UK&apos;s leading body for expert
            witnesses, providing training, guidance, and accreditation for experts
            appearing in UK proceedings.
          </p>
          <h3>Expert Witness Institute (EWI)</h3>
          <p>
            Member of the Expert Witness Institute, promoting high professional standards
            for expert witnesses in UK courts.
          </p>
          <h3>ACFE UK Chapter</h3>
          <p>
            Active member of the UK chapter of the Association of Certified Fraud Examiners.
          </p>

          <h2>Expert Witness Standards</h2>
          <h3>CPR Part 35 (Civil)</h3>
          <p>
            All civil expert reports comply with CPR Part 35 and Practice Direction 35,
            including a statement of truth and compliance with the requirements for an
            independent expert&apos;s report.
          </p>
          <h3>FPR Part 25 (Family)</h3>
          <p>
            Family court expert reports comply with FPR Part 25 and Practice Direction 25A,
            including court permission requirements where applicable.
          </p>
          <h3>CrPR Part 33 (Criminal)</h3>
          <p>
            Criminal proceedings expert reports comply with Criminal Procedure Rules Part
            33 and the Crim PD requirements for expert evidence.
          </p>

          <h2>Continuing Professional Development</h2>
          <p>
            Matrimonial Forensic Accountant maintains active professional development, staying current with
            accounting standards, procedural rules, relevant case law, and forensic
            methodology developments.
          </p>
        </Prose>
      </Section>

      <CTASection />
    </>
  );
}
