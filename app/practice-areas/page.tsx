import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { practiceAreas } from "@/lib/data/practice-areas";

export const metadata = buildMetadata({
  title: "Practice Areas | Matrimonial Forensic Accountant UK",
  description:
    "Matrimonial Forensic Accountant practice areas: financial remedy, business valuation, hidden assets, Schedule 1, TOLATA, and high net worth matrimonial proceedings.",
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice-areas" },
        ])}
      />
      <PageHero
        title="Practice Areas"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas" },
        ]}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="card-elevated group block p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h2 className="font-serif text-xl font-semibold text-navy group-hover:text-gold">
                {area.title}
              </h2>
              <p className="mt-3 text-body leading-relaxed">
                {area.shortDescription}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold">
                View practice area
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
