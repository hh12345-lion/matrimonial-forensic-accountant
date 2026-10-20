import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { photos } from "@/lib/photos";

export const metadata = buildMetadata({
  title: "Image Credits | Matrimonial Forensic Accountant",
  description: "Sources, authors and licences for the photographs used on Matrimonial Forensic Accountant.",
  path: "/image-credits",
});

export default function ImageCreditsPage() {
  return (
    <>
      <PageHero
        title="Image credits"
        subtitle="The photographs on this site come from Wikimedia Commons. Each is shown unaltered apart from resizing and cropping, under the licence listed below."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image credits" }]}
      />
      <Section>
        <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {Object.values(photos).map((p) => (
            <li key={p.src} className="grid grid-cols-[120px_minmax(0,1fr)] gap-5 border-b border-line pb-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
                <Image src={p.src} alt={p.alt} fill sizes="120px" className="object-cover" />
              </div>
              <div className="min-w-0 text-sm leading-relaxed">
                <a href={p.credit.source} target="_blank" rel="noopener noreferrer" className="break-words font-semibold text-brand underline-offset-2 hover:text-accent hover:underline">
                  {p.credit.title}
                </a>
                <p className="mt-1 text-charcoal">By {p.credit.creator}</p>
                <p className="text-charcoal">
                  <a href={p.credit.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline-offset-2 hover:underline">
                      {p.credit.license}
                    </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
