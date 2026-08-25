"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_NAME, SITE_EMAIL, CTA_LABEL } from "@/lib/site";
import { NavDropdown } from "./NavDropdown";
import { services, servicePath } from "@/lib/data/services";
import { practiceAreas } from "@/lib/data/practice-areas";
import { caseTypes, caseTypePath } from "@/lib/data/case-types";

const desktopNavLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
];

const serviceDropdownItems = services.map((s) => ({
  href: servicePath(s.id),
  label: s.title,
}));

const practiceAreaDropdownItems = practiceAreas.map((p) => ({
  href: `/practice-areas/${p.slug}`,
  label: p.title,
}));

const caseTypeDropdownItems = [
  { href: "/case-types", label: "All Case Types" },
  ...caseTypes.map((c) => ({
    href: caseTypePath(c.slug),
    label: c.hubLabel,
  })),
];

const mobileGroups = [
  {
    index: "I",
    label: "About the practice",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-we-work", label: "How We Work" },
      { href: "/qualifications-accreditations", label: "Qualifications" },
      { href: "/fees", label: "Fees" },
    ],
  },
  {
    index: "II",
    label: "Services",
    links: [
      { href: "/services", label: "All Services" },
      ...serviceDropdownItems,
    ],
  },
  {
    index: "III",
    label: "Case Types",
    links: caseTypeDropdownItems,
  },
  {
    index: "IV",
    label: "Experience",
    links: [
      { href: "/practice-areas", label: "All Practice Areas" },
      ...practiceAreaDropdownItems,
      { href: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    index: "V",
    label: "Resources",
    links: [{ href: "/insights", label: "Insights" }],
  },
];

function DocketDivider() {
  return (
    <span
      className="hidden h-5 w-px shrink-0 self-center bg-parchment/20 nav:block"
      aria-hidden="true"
    />
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pt-safe">
      {/* Court stationery letterhead — scrolls away */}
      <div className="site-letterhead">
        <div className="container-page py-2">
          <div className="flex flex-col gap-1 text-[11px] font-medium tracking-wide text-charcoal sm:flex-row sm:items-center sm:justify-between">
            <p>FPR Part 25 · England &amp; Wales family proceedings</p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="truncate hover:text-accent focus:outline-none focus-visible:underline"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>

        <div className="container-page pb-6 pt-5 sm:pb-8 sm:pt-6">
          <Link
            href="/"
            className="group inline-block max-w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-parchment"
          >
            <span className="block font-serif text-2xl font-semibold leading-none tracking-tight text-brand xs:text-3xl sm:text-4xl lg:text-[2.65rem]">
              Matrimonial Forensic
              <span className="block text-accent">Accountant</span>
            </span>
            <span
              className="mt-4 block h-px w-20 bg-sage transition-all duration-300 group-hover:w-32"
              aria-hidden="true"
            />
            <span className="mt-3 block max-w-xl text-sm leading-relaxed text-body">
              Expert witness and forensic accounting for financial remedy,
              business valuation, and disclosure disputes before the Family Court.
            </span>
          </Link>
        </div>
      </div>

      {/* Sticky docket navigation rail */}
      <div className="site-docket sticky top-0 z-50 shadow-header">
        <div className="container-page flex items-stretch justify-between gap-3">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 border-r border-parchment/15 py-2 pr-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-light nav:pr-4"
            aria-label={`${SITE_NAME} home`}
          >
            <span
              className="flex h-9 w-9 shrink-0 rotate-45 items-center justify-center border border-accent-light/60 bg-accent/30"
              aria-hidden="true"
            >
              <span className="-rotate-45 font-serif text-[11px] font-bold leading-none text-parchment">
                MFA
              </span>
            </span>
            <span className="hidden font-serif text-sm font-semibold leading-tight text-parchment lg:block">
              {SITE_NAME}
            </span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-stretch justify-center nav:flex"
            aria-label="Main navigation"
          >
            <div className="flex items-stretch">
              <Link href="/about" className="docket-link">
                About
              </Link>
              <DocketDivider />
              <NavDropdown
                label="Services"
                href="/services"
                items={serviceDropdownItems}
                align="left"
                variant="docket"
              />
              <DocketDivider />
              <NavDropdown
                label="Case Types"
                href="/case-types"
                items={caseTypeDropdownItems}
                align="left"
                variant="docket"
              />
              <DocketDivider />
              <NavDropdown
                label="Practice Areas"
                href="/practice-areas"
                items={practiceAreaDropdownItems}
                align="right"
                variant="docket"
              />
              {desktopNavLinks.slice(1).map((link) => (
                <span key={link.href} className="flex items-stretch">
                  <DocketDivider />
                  <Link href={link.href} className="docket-link">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </nav>

          <div className="flex shrink-0 items-stretch gap-2">
            <Link
              href="/contact"
              className="hidden items-center bg-accent px-5 text-xs font-bold uppercase tracking-[0.16em] text-parchment transition hover:bg-accent-light focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-parchment sm:inline-flex"
            >
              {CTA_LABEL}
            </Link>

            <button
              type="button"
              className="inline-flex min-h-touch min-w-touch flex-col items-center justify-center gap-1.5 px-3 nav:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              <span
                className={`block h-0.5 w-5 bg-parchment transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-parchment transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-parchment transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-brand pt-[4.5rem] nav:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-page space-y-8 py-8 pb-safe">
            {mobileGroups.map((group) => (
              <div key={group.label}>
                <p className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-semibold text-parchment/20">
                    {group.index}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sage-light">
                    {group.label}
                  </span>
                </p>
                <ul className="mt-4 space-y-1 border-l border-parchment/15 pl-4">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="flex min-h-touch items-center break-words text-base text-parchment/85 transition hover:text-parchment"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              className="flex min-h-touch w-full items-center justify-center bg-accent text-sm font-bold uppercase tracking-[0.14em] text-parchment"
              onClick={() => setOpen(false)}
            >
              {CTA_LABEL}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
