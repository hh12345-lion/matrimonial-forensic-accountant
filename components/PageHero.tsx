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
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60 sm:text-sm">
              {breadcrumbs.map((crumb, i) => (
                <li
                  key={`${crumb.label}-${i}`}
                  className="flex max-w-full items-center gap-2"
                >
                  {i > 0 && (
                    <span aria-hidden="true" className="shrink-0 text-gold-light/60">
                      /
                    </span>
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="break-words hover:text-gold-light focus:outline-none focus-visible:underline"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="break-words text-white/85">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="accent-rule mb-5" aria-hidden="true" />
        <h1 className="break-words font-serif text-[1.625rem] font-semibold leading-tight tracking-tight text-white xs:text-3xl sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="hero-cta-group">{children}</div>}
      </div>
    </section>
  );
}
