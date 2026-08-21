import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { services, servicePath } from "@/lib/data/services";
import { caseTypes, caseTypePath } from "@/lib/data/case-types";
import { SITE_NAME } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="container-page text-center">
          <p className="font-serif text-5xl font-semibold text-gold-light xs:text-6xl md:text-8xl">
            404
          </p>
          <div className="accent-rule mx-auto mb-5 mt-6" aria-hidden="true" />
          <h1 className="font-serif text-xl font-semibold text-white xs:text-2xl md:text-3xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            The page you are looking for does not exist on {SITE_NAME}. It may
            have moved or the address may be incorrect.
          </p>
          <div className="hero-cta-group mt-8 justify-center">
            <Button href="/" variant="primary" className="w-full max-w-sm sm:w-auto">
              Return to Homepage
            </Button>
            <Button href="/contact" variant="secondary" className="w-full max-w-sm sm:w-auto">
              Enquire
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-10 sm:py-14">
        <div className="container-page">
          <h2 className="text-center font-serif text-lg font-semibold text-navy sm:text-xl">
            Helpful links
          </h2>
          <nav
            aria-label="Helpful links"
            className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-semibold"
          >
            <Link href="/services" className="text-gold hover:underline">
              Services
            </Link>
            <Link href="/case-types" className="text-gold hover:underline">
              Case Types
            </Link>
            <Link href="/practice-areas" className="text-gold hover:underline">
              Practice Areas
            </Link>
            <Link href="/how-we-work" className="text-gold hover:underline">
              How We Work
            </Link>
          </nav>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-base font-semibold text-navy">Services</h3>
              <ul className="mt-3 space-y-2">
                {services.slice(0, 4).map((s) => (
                  <li key={s.id}>
                    <Link
                      href={servicePath(s.id)}
                      className="text-sm text-body hover:text-gold"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-navy">Case Types</h3>
              <ul className="mt-3 space-y-2">
                {caseTypes.slice(0, 4).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={caseTypePath(c.slug)}
                      className="text-sm text-body hover:text-gold"
                    >
                      {c.hubLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
