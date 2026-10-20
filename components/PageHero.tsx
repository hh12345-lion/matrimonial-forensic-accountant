import Link from "next/link";
import { HeroPhotos } from "./HeroPhotos";

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
};

/** Page opening: heading first, then the introduction and actions; breadcrumbs and label sit beneath. */
export function PageHero({ title, subtitle, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="min-w-0">
          <h1 className="max-w-3xl break-words font-serif text-[2.1rem] font-bold leading-[1.05] tracking-tight text-brand xs:text-[2.4rem] sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{subtitle}</p>
          )}
          {children && <div className="hero-cta-group">{children}</div>}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <svg viewBox="0 0 120 24" className="h-5 w-16 shrink-0 text-accent" aria-hidden="true">
              <path d="M4 4c10 18 34 18 56 18s46 0 56-18" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            {breadcrumbs && breadcrumbs.length > 0 ? (
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">
                  {breadcrumbs.map((crumb, i) => (
                    <li key={`${crumb.label}-${i}`} className="flex max-w-full items-center gap-2">
                      {i > 0 && <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-accent" />}
                      {crumb.href ? (
                        <Link href={crumb.href} className="break-words hover:text-accent focus:outline-none focus-visible:underline">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span aria-current="page" className="break-words text-brand">
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            ) : (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">
                England &amp; Wales family proceedings
              </p>
            )}
          </div>
        </div>
        <HeroPhotos />
      </div>
    </section>
  );
}
