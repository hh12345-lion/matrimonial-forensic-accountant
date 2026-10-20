import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section, Prose } from "@/components/Section";
import { getBlogBySlug } from "@/lib/blog";
import { PageHero } from "@/components/PageHero";
import { markdownToHtml } from "@/lib/markdown";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  const base = buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });

  const imageUrl = post.image ? `${SITE_URL}${post.image}` : undefined;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: imageUrl
        ? [{ url: imageUrl, alt: post.imageAlt || post.title }]
        : base.openGraph && "images" in base.openGraph
          ? base.openGraph.images
          : undefined,
    },
    twitter: {
      ...base.twitter,
      card: "summary_large_image",
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          image: post.image ? `${SITE_URL}${post.image}` : undefined,
          inLanguage: "en-GB",
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          mainEntityOfPage: url,
          url,
        }}
      />

      <PageHero
        title={post.title}
        subtitle={post.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Article" }]}
      />

      <Section>
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
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
          {post.image ? (
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={post.image} alt={post.imageAlt || post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
          ) : null}

          <Prose>
            <div className="mt-8" dangerouslySetInnerHTML={{ __html: html }} />
          </Prose>

          <p className="mt-12 border-t border-line pt-8 text-sm">
            <Link href="/blog" className="font-semibold text-gold hover:underline">
              ← Back to the blog
            </Link>
            <span className="mx-3 text-charcoal/40">·</span>
            <Link href="/contact" className="font-semibold text-gold hover:underline">
              Enquire
            </Link>
          </p>
        </article>
      </Section>

      <CTASection />
    </>
  );
}
