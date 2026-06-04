import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { servicesPageSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { services, servicePath } from "@/lib/data/services";

export const metadata = buildMetadata({
  title: "Matrimonial Forensic Accounting Services | Matrimonial Forensic Accountant UK",
  description:
    "Matrimonial forensic accounting services: FPR Part 25 expert witness reports, business valuation, Form E review, hidden asset investigation, and income analysis for UK family proceedings.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        title="Matrimonial Forensic Accounting Services"
        subtitle="Senior-led forensic accounting and FPR Part 25 expert witness services for family law solicitors across the UK."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="card-elevated p-8">
              <h2 className="font-serif text-xl font-semibold text-navy">
                {service.title}
              </h2>
              <p className="mt-3 text-body leading-relaxed">
                {service.description}
              </p>
              <Link
                href={servicePath(service.id)}
                className="mt-4 inline-flex min-h-touch items-center text-sm font-semibold text-gold hover:underline"
              >
                View service details
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
