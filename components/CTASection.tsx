import { Button } from "./ui/Button";
import { CTA_LABEL } from "@/lib/site";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CTASection({
  title = "Discuss your instruction",
  description = "Contact Matrimonial Forensic Accountant to discuss expert witness or forensic accounting support in England and Wales family proceedings. We respond within one business day.",
  buttonText = CTA_LABEL,
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-y-2 border-gold/50 bg-hero-gradient py-12 sm:py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-hero-glow"
        aria-hidden="true"
      />
      <div className="container-page relative z-10 text-center">
        <div className="accent-rule mx-auto mb-5" aria-hidden="true" />
        <h2 className="font-serif text-xl font-semibold text-white sm:text-2xl md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex justify-center px-2">
          <Button
            href={buttonHref}
            variant="primary"
            className="w-full max-w-sm sm:w-auto"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
