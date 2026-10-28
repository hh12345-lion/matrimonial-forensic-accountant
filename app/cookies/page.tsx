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
            A cookie is a small file a website saves in your browser. Ours keep the site working,
            remember your settings and, only if you agree, show us which pages people read.
          </p>
          <h2>How we use cookies</h2>
          <h3>Necessary cookies</h3>
          <p>
            These are always on, because the site cannot run safely without them. One of them
            records the cookie choice you made.
          </p>
          <h3>Analytics cookies</h3>
          <p>
            Only if you allow them. Tools such as Google Analytics count visits and page views,
            with IP addresses anonymised where the tool supports it.
          </p>
          <h3>Marketing cookies</h3>
          <p>
            Only if you allow them. Google Tag Manager, the Meta Pixel and the LinkedIn Insight
            Tag tell us whether our adverts are reaching the right people.
          </p>
          <h3>Preferences cookies</h3>
          <p>
            Only if you allow them. They save your settings for the next time you visit.
          </p>
          <h2>Manage your preferences</h2>
          <p>
            Use{" "}
            <CookieSettingsButton className="font-semibold text-gold" /> or the footer link
            to change your mind whenever you like. The banner on your first visit offers
            Accept All, Reject Non-Essential or Customise Preferences.
          </p>
          <h2>Google Consent Mode</h2>
          <p>
            Any Google tags on the site run through Google Consent Mode, which makes them follow
            whatever you have chosen, including when you change it.
          </p>
          <h2>Retention</h2>
          <p>
            Your choice is saved in your browser for a year. After that the banner asks again.
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
