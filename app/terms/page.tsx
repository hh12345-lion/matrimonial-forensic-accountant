import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section, Prose } from "@/components/Section";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Use | Matrimonial Forensic Accountant",
  description: "Website terms of use for Matrimonial Forensic Accountant.",
  path: "/terms",
  noindex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <Section>
        <Prose>
          <p className="text-sm text-charcoal">Last updated: June 2025</p>
          <h2>Website use</h2>
          <p>
            This website is operated by {SITE_NAME}. By using this site you agree to these
            terms. Content is for general information only and does not constitute legal or
            professional advice.
          </p>
          <h2>Not a law firm</h2>
          <p>
            {SITE_NAME} is an independent forensic accounting practice. We are not a law firm
            and do not provide legal advice. You should obtain legal advice from a qualified
            solicitor for legal matters.
          </p>
          <h2>Professional services</h2>
          <p>
            Forensic accounting and expert witness services are provided under separate terms
            of engagement agreed in writing before work commences.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Website content is owned by {SITE_NAME} unless otherwise stated. You may not
            reproduce content without permission except for personal, non-commercial reference.
          </p>
          <h2>Liability</h2>
          <p>
            We do not exclude liability where prohibited by law. We are not liable for loss
            arising from reliance on website content alone.
          </p>
          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Courts of England and
            Wales have exclusive jurisdiction.
          </p>
        </Prose>
      </Section>
    </>
  );
}
