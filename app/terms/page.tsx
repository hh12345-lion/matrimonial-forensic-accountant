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
            {SITE_NAME} runs this website, and using it means you accept these terms. Nothing
            here is legal or professional advice on your own separation or divorce.
          </p>
          <h2>Not a law firm</h2>
          <p>
            {SITE_NAME} is a firm of forensic accountants, not solicitors. For advice on your
            financial settlement or court case, speak to a family law solicitor.
          </p>
          <h2>Professional services</h2>
          <p>
            When we are instructed on a case, a written engagement letter is agreed first and
            governs that work.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Unless stated otherwise, {SITE_NAME} owns the content on this site. Please ask before
            copying it anywhere, other than for your own non-commercial use.
          </p>
          <h2>Liability</h2>
          <p>
            We accept no liability for decisions made only on the basis of this website, but
            nothing here limits liability that the law does not allow us to limit.
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
