import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { insights } from "@/lib/data/insights";

export const metadata = buildMetadata({
  title: "Insights | Matrimonial Forensic Accountant UK Forensic Accounting",
  description:
    "Forensic accounting insights and expert commentary from Matrimonial Forensic Accountant on fraud, disputes, expert witness practice, and financial investigations.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <PageHero
        title="Insights"
        subtitle="Commentary and analysis from Matrimonial Forensic Accountant on forensic accounting, expert witness practice, and financial disputes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {insights.map((article) => (
            <article
              key={article.slug}
              className="rounded-card border border-line bg-white p-8 shadow-card"
            >
              <time
                dateTime={article.datePublished}
                className="text-xs font-semibold uppercase tracking-wide text-gold"
              >
                {new Date(article.datePublished).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h2 className="mt-3 font-serif text-xl font-semibold text-navy">
                <Link
                  href={`/insights/${article.slug}`}
                  className="hover:text-gold focus:outline-none focus-visible:underline"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 text-body leading-relaxed">{article.excerpt}</p>
              <Link
                href={`/insights/${article.slug}`}
                className="mt-4 inline-flex min-h-touch items-center text-sm font-semibold text-gold hover:underline"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
