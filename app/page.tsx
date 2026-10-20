import Image from "next/image";
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
import { photos } from "@/lib/photos";
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
    title: "Deadline-aware",
    text: "Family proceedings run to a timetable. We plan the work around FDR and final hearing dates and can provide preliminary assessments where proceedings require it.",
  },
];

const assets = [
  { photo: photos.semiDetached, title: "The family home", text: "Equity, mortgage redemption and the realistic cost of rehousing both parties." },
  { photo: photos.bankOfEngland, title: "Business interests", text: "Valuation, liquidity and how much cash a company can release without harm." },
  { photo: photos.farmhouse, title: "Farms and land", text: "Agricultural holdings, partnerships and assets tied up in a working business." },
  { photo: photos.saleBoard, title: "Property portfolios", text: "Rental income, capital gains exposure and the net value after tax." },
];

const audiences = [
  {
    photo: photos.lincolnsInnFields,
    title: "For family law solicitors",
    text: "FPR Part 25 expert witness and forensic accounting support in financial remedy, Schedule 1, and TOLATA proceedings. Senior-led delivery with clear, judge-focused reporting.",
  },
  {
    photo: photos.graysInn,
    title: "For barristers",
    text: "Expert reports and preliminary advice that withstand cross-examination, supporting submissions on valuation, income, and non-disclosure issues at FDR and final hearing.",
  },
  {
    photo: photos.villageCottages,
    title: "For parties",
    text: "Where appropriate, we accept instructions via solicitors acting for parties who require independent forensic analysis of financial disclosure and business interests.",
  },
];

export default function HomePage() {
  const links = getHomepageInternalLinks();

  return (
    <>
      <JsonLd data={homepageSchema()} />
      <PageHero
        title={SITE_NAME}
        subtitle="A UK specialist matrimonial forensic accounting practice for England and Wales family proceedings. Independent FPR Part 25 expert witness reports, business valuations, and financial investigations, with senior forensic accountant involvement from instruction to testimony."
      >
        <h2 className="sr-only">Matrimonial Expert Witness &amp; Forensic Accounting Services</h2>
        <Button href="/contact">{CTA_LABEL}</Button>
        <Button href="/services" variant="secondary">
          View services
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h2 className="break-words font-serif text-3xl font-bold text-brand md:text-4xl">Who we are</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
              {SITE_NAME} is an independent UK forensic accounting practice specialising exclusively in family and
              matrimonial proceedings in England and Wales. We provide expert witness reports and financial investigation
              services to family law solicitors and barristers practising in the English and Welsh courts. We do not accept
              instructions for proceedings outside the United Kingdom. Every engagement is led by a senior forensic
              accountant, not handed to a junior team after the first call.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Matrimonial expert witness &amp; forensic accounting
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image src={photos.ringsWheat.src} alt={photos.ringsWheat.alt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </Section>

      <section className="bg-brand py-16 text-white sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <h2 className="font-serif text-3xl font-bold !text-white md:text-4xl">What we do</h2>
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              We work across financial remedy and divorce in the Family Court of England and Wales, matrimonial business
              valuation, hidden assets and undisclosed income, Schedule 1 claims, TOLATA and cohabitation disputes, and high
              net worth complex matrimonial matters.
            </p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {assets.map((a) => (
              <li key={a.title} className="group">
                <div className="shoulder relative aspect-[4/5] overflow-hidden">
                  <Image src={a.photo.src} alt={a.photo.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold !text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section alt>
        <h2 className="break-words font-serif text-3xl font-bold text-brand md:text-4xl">Why family solicitors instruct us</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <article key={pillar.title} className="rounded-3xl bg-white p-8 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-muted font-serif text-lg font-bold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-6 break-words font-serif text-xl font-semibold text-brand">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-body">{pillar.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl break-words font-serif text-3xl font-bold text-brand md:text-4xl">
            Our matrimonial forensic accounting services
          </h2>
          <Button href="/services" variant="secondary">
            All services
          </Button>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={servicePath(service.id)}
              className="group flex flex-col bg-white p-7 transition hover:bg-accent-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            >
              <span className="font-serif text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 break-words font-serif text-lg font-semibold text-brand group-hover:text-accent">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="break-words font-serif text-3xl font-bold text-brand md:text-4xl">Who we help</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {audiences.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-3xl bg-white shadow-card">
              <div className="relative aspect-[16/10]">
                <Image src={a.photo.src} alt={a.photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-lg font-semibold text-brand">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <InternalLinksSection
          title="Explore our practice"
          links={[...links.services, ...links.practiceAreas, { href: "/contact", label: "Contact us" }]}
        />
      </Section>

      <section className="relative overflow-hidden">
        <Image src={photos.innerTemple.src} alt={photos.innerTemple.alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-brand/80" aria-hidden="true" />
        <div className="container-page relative py-20 sm:py-24">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="break-words font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Matrimonial forensic accounting is as much about communication as calculation.
            </p>
            <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent-muted">{SITE_NAME}</footer>
          </blockquote>
        </div>
      </section>

      <CTASection />
    </>
  );
}
