import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Thank You | Matrimonial Forensic Accountant",
  description:
    "Your enquiry has been received. Matrimonial Forensic Accountant will reply by email.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank you"
        subtitle="We have received your message and will reply by email. If your matter is urgent, please email us directly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Enquiry received" }]}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <div className="container-page mx-auto max-w-2xl text-center">
          <p className="text-base leading-relaxed text-body sm:text-lg">
            Email:{" "}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="break-all font-semibold text-gold hover:underline"
            >
              {SITE_EMAIL}
            </a>
          </p>
          <div className="hero-cta-group mt-10 justify-center">
            <Button href="/" variant="outline" className="w-full sm:w-auto">
              Return to Homepage
            </Button>
            <Button href="/services" variant="primary" className="w-full sm:w-auto">
              View Services
            </Button>
          </div>
          <p className="mt-10 text-sm text-charcoal">
            <Link href="/how-we-work" className="text-gold hover:underline">
              How we work
            </Link>
            {" · "}
            <Link href="/case-types" className="text-gold hover:underline">
              Case types
            </Link>
            {" · "}
            <Link href="/about" className="text-gold hover:underline">
              About us
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
