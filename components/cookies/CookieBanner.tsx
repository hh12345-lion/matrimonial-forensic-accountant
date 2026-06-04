"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";

export function CookieBanner() {
  const {
    bannerOpen,
    acceptAll,
    rejectNonEssential,
    openPreferences,
  } = useCookieConsent();

  if (!bannerOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[100] animate-slide-up border-t-2 border-gold bg-hero-gradient p-4 pb-safe shadow-2xl sm:p-6"
    >
      <div className="container-page">
        <h2
          id="cookie-banner-title"
          className="font-serif text-lg font-semibold text-white md:text-xl"
        >
          Cookie preferences
        </h2>
        <p
          id="cookie-banner-desc"
          className="mt-2 max-w-3xl text-sm leading-relaxed text-white/80"
        >
          We use cookies to ensure the site works correctly and,
          with your consent, to understand how visitors use our website. You can
          accept all cookies, reject non-essential cookies, or customise your
          preferences. See our{" "}
          <Link
            href="/cookies"
            className="text-gold underline underline-offset-2 hover:text-white"
          >
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-gold underline underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-touch w-full rounded-card border-2 border-gold bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-white hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-touch w-full rounded-card border-2 border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="min-h-touch w-full rounded-card border-2 border-gold/60 bg-navy px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
          >
            Customise Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
