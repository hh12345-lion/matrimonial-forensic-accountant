"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_NAME, CTA_LABEL } from "@/lib/site";
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
    label: "About",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-we-work", label: "How We Work" },
      { href: "/qualifications-accreditations", label: "Qualifications" },
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
    links: [
      { href: "/insights", label: "Insights" },
    ],
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
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 shadow-sm backdrop-blur-md pt-safe">
      <div className="container-page flex items-center justify-between gap-3 py-3">
        <Link
          href="/"
          className="min-h-touch max-w-[min(100%,12rem)] shrink-0 truncate font-serif text-sm font-semibold leading-tight text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold xs:max-w-none xs:whitespace-normal xs:text-base nav:text-lg"
        >
          {SITE_NAME}
        </Link>

        <nav
          className="hidden items-center gap-0.5 nav:flex xl:gap-1"
          aria-label="Main navigation"
        >
          <Link
            href="/about"
            className="inline-flex min-h-touch items-center rounded px-2 py-2 text-sm text-body transition hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
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
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-touch items-center rounded px-2 py-2 text-sm text-body transition hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1 inline-flex min-h-touch shrink-0 items-center rounded-card border-2 border-gold bg-gold px-3 py-2 text-sm font-semibold text-navy transition hover:border-gold-light hover:bg-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-gold xl:ml-2 xl:px-4"
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
            className={`block h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border-t border-line bg-white nav:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-page space-y-6 py-6 pb-safe">
            {mobileGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-charcoal">
                  {group.label}
                </p>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="flex min-h-touch items-center break-words text-body hover:text-navy"
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
              className="flex min-h-touch w-full items-center justify-center rounded-card border-2 border-gold bg-gold text-sm font-semibold text-navy"
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
