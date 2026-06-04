import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata = buildMetadata({
  title: "Case Studies | Matrimonial Forensic Accountant Forensic Accounting UK",
  description:
    "Anonymised case studies from Matrimonial Forensic Accountant's forensic accounting practice, demonstrating expertise across commercial disputes, fraud investigations, and family proceedings.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <PageHero
        title="Case Studies"
        subtitle="Anonymised examples from our practice. All identifying details have been changed or removed to protect confidentiality."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />

      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-body">
          The following case studies are drawn from Matrimonial Forensic Accountant&apos;s practice.
          All identifying details have been changed or removed to protect client and
          party confidentiality. They are illustrative of the types of matters we
          handle and the approach we bring to each engagement.
        </p>

        <div className="mt-12 space-y-12">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="rounded-card border border-line border-l-4 border-l-gold bg-white p-8 shadow-card"
            >
              <h2 className="font-serif text-xl font-semibold text-navy md:text-2xl">
                {study.title}
              </h2>
              <div className="mt-6 space-y-4 text-body leading-relaxed">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
                    Background
                  </h3>
                  <p className="mt-1">{study.background}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
                    Instruction
                  </h3>
                  <p className="mt-1">{study.instruction}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
                    Approach
                  </h3>
                  <p className="mt-1">{study.approach}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
                    Outcome
                  </h3>
                  <p className="mt-1">{study.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
