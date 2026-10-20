import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_EMAIL, CTA_LABEL } from "@/lib/site";
import { CookieSettingsButton } from "./cookies/CookieSettingsButton";
import { services, servicePath } from "@/lib/data/services";
import { photos } from "@/lib/photos";

const practiceLinks = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/qualifications-accreditations", label: "Qualifications" },
  { href: "/fees", label: "Fees" },
  { href: "/contact", label: "Enquire" },
];

const resourceLinks = [
  { href: "/case-types", label: "Case Types" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/blog", label: "Blog" },
];

const linkCls = "text-white/75 transition-colors hover:text-white focus:outline-none focus-visible:underline";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand text-white">
      {/* Enquiry band: two shoulder frames either side of the closing statement */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-[200px_minmax(0,1fr)_200px] lg:py-16">
          <div className="shoulder relative mx-auto hidden h-52 w-44 overflow-hidden lg:block">
            <Image src={photos.thatchedCottage.src} alt={photos.thatchedCottage.alt} fill sizes="176px" className="object-cover" />
          </div>
          <div className="text-center">
            <svg viewBox="0 0 120 24" className="mx-auto h-5 w-20 text-accent-light" aria-hidden="true">
              <path d="M4 4c10 18 34 18 56 18s46 0 56-18" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <p className="mx-auto mt-5 max-w-2xl font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl">
              The best expert report means nothing if it cannot be understood by the judge who reads it.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-touch items-center rounded-full bg-accent px-7 text-sm font-semibold text-white transition hover:bg-accent-light">
                {CTA_LABEL}
              </Link>
              <a href={`mailto:${SITE_EMAIL}`} className="inline-flex min-h-touch items-center break-all rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-white">
                {SITE_EMAIL}
              </a>
            </div>
          </div>
          <div className="shoulder relative mx-auto hidden h-52 w-44 overflow-hidden lg:block">
            <Image src={photos.graysInn.src} alt={photos.graysInn.alt} fill sizes="176px" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_0.8fr_0.8fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-stacked-light.svg" alt={SITE_NAME} width={520} height={430} className="h-auto w-40" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
            Independent forensic accounting for financial remedy, Schedule 1 and TOLATA proceedings in England and Wales.
          </p>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-muted">Services</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={servicePath(s.id)} className={linkCls}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-muted">The practice</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {practiceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-muted">Resources</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {resourceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0F2536]">
        <div className="container-page py-6">
          <p className="max-w-4xl text-xs leading-relaxed text-white/60">
            {SITE_NAME} is an independent UK forensic accounting practice instructed in England and Wales family proceedings. We do not accept instructions outside the United Kingdom. We are not a firm of solicitors and do not provide legal advice.
          </p>
          <div className="mt-4 flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {year} {SITE_NAME}. Registered in England and Wales.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/privacy" className={linkCls}>Privacy policy</Link>
              <Link href="/terms" className={linkCls}>Terms of use</Link>
              <Link href="/cookies" className={linkCls}>Cookie policy</Link>
              <Link href="/image-credits" className={linkCls}>Image credits</Link>
              <CookieSettingsButton className="!text-xs text-white/75 hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
