import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
};

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container-page">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-parchment/60 sm:text-sm">
              {breadcrumbs.map((crumb, i) => (
                <li
                  key={`${crumb.label}-${i}`}
                  className="flex max-w-full items-center gap-2"
                >
                  {i > 0 && (
                    <span aria-hidden="true" className="shrink-0 text-sage-light/70">
                      /
                    </span>
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="break-words hover:text-parchment focus:outline-none focus-visible:underline"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="break-words text-parchment/90">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sage-light">
          England &amp; Wales family proceedings
        </p>
        <div className="accent-rule mb-5 mt-4" aria-hidden="true" />
        <h1 className="max-w-4xl break-words font-serif text-[1.625rem] font-semibold leading-tight tracking-tight text-parchment xs:text-3xl sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-parchment/85 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="hero-cta-group">{children}</div>}
      </div>
    </section>
  );
}
