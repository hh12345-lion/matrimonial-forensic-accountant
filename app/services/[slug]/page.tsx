import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ServiceContent } from "@/components/ServiceContent";
import { services, getService, servicePath } from "@/lib/data/services";
import { SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: servicePath(slug),
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = servicePath(slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path },
            ]),
            faqPageSchema(service.faqs),
          ],
        }}
      />
      <PageHero
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <Section>
        <ServiceContent blocks={service.blocks} />
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
          Frequently asked questions
        </h2>
        <p className="mt-2 max-w-2xl text-body">
          Common questions about {service.title.toLowerCase()} from{" "}
          {SITE_NAME}.
        </p>
        <div className="mt-8">
          <FAQAccordion faqs={service.faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
