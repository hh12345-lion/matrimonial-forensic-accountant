import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "How We Work | The Matrimonial Forensic Accountant Approach",
  description:
    "How Matrimonial Forensic Accountant approaches each engagement, from initial instruction through to expert report and oral testimony. Senior-led, clear, and defensible.",
  path: "/how-we-work",
});

const principles = [
  {
    title: "One senior accountant on your file",
    text: "The senior forensic accountant who accepts the instruction is the one who reads the disclosure, writes the report and gives evidence at the FDR or final hearing. Your file is not passed down to junior staff part way through.",
  },
  {
    title: "Independent of both spouses",
    text: "Our duty under FPR Part 25 is to the court, not to the party paying the fee. If the figures point against your client, we tell you early, while there is still time to adjust your negotiating position.",
  },
  {
    title: "Reports a district judge can follow",
    text: "Business valuations, income and pension figures are explained in plain terms, with the key numbers set out so the court and both sets of solicitors can test them without needing an accountant beside them.",
  },
  {
    title: "Working to the court timetable",
    text: "Family cases run to directions and hearing dates. We fix a delivery date with you when we accept the instruction, warn you straight away if disclosure delays it, and can turn round an urgent preliminary view before an FDR.",
  },
  {
    title: "Scoped to what the assets justify",
    text: "A modest business or a single income question may only need a short report. We recommend the narrowest scope that answers the questions the court has asked, so costs stay in line with what is at stake in the marriage.",
  },
];

const steps = [
  { step: "1", title: "First conversation", text: "Tell us about the parties, the assets and the hearing dates. We confirm whether we can help and when, and reply the same day." },
  { step: "2", title: "Conflicts check", text: "We check both spouses and any businesses involved against our existing clients and instructions." },
  { step: "3", title: "Letter of instruction", text: "We review the single joint or sole letter of instruction and raise any unclear questions before we accept." },
  { step: "4", title: "Disclosure review", text: "We work through Form E disclosure, company accounts, bank statements and tax returns, and list anything further we need." },
  { step: "5", title: "Analysis", text: "We value the business, assess income and test the assumptions on both sides, and flag any issue that falls outside our expertise." },
  { step: "6", title: "Expert report", text: "We prepare the FPR Part 25 report. If you need an early view first, we can provide a short preliminary note." },
  { step: "7", title: "Questions and hearing", text: "We answer Part 25 written questions, join experts' meetings and attend the FDR or final hearing to give oral evidence where needed." },
];

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How We Work", path: "/how-we-work" },
        ])}
      />
      <PageHero
        title="How We Work"
        subtitle="Our process for England and Wales family proceedings, from initial instruction through FPR Part 25 expert report and oral testimony."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How We Work" },
        ]}
      />

      <Section>
        <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
          Our Approach to Every Engagement
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <article
              key={p.title}
              className="rounded-card border border-line border-t-4 border-t-gold bg-white p-6 shadow-card"
            >
              <h3 className="font-serif text-lg font-semibold text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-body leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
          From Instruction to Report
        </h2>
        <ol className="mt-8 space-y-4">
          {steps.map((s) => (
            <li
              key={s.step}
              className="flex gap-4 rounded-card border border-line bg-white p-6 shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card border-2 border-gold font-serif text-lg font-semibold text-navy">
                {s.step}
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-body leading-relaxed">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CTASection />
    </>
  );
}
