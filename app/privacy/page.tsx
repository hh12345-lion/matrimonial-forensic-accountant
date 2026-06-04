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
            {SITE_NAME} ({SITE_EMAIL}) is the data controller for personal data collected
            through this website and in connection with forensic accounting instructions.
          </p>
          <h2>What data we collect</h2>
          <p>
            We may collect: name, organisation, email, phone, and matter details submitted
            via our contact form; technical data such as IP address and browser type when
            you use our website; and cookie data as described in our{" "}
            <Link href="/cookies" className="text-gold hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
          <h2>Lawful basis and purposes</h2>
          <p>
            We process personal data to respond to enquiries (legitimate interests /
            pre-contract), to perform professional services you instruct (contract), and to
            comply with legal obligations. We do not sell personal data.
          </p>
          <h2>Retention</h2>
          <p>
            Enquiry data is retained only as long as needed to assess and respond to your
            enquiry, and in line with professional record-keeping requirements where an
            instruction proceeds.
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
