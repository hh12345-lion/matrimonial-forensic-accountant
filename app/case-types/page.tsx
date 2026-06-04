import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { caseTypes, caseTypePath } from "@/lib/data/case-types";

export const metadata = buildMetadata({
  title: "Case Types | Matrimonial Forensic Accountant UK",
  description:
    "Forensic accounting case types in UK family proceedings: business valuation, hidden assets, Form E, Schedule 1, TOLATA, and high net worth matrimonial matters.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Types", path: "/case-types" },
        ])}
      />
      <PageHero
        title="Case Types"
        subtitle="Forensic accounting instructions across the full range of matrimonial and family financial disputes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types" },
        ]}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseTypes.map((item) => (
            <Link
              key={item.slug}
              href={caseTypePath(item.slug)}
              className="card-elevated group block p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h2 className="font-serif text-lg font-semibold text-navy group-hover:text-gold">
                {item.hubLabel}
              </h2>
              <p className="mt-2 text-sm text-body">{item.metaDescription}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold">
                View case type
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
