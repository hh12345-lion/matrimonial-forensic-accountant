import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
};

export function Section({ children, alt = false, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-10 sm:py-14 md:py-20 ${alt ? "bg-section-alt" : "bg-page"} ${className}`}
    >
      <div className="container-page min-w-0">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-mfa min-w-0 max-w-none space-y-4 text-base leading-relaxed text-body [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:break-words [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy sm:[&_h2]:mt-10 sm:[&_h2]:text-2xl [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:break-words [&_h3]:font-serif [&_h3]:text-lg [&_h3]:text-charcoal sm:[&_h3]:mt-8 sm:[&_h3]:text-xl [&_p+p]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 sm:[&_ul]:pl-6">
      {children}
    </div>
  );
}
