"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_NAME, CTA_LABEL } from "@/lib/site";
import { services, servicePath } from "@/lib/data/services";
import { practiceAreas } from "@/lib/data/practice-areas";
import { caseTypes, caseTypePath } from "@/lib/data/case-types";

type NavLink = { href: string; label: string };
type NavGroup = { label: string; href: string; items: NavLink[] };

const groups: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    items: services.map((s) => ({ href: servicePath(s.id), label: s.title })),
  },
  {
    label: "Case Types",
    href: "/case-types",
    items: caseTypes.map((c) => ({ href: caseTypePath(c.slug), label: c.hubLabel })),
  },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    items: [
      ...practiceAreas.map((p) => ({ href: `/practice-areas/${p.slug}`, label: p.title })),
      { href: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    label: "The Practice",
    href: "/about",
    items: [
      { href: "/about", label: "About" },
      { href: "/how-we-work", label: "How We Work" },
      { href: "/qualifications-accreditations", label: "Qualifications" },
      { href: "/fees", label: "Fees" },
    ],
  },
];

const links: NavLink[] = [
  { href: "/insights", label: "Insights" },
  { href: "/blog", label: "Blog" },
];

/** The curved arms of the monogram, drawn under the current section. */
function Arc() {
  return (
    <svg viewBox="0 0 120 24" className="absolute -bottom-2 left-1/2 h-2.5 w-[70%] -translate-x-1/2 text-accent" aria-hidden="true" preserveAspectRatio="none">
      <path d="M4 4c10 18 34 18 56 18s46 0 56-18" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

/** Client only to read the current path; the header is rendered on the server first. */
export function Header() {
  const pathname = usePathname() || "/";
  const isOn = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const groupOn = (g: NavGroup) => isOn(g.href) || g.items.some((i) => isOn(i.href));

  const top =
    "relative inline-flex min-h-touch items-center gap-1.5 whitespace-nowrap px-1 text-[0.92rem] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <header className="relative z-40 border-b border-line bg-white">
      <input key={pathname} id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-hidden="true" tabIndex={-1} />
      <div className="container-page flex items-center justify-between gap-6 py-3.5">
        <Link href="/" aria-label={`${SITE_NAME} home`} className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo.svg" alt={SITE_NAME} width={816} height={251} className="h-12 w-auto sm:h-[54px]" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 nav:flex">
          {groups.map((g) => {
            const on = groupOn(g);
            return (
              <div key={g.label} className="nav-item relative">
                <Link
                  href={g.href}
                  aria-current={pathname === g.href ? "page" : undefined}
                  className={`${top} ${on ? "text-accent" : "text-brand hover:text-accent"}`}
                >
                  {g.label}
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-60" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  {on && <Arc />}
                </Link>
                <div className="nav-panel absolute left-1/2 top-full z-50 w-[19rem] -translate-x-1/2 pt-4 transition duration-150">
                  <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card-hover">
                    <ul className="max-h-[70vh] overflow-y-auto p-2">
                      {g.items.map((i) => (
                        <li key={i.href}>
                          <Link
                            href={i.href}
                            aria-current={pathname === i.href ? "page" : undefined}
                            className={`block rounded-xl px-4 py-2.5 text-sm transition-colors hover:bg-accent-muted focus:outline-none focus-visible:bg-accent-muted ${
                              pathname === i.href ? "bg-accent-muted font-semibold text-accent" : "text-brand"
                            }`}
                          >
                            {i.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={g.href} className="block border-t border-line bg-mist px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent hover:text-brand">
                      All {g.label.toLowerCase()}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`${top} ${isOn(l.href) ? "text-accent" : "text-brand hover:text-accent"}`}
            >
              {l.label}
              {isOn(l.href) && <Arc />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`hidden min-h-touch items-center rounded-full px-6 text-sm font-semibold transition sm:inline-flex ${
              pathname === "/contact" ? "bg-brand text-white" : "bg-accent text-white hover:bg-accent-light"
            }`}
          >
            {CTA_LABEL}
          </Link>
          <label
            htmlFor="mobile-nav-toggle"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-brand nav:hidden"
            aria-label="Open or close the menu"
          >
            <span className="menu-icon flex flex-col gap-[5px]">
              <span />
              <span />
              <span />
            </span>
          </label>
        </div>
      </div>

      <div className="hidden max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-line bg-white peer-checked:block nav:!hidden">
        <nav aria-label="Mobile navigation" className="container-page pb-8 pt-2">
          {groups.map((g) => (
            <details key={g.label} className="fold border-b border-line" open={groupOn(g)}>
              <summary className={`flex min-h-[52px] cursor-pointer items-center justify-between font-serif text-lg font-semibold ${groupOn(g) ? "text-accent" : "text-brand"}`}>
                {g.label}
                <span className="fold-mark text-2xl font-light leading-none text-accent transition-transform" aria-hidden="true">
                  +
                </span>
              </summary>
              <ul className="pb-4">
                <li>
                  <Link href={g.href} aria-current={pathname === g.href ? "page" : undefined} className="block py-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    All {g.label.toLowerCase()}
                  </Link>
                </li>
                {g.items.map((i) => (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      aria-current={pathname === i.href ? "page" : undefined}
                      className={`block py-2 ${pathname === i.href ? "font-semibold text-accent" : "text-body"}`}
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`flex min-h-[52px] items-center border-b border-line font-serif text-lg font-semibold ${isOn(l.href) ? "text-accent" : "text-brand"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-6 flex min-h-touch items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white">
            {CTA_LABEL}
          </Link>
        </nav>
      </div>
    </header>
  );
}
