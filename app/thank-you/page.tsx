import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Thank You | Matrimonial Forensic Accountant",
  description:
    "Your enquiry has been received. Matrimonial Forensic Accountant will respond within one business day.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

export default function ThankYouPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-page text-center">
          <p className="font-serif text-sm font-semibold uppercase tracking-wide text-gold-light">
            Enquiry received
          </p>
          <div className="accent-rule mx-auto mb-5 mt-6" aria-hidden="true" />
          <h1 className="font-serif text-2xl font-semibold text-white xs:text-3xl md:text-4xl">
            Thank you
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            We have received your message and aim to respond within one business
            day. If your matter is urgent, please email us directly.
          </p>
        </div>
      </section>

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
            <Link href="/faq" className="text-gold hover:underline">
              FAQ
            </Link>
            {" · "}
            <Link href="/case-types" className="text-gold hover:underline">
              Case types
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
