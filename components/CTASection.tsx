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
  description = "Contact Matrimonial Forensic Accountant to discuss expert witness or forensic accounting support in England and Wales family proceedings. We respond within one working day.",
  buttonText = CTA_LABEL,
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="border-y-2 border-accent bg-mist py-12 sm:py-16 md:py-20">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
          <div>
            <div className="accent-rule mb-5" aria-hidden="true" />
            <h2 className="font-serif text-xl font-semibold text-brand sm:text-2xl md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
              {description}
            </p>
          </div>
          <div className="shrink-0">
            <Button
              href={buttonHref}
              variant="outline"
              className="w-full md:w-auto"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
