import Link from "next/link";
import { SITE_NAME, SITE_EMAIL } from "@/lib/site";
import { CookieSettingsButton } from "./cookies/CookieSettingsButton";
import { services, servicePath } from "@/lib/data/services";

const firmLinks = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/qualifications-accreditations", label: "Qualifications" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/case-types", label: "Case Types" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/fees", label: "Fees" },
  { href: "/contact", label: "Enquire" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t-[3px] border-double border-line bg-parchment">
      {/* Closing statement band */}
      <div className="border-b border-line bg-sage-light/60">
        <div className="container-page py-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
            <blockquote className="max-w-2xl">
              <p className="font-serif text-xl font-medium leading-snug text-brand sm:text-2xl lg:text-[1.75rem]">
                &ldquo;The best expert report means nothing if it cannot be
                understood by the judge who reads it.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-sage">
                {SITE_NAME}
              </footer>
            </blockquote>
            <div className="shrink-0 lg:text-right">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage">
                Direct instruction
              </p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-2 inline-block break-all text-base font-semibold text-accent hover:text-accent-light"
              >
                {SITE_EMAIL}
              </a>
              <p className="mt-2 text-xs text-charcoal">
                England &amp; Wales · Response within one working day
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline service index — not columns, not pills */}
      <div className="border-b border-line">
        <div className="container-page py-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage">
            Expert witness services
          </p>
          <p className="mt-4 text-sm leading-loose text-body">
            {services.map((service, index) => (
              <span key={service.id}>
                {index > 0 && (
                  <span className="mx-2 text-line select-none" aria-hidden="true">
                    ·
                  </span>
                )}
                <Link
                  href={servicePath(service.id)}
                  className="font-medium hover:text-accent focus:outline-none focus-visible:underline"
                >
                  {service.title}
                </Link>
              </span>
            ))}
          </p>

          <nav
            aria-label="Footer navigation"
            className="mt-8 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-body"
          >
            {firmLinks.map((link, index) => (
              <span key={link.href} className="inline-flex items-center">
                {index > 0 && (
                  <span
                    className="mx-2 text-line select-none"
                    aria-hidden="true"
                  >
                    —
                  </span>
                )}
                <Link
                  href={link.href}
                  className="hover:text-accent focus:outline-none focus-visible:underline"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Certificate-style legal panel — light, not a dark strip */}
      <div className="container-page py-8 sm:py-10">
        <div className="footer-certificate px-5 py-6 sm:px-8 sm:py-7">
          <p className="text-sm leading-relaxed text-body">
            {SITE_NAME} is an independent UK forensic accounting practice
            instructed in England and Wales family proceedings. We do not accept
            instructions outside the United Kingdom. We are not a firm of
            solicitors and do not provide legal advice.
          </p>
          <div className="mt-5 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-charcoal">
              &copy; {year} {SITE_NAME}. Registered in England and Wales.
            </p>
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-xs text-charcoal">
              {[
                { href: "/privacy", label: "Privacy policy" },
                { href: "/terms", label: "Terms of use" },
                { href: "/cookies", label: "Cookie policy" },
              ].map((item, index) => (
                <span key={item.href} className="inline-flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-line select-none" aria-hidden="true">
                      /
                    </span>
                  )}
                  <Link
                    href={item.href}
                    className="hover:text-accent focus:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
              <span className="mx-2 text-line select-none hidden sm:inline" aria-hidden="true">
                /
              </span>
              <CookieSettingsButton className="text-charcoal hover:text-accent" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
