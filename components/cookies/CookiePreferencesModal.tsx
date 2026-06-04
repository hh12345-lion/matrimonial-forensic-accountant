"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";
import type { ConsentPreferences } from "@/lib/cookies/types";

const categories = [
  {
    key: "necessary" as const,
    label: "Necessary Cookies",
    description:
      "Required for the website to function. Cannot be disabled.",
    locked: true,
  },
  {
    key: "analytics" as const,
    label: "Analytics",
    description:
      "Help us understand how visitors use the site (e.g. Google Analytics).",
    locked: false,
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    description:
      "Used for advertising and remarketing (e.g. Meta Pixel, LinkedIn).",
    locked: false,
  },
  {
    key: "preferences" as const,
    label: "Preferences",
    description: "Remember your settings and improve your experience.",
    locked: false,
  },
];

export function CookiePreferencesModal() {
  const { modalOpen, preferences, savePreferences, acceptAll } =
    useCookieConsent();
  const [draft, setDraft] = useState<ConsentPreferences>(preferences);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modalOpen) {
      setDraft(preferences);
      document.body.style.overflow = "hidden";
      firstFocusRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen, preferences]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") savePreferences(preferences);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, preferences, savePreferences]);

  if (!modalOpen) return null;

  const toggle = (key: keyof ConsentPreferences) => {
    if (key === "necessary") return;
    setDraft((d) => ({ ...d, [key]: !d[key] }));
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center bg-navy/70 p-0 sm:items-center sm:p-4"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) savePreferences(preferences);
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-labelledby="cookie-modal-title"
        aria-modal="true"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-card border-2 border-gold bg-white shadow-card animate-fade-in sm:rounded-card"
      >
        <div className="border-b border-line p-6">
          <h2
            id="cookie-modal-title"
            className="font-serif text-xl font-semibold text-navy"
          >
            Cookie settings
          </h2>
          <p className="mt-2 text-sm text-body">
            Manage your cookie preferences. Necessary cookies are always active.
            Read our{" "}
            <Link href="/cookies" className="text-gold hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>

        <ul className="divide-y divide-line p-6">
          {categories.map((cat) => (
            <li key={cat.key} className="flex gap-4 py-4 first:pt-0 last:pb-0">
              <div className="flex-1">
                <p className="font-semibold text-navy">{cat.label}</p>
                <p className="mt-1 text-sm text-body">{cat.description}</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={draft[cat.key]}
                aria-label={`${cat.label} ${draft[cat.key] ? "on" : "off"}`}
                disabled={cat.locked}
                onClick={() => toggle(cat.key)}
                className={`relative mt-1 h-7 w-12 shrink-0 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  cat.locked
                    ? "cursor-not-allowed bg-gold/40"
                    : draft[cat.key]
                      ? "bg-gold"
                      : "bg-border"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition ${
                    draft[cat.key] ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 border-t border-line p-6 sm:flex-row">
          <button
            ref={firstFocusRef}
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-touch flex-1 rounded-card border-2 border-gold bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Save preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-touch flex-1 rounded-card border-2 border-gold bg-gold px-4 py-2.5 text-sm font-semibold text-navy hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
