import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Matrimonial Forensic Accountant | UK Forensic Accounting & Expert Witness",
  description:
    "Contact Matrimonial Forensic Accountant to discuss a UK matrimonial forensic accounting instruction in England and Wales family proceedings. Response within one business day.",
  path: "/contact",
});

const trustPoints = [
  "England and Wales family proceedings only",
  "Senior-led engagements",
  "FPR Part 25 compliant expert reports",
  "SJE appointments available",
  "Legal Aid accepted where appropriate",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Contact Matrimonial Forensic Accountant"
        subtitle="We respond to all UK enquiries within one business day. We accept instructions for England and Wales family proceedings only. Tell us about your firm, the instruction, and the matter so we can assess how we can help."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <Section>
        <div className="grid min-w-0 gap-8 md:gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="min-w-0 lg:order-1 lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="min-w-0 rounded-card border border-line bg-section-alt p-4 shadow-card xs:p-5 sm:p-6 lg:order-2">
            <h2 className="font-serif text-lg font-semibold text-navy">
              Contact details
            </h2>
            <p className="mt-4 text-body">
              Email:{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="break-all font-semibold text-gold hover:underline"
              >
                {SITE_EMAIL}
              </a>
            </p>
            <p className="mt-2 text-sm text-body">
              Response within one business day. UK (England and Wales) matters
              only.
            </p>
            <h3 className="mt-8 font-serif text-base font-semibold text-navy">
              Why instruct Matrimonial Forensic Accountant
            </h3>
            <ul className="mt-4 space-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm text-body before:text-gold before:content-['✓']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
