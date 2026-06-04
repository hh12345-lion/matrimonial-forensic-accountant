import Link from "next/link";
import { SITE_NAME, SITE_EMAIL } from "@/lib/site";
import { CookieSettingsButton } from "./cookies/CookieSettingsButton";
import { services, servicePath } from "@/lib/data/services";
import { caseTypes, caseTypePath } from "@/lib/data/case-types";

const firmLinks = [
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="container-page py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-10">
          <div>
            <p className="font-serif text-lg font-semibold">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-white/70">
              Matrimonial Expert Witness &amp; Forensic Accounting
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-4 inline-block break-all text-sm text-gold hover:underline"
            >
              {SITE_EMAIL}
            </a>
            <ul className="mt-6 space-y-2">
              {firmLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={servicePath(s.id)}
                    className="text-sm text-white/70 hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Case Types
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/case-types"
                  className="text-sm font-semibold text-white/90 hover:text-gold"
                >
                  All Case Types
                </Link>
              </li>
              {caseTypes.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={caseTypePath(c.slug)}
                    className="text-sm text-white/70 hover:text-gold"
                  >
                    {c.hubLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <Link href="/terms" className="hover:text-gold">
              Terms
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <Link href="/cookies" className="hover:text-gold">
              Cookie Policy
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <CookieSettingsButton className="text-white/70 hover:text-gold" />
          </div>
          <p className="mt-4 max-w-3xl text-sm text-white/60">
            {SITE_NAME} is an independent forensic accounting practice. We are
            not a law firm and do not provide legal advice.
          </p>
          <p className="mt-2 text-sm text-white/50">
            &copy; {new Date().getFullYear()} {SITE_NAME}. England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
