import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section, Prose } from "@/components/Section";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";

export const metadata = buildMetadata({
  title: "Cookie Policy | Matrimonial Forensic Accountant",
  description: "How Matrimonial Forensic Accountant uses cookies and how to manage your preferences.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
      />
      <Section>
        <Prose>
          <p className="text-sm text-charcoal">Last updated: June 2025</p>
          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website.
            They help the site function, remember preferences, and (with your consent) help us
            understand how visitors use the site.
          </p>
          <h2>How we use cookies</h2>
          <h3>Necessary cookies</h3>
          <p>
            Always active. Required for core functionality, security, and remembering your
            cookie consent choice. These cannot be disabled.
          </p>
          <h3>Analytics cookies</h3>
          <p>
            With your consent, we may use tools such as Google Analytics to understand how
            visitors use our website. IP anonymisation is enabled where supported.
          </p>
          <h3>Marketing cookies</h3>
          <p>
            With your consent, we may use advertising and remarketing technologies (e.g.
            Google Tag Manager, Meta Pixel, LinkedIn Insight Tag) to measure campaign
            effectiveness.
          </p>
          <h3>Preferences cookies</h3>
          <p>
            With your consent, these remember settings to improve your experience on return
            visits.
          </p>
          <h2>Manage your preferences</h2>
          <p>
            You can change your choices at any time using{" "}
            <CookieSettingsButton className="font-semibold text-gold" /> below or
            the link in the site footer. On first visit,
            our banner lets you Accept All, Reject Non-Essential, or Customise Preferences.
          </p>
          <h2>Google Consent Mode</h2>
          <p>
            Where Google services are used, we implement Google Consent Mode so tags respect
            your choices before and after you update preferences.
          </p>
          <h2>Retention</h2>
          <p>
            Consent preferences are stored locally for up to 365 days, after which you will be
            asked again.
          </p>
          <h2>More information</h2>
          <p>
            See our{" "}
            <Link href="/privacy" className="text-gold hover:underline">
              Privacy Policy
            </Link>{" "}
            for how we process personal data.
          </p>
        </Prose>
      </Section>
    </>
  );
}
