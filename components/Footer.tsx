import Link from "next/link";
import { SITE_NAME, SITE_EMAIL } from "@/lib/site";
import { CookieSettingsButton } from "./cookies/CookieSettingsButton";
import { services, servicePath } from "@/lib/data/services";
import { caseTypes, caseTypePath } from "@/lib/data/case-types";

const firmLinks = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/qualifications-accreditations", label: "Qualifications" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/fees", label: "Fees" },
  { href: "/contact", label: "Enquire" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-accent">
      <div className="bg-parchment">
        <div className="container-page py-12 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-12 w-1 shrink-0 bg-gradient-to-b from-accent to-sage"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-serif text-xl font-semibold text-brand sm:text-2xl">
                    {SITE_NAME}
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-body">
                    Independent UK matrimonial expert witness and forensic
                    accounting for England and Wales family proceedings.
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-5 inline-block break-all text-sm font-semibold text-accent hover:text-accent-light"
              >
                {SITE_EMAIL}
              </a>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-sage">
                England &amp; Wales only
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage">
                  The firm
                </p>
                <ul className="mt-4 space-y-2">
                  {firmLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-body transition hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage">
                  Services
                </p>
                <ul className="mt-4 space-y-2">
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={servicePath(s.id)}
                        className="text-sm text-body transition hover:text-accent"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage">
                  Case types
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/case-types"
                      className="text-sm font-semibold text-brand transition hover:text-accent"
                    >
                      All case types
                    </Link>
                  </li>
                  {caseTypes.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={caseTypePath(c.slug)}
                        className="text-sm text-body transition hover:text-accent"
                      >
                        {c.hubLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-brand text-parchment">
        <div className="container-page py-6">
          <p className="max-w-3xl text-sm leading-relaxed text-parchment/75">
            {SITE_NAME} is an independent UK forensic accounting practice
            instructed in England and Wales family proceedings. We do not accept
            instructions outside the United Kingdom. We are not a firm of
            solicitors and do not provide legal advice.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-parchment/60">
            <Link href="/privacy" className="hover:text-parchment">
              Privacy policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms" className="hover:text-parchment">
              Terms of use
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/cookies" className="hover:text-parchment">
              Cookie policy
            </Link>
            <span aria-hidden="true">·</span>
            <CookieSettingsButton className="text-parchment/70 hover:text-parchment" />
          </div>
          <p className="mt-4 text-xs text-parchment/50">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Registered in
            England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
