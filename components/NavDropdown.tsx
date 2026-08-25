"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export type NavDropdownItem = { href: string; label: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  align?: "left" | "right";
  variant?: "docket" | "default";
};

export function NavDropdown({
  label,
  href,
  items,
  align = "left",
  variant = "default",
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isDocket = variant === "docket";

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

  const triggerClass = isDocket
    ? "docket-link max-w-[11rem] gap-1 xl:max-w-none"
    : "relative inline-flex min-h-touch max-w-[11rem] items-center gap-1 px-1 py-2 text-sm font-medium text-body transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:max-w-none";

  return (
    <div
      ref={ref}
      className="relative flex items-stretch"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={triggerClass}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        <Link
          href={href}
          className="truncate"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </Link>
        <span
          className={`shrink-0 text-[10px] ${isDocket ? "text-parchment/50" : "text-charcoal"}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {open && (
        <ul
          role="menu"
          className={`absolute top-full z-50 max-h-[min(70vh,24rem)] min-w-[min(100vw-2rem,16rem)] overflow-y-auto border border-line border-t-2 border-t-accent bg-parchment py-2 shadow-card before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] sm:min-w-[240px] ${menuPosition}`}
        >
          <li role="none">
            <Link
              href={href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-mist"
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
                className="block break-words border-l-2 border-transparent px-4 py-2.5 text-sm text-body hover:border-accent hover:bg-mist hover:text-brand"
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
