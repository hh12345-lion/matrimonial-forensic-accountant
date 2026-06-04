import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section, Prose } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { caseTypes, getCaseType, caseTypePath } from "@/lib/data/case-types";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseTypes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getCaseType(slug);
  if (!item) return {};
  return buildMetadata({
    title: item.metaTitle,
    description: item.metaDescription,
    path: caseTypePath(slug),
  });
}

export default async function CaseTypePage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseType(slug);
  if (!item) notFound();

  const path = caseTypePath(slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Case Types", path: "/case-types" },
              { name: item.hubLabel, path },
            ]),
            faqPageSchema(item.faqs),
          ],
        }}
      />
      <PageHero
        title={item.h1}
        subtitle={item.metaDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types", href: "/case-types" },
          { label: item.hubLabel },
        ]}
      />

      <Section>
        <Prose>
          {item.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </Prose>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-8">
          <FAQAccordion faqs={item.faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
