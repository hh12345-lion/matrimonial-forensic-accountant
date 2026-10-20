import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { services, servicePath } from "@/lib/data/services";
import { caseTypes, caseTypePath } from "@/lib/data/case-types";
import { SITE_NAME } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        subtitle={`The page you are looking for does not exist on ${SITE_NAME}. It may have moved or the address may be incorrect.`}
      >
        <Button href="/">Return to homepage</Button>
        <Button href="/contact" variant="secondary">
          Enquire
        </Button>
      </PageHero>

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
