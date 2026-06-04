import Link from "next/link";
import { buildMetadata, HOME_TITLE } from "@/lib/metadata";
import { getHomepageInternalLinks } from "@/lib/seo/internalLinks";
import { InternalLinksSection } from "@/components/seo/InternalLinksSection";
import { homepageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { services, servicePath } from "@/lib/data/services";
import { CTA_LABEL, SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: HOME_TITLE,
  description:
    "Matrimonial Forensic Accountant is a UK specialist forensic accounting practice providing FPR Part 25 expert witness reports, business valuations, hidden asset investigations, and income analysis for family proceedings.",
  path: "/",
});

const pillars = [
  {
    title: "Senior-led",
    text: "Every engagement is led by a senior chartered accountant with direct matrimonial forensic experience, not delegated to junior staff after instruction.",
  },
  {
    title: "Court-ready",
    text: "Reports are drafted for family court judges, not accountants. Clear methodology, transparent reasoning, and conclusions that withstand rigorous cross-examination.",
  },
  {
    title: "Responsive",
    text: "We understand that family proceedings have deadlines. We respond within one business day and can provide urgent preliminary assessments where proceedings require it.",
  },
];

export default function HomePage() {
  const links = getHomepageInternalLinks();

  return (
    <>
      <JsonLd data={homepageSchema()} />
      <PageHero
        title={SITE_NAME}
        subtitle="A UK specialist matrimonial forensic accounting practice providing independent FPR Part 25 expert witness reports, business valuations, and financial investigations, with senior forensic accountant involvement from instruction to testimony."
      >
        <h2 className="sr-only">
          Matrimonial Expert Witness &amp; Forensic Accounting Services
        </h2>
        <Button href="/contact">{CTA_LABEL}</Button>
        <Button href="/services" variant="secondary">
          Our Services
        </Button>
      </PageHero>

      <Section>
        <p className="font-serif text-sm font-semibold uppercase tracking-wide text-gold">
          Matrimonial Expert Witness &amp; Forensic Accounting
        </p>
        <h2 className="mt-2 break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Who We Are
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
          {SITE_NAME} is an independent forensic accounting practice specialising
          in family and matrimonial proceedings. We provide expert witness
          reports and financial investigation services to family law solicitors
          and barristers across the UK. Every engagement is led by a senior
          forensic accountant, not handed to a junior team after the first call.
        </p>
      </Section>

      <Section alt>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          What We Do
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
          We work across financial remedy and divorce, matrimonial business
          valuation, hidden assets and undisclosed income, Schedule 1 claims,
          TOLATA and cohabitation disputes, and high net worth complex
          matrimonial matters. Whether you need an FPR Part 25 business
          valuation for the Family Court, a Form E forensic review, or an
          urgent preliminary assessment before FDR, we respond quickly and
          advise clearly.
        </p>
      </Section>

      <Section>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Why Family Solicitors Instruct Us
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="card-elevated border-t-4 border-t-gold p-6"
            >
              <h3 className="break-words font-serif text-lg font-semibold text-navy sm:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-body leading-relaxed">{pillar.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Our Matrimonial Forensic Accounting Services
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={servicePath(service.id)}
              className="card-elevated group block p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="break-words font-serif text-lg font-semibold text-navy group-hover:text-gold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-body">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Who We Help
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-navy">
              For Family Law Solicitors
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Trusted FPR Part 25 expert witness and forensic accounting support
              in financial remedy, Schedule 1, and TOLATA proceedings. Senior-led
              delivery with clear, judge-focused reporting.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-navy">
              For Barristers
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Expert reports and preliminary advice that withstand
              cross-examination, supporting submissions on valuation, income,
              and non-disclosure issues at FDR and final hearing.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-navy">
              For Parties
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Where appropriate, we accept instructions via solicitors acting
              for parties who require independent forensic analysis of financial
              disclosure and business interests.
            </p>
          </div>
        </div>
      </Section>

      <Section alt>
        <InternalLinksSection
          title="Explore our practice"
          links={[
            ...links.services,
            ...links.practiceAreas,
            { href: "/contact", label: "Contact us" },
          ]}
        />
      </Section>

      <Section className="!py-16">
        <blockquote className="mx-auto max-w-3xl border-l-4 border-gold pl-4 sm:pl-6">
          <p className="break-words font-serif text-lg italic leading-relaxed text-navy sm:text-xl md:text-2xl">
            Matrimonial forensic accounting is as much about communication as
            calculation. The best expert report means nothing if it cannot be
            understood by the judge who reads it.
          </p>
          <footer className="mt-4 text-sm font-semibold text-charcoal">
            {SITE_NAME}
          </footer>
        </blockquote>
      </Section>

      <CTASection />
    </>
  );
}
