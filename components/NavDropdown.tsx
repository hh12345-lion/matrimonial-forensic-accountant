"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export type NavDropdownItem = { href: string; label: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  align?: "left" | "right";
};

export function NavDropdown({
  label,
  href,
  items,
  align = "left",
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const menuPosition =
    align === "right" ? "right-0 left-auto" : "left-0 right-auto";

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex min-h-touch max-w-[11rem] items-center gap-1 rounded px-2 py-2 text-sm text-body transition hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold xl:max-w-none"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        <Link
          href={href}
          className="truncate hover:text-navy"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </Link>
        <span className="shrink-0 text-xs text-charcoal" aria-hidden="true">
          ▾
        </span>
      </button>
      {open && (
        <ul
          role="menu"
          className={`absolute top-full z-50 max-h-[min(70vh,24rem)] min-w-[min(100vw-2rem,16rem)] overflow-y-auto rounded-card border border-line bg-white py-2 shadow-card before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] sm:min-w-[240px] ${menuPosition}`}
        >
          <li role="none">
            <Link
              href={href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm font-semibold text-navy hover:bg-section-alt"
              onClick={() => setOpen(false)}
            >
              All {label}
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className="block break-words px-4 py-2.5 text-sm text-body hover:bg-section-alt hover:text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
