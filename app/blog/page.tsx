import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getAllBlogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Blog | Matrimonial Forensic Accountant Insights",
  description:
    "Articles on financial documents, Form E analysis, and instructing a matrimonial forensic accountant in England and Wales family proceedings.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${SITE_NAME} Blog`,
          url: `${SITE_URL}/blog`,
          inLanguage: "en-GB",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            image: post.image ? `${SITE_URL}${post.image}` : undefined,
          })),
        }}
      />
      <PageHero
        title="Blog"
        subtitle="Practitioner-facing articles on matrimonial forensic accounting, financial documents, and instructing experts in family proceedings."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <Section>
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-touch items-center justify-center rounded-card bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
          >
            Enquire
          </Link>
          <Link
            href="/insights"
            className="inline-flex min-h-touch items-center justify-center rounded-card border border-line px-6 py-3 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold"
          >
            Browse insights
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-body">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="overflow-hidden rounded-card border border-line bg-white shadow-card"
              >
                {post.image ? (
                  <Link href={`/blog/${post.slug}`} className="relative block h-52 w-full">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </Link>
                ) : null}
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                    <time dateTime={post.updated || post.date}>
                      {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="mx-2 text-charcoal/50">·</span>
                    <span className="normal-case tracking-normal text-charcoal/70">
                      {post.readingTime}
                    </span>
                  </p>
                  <h2 className="mt-3 font-serif text-xl font-semibold text-navy">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-gold focus:outline-none focus-visible:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-body leading-relaxed">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex min-h-touch items-center text-sm font-semibold text-gold hover:underline"
                  >
                    Read article
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <CTASection />
    </>
  );
}
