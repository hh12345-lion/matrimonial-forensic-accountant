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
    label: "About the practice",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-we-work", label: "How We Work" },
      { href: "/qualifications-accreditations", label: "Qualifications" },
      { href: "/fees", label: "Fees" },
    ],
  },
  {
    label: "Services",
    links: [
      { href: "/services", label: "All Services" },
      ...serviceDropdownItems,
    ],
  },
  {
    label: "Case Types",
    links: caseTypeDropdownItems,
  },
  {
    label: "Experience",
    links: [
      { href: "/practice-areas", label: "All Practice Areas" },
      ...practiceAreaDropdownItems,
      { href: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    label: "Resources",
    links: [{ href: "/insights", label: "Insights" }],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 pt-safe">
      <div className="border-b border-brand/20 bg-brand text-parchment">
        <div className="container-page flex flex-col gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="font-medium tracking-wide">
            England &amp; Wales · Family Court Expert Witness · FPR Part 25
          </p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="truncate font-medium text-parchment/85 transition hover:text-white focus:outline-none focus-visible:underline"
          >
            {SITE_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-b-2 border-accent bg-parchment/95 shadow-header backdrop-blur-md">
        <div className="container-page flex items-center justify-between gap-4 py-3 nav:py-4">
          <Link
            href="/"
            className="group flex min-h-touch min-w-0 items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span
              className="hidden h-11 w-1 shrink-0 bg-gradient-to-b from-accent to-sage sm:block"
              aria-hidden="true"
            />
            <span className="min-w-0">
              <span className="block truncate font-serif text-base font-semibold leading-tight text-brand group-hover:text-accent xs:text-lg nav:text-xl">
                {SITE_NAME}
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-sage md:block">
                Matrimonial forensic accounting
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 nav:flex xl:gap-2"
            aria-label="Main navigation"
          >
            <Link href="/about" className="nav-link">
              About
            </Link>
            <NavDropdown
              label="Services"
              href="/services"
              items={serviceDropdownItems}
              align="left"
            />
            <NavDropdown
              label="Case Types"
              href="/case-types"
              items={caseTypeDropdownItems}
              align="left"
            />
            <NavDropdown
              label="Practice Areas"
              href="/practice-areas"
              items={practiceAreaDropdownItems}
              align="right"
            />
            {desktopNavLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex min-h-touch shrink-0 items-center border border-accent bg-accent px-4 py-2 text-sm font-semibold text-parchment transition hover:border-accent-light hover:bg-accent-light focus:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:ml-3"
            >
              {CTA_LABEL}
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex min-h-touch min-w-touch shrink-0 flex-col items-center justify-center gap-1.5 rounded nav:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-0.5 w-6 bg-brand transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="max-h-[calc(100dvh-7.5rem)] overflow-y-auto overscroll-contain border-b-2 border-accent bg-parchment nav:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-page space-y-0 py-2 pb-safe">
            {mobileGroups.map((group, index) => (
              <div
                key={group.label}
                className={`border-t border-line py-5 ${index === 0 ? "border-t-0" : ""}`}
              >
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-sage">
                  {group.label}
                </p>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="flex min-h-touch items-center break-words border-l-2 border-transparent pl-3 text-body transition hover:border-accent hover:text-brand"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-t border-line py-5">
              <Link
                href="/contact"
                className="flex min-h-touch w-full items-center justify-center border border-accent bg-accent text-sm font-semibold text-parchment transition hover:bg-accent-light"
                onClick={() => setOpen(false)}
              >
                {CTA_LABEL}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
