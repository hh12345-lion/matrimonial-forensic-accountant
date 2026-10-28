import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section, Prose } from "@/components/Section";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy | Matrimonial Forensic Accountant",
  description: "Privacy policy for Matrimonial Forensic Accountant website visitors and clients. UK GDPR compliant.",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <Section>
        <Prose>
          <p className="text-sm text-charcoal">Last updated: June 2025</p>
          <h2>Who we are</h2>
          <p>
            {SITE_NAME} ({SITE_EMAIL}) decides how personal data is used, both for this website
            and for the financial remedy cases we are instructed on.
          </p>
          <h2>What data we collect</h2>
          <p>
            When you contact us we receive your name, firm, email, phone number and a summary of
            the case. Our website also records technical details such as your IP address and
            browser, plus the cookie data explained in our{" "}
            <Link href="/cookies" className="text-gold hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
          <h2>Lawful basis and purposes</h2>
          <p>
            We use enquiry details to reply to you (legitimate interests, or steps before a
            contract), case material to carry out work you instruct us on (contract), and
            some records to meet our legal duties. We never sell personal data.
          </p>
          <h2>Retention</h2>
          <p>
            We keep an enquiry only for as long as it takes to deal with it. Where we are
            instructed, the file is kept for as long as our professional record-keeping
            rules require.
          </p>
          <h2>Your rights</h2>
          <p>
            Under UK GDPR you have rights of access, rectification, erasure, restriction,
            objection, and data portability where applicable. Contact {SITE_EMAIL} to exercise
            these rights. You may complain to the ICO.
          </p>
          <h2>International transfers</h2>
          <p>
            Data is processed within the UK/EEA where possible. If third-party tools process
            data outside the UK, we ensure appropriate safeguards.
          </p>
          <h2>Contact</h2>
          <p>
            Questions: <a href={`mailto:${SITE_EMAIL}`} className="text-gold hover:underline">{SITE_EMAIL}</a>
          </p>
        </Prose>
      </Section>
    </>
  );
}
