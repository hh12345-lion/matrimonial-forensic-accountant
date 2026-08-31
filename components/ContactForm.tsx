"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

const instructionTypes = [
  "Expert Witness Report (FPR Part 25)",
  "Business Valuation",
  "Form E / Financial Disclosure Review",
  "Hidden Assets Investigation",
  "Income / Lifestyle Analysis",
  "Add-backs / Financial Reconstruction",
  "Single Joint Expert (SJE) Appointment",
  "Preliminary Assessment",
  "Advisory / Litigation Support",
  "Other",
];

const practiceAreas = [
  "Financial Remedy / Divorce",
  "Schedule 1 (Children Act)",
  "TOLATA / Cohabitation",
  "High Net Worth Matrimonial",
  "Self-Employed Income",
  "Overseas Assets / Trusts",
  "Other",
];

const referralSources = [
  "Search engine",
  "Referral from solicitor",
  "Referral from colleague",
  "LinkedIn",
  "Professional body",
  "Other",
];

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      fullName: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      organisation: String(fd.get("organisation") || "").trim(),
      instructionType: String(fd.get("instruction_type") || "").trim(),
      practiceArea: String(fd.get("practice_area") || "").trim(),
      deadline: String(fd.get("deadline") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      referral: String(fd.get("referral") || "").trim(),
      formType: "contact" as const,
    };

    try {
      // Primary: webhook + Sheets (must not hard-fail on missing webhook alone).
      const leadRes = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const leadResult = (await leadRes.json().catch(() => ({}))) as {
        ok?: boolean;
        success?: boolean;
      };

      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, skipSheet: true }),
          keepalive: true,
        });
      } catch {
        /* submit-lead already handled storage */
      }

      if (!leadRes.ok || !(leadResult.ok || leadResult.success)) {
        setStatus("error");
        return;
      }

      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-card border border-line px-4 py-3 text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 min-h-touch";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label
            htmlFor="organisation"
            className="mb-1 block text-sm font-medium text-brand"
          >
            Law Firm / Organisation <span className="text-accent">*</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            className={inputClass}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="instruction_type"
            className="mb-1 block text-sm font-medium text-brand"
          >
            Nature of Instruction
          </label>
          <select id="instruction_type" name="instruction_type" className={inputClass}>
            {instructionTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="practice_area"
            className="mb-1 block text-sm font-medium text-brand"
          >
            Practice Area
          </label>
          <select id="practice_area" name="practice_area" className={inputClass}>
            {practiceAreas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="deadline" className="mb-1 block text-sm font-medium text-brand">
          Hearing / deadline date
        </label>
        <input id="deadline" name="deadline" type="date" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand">
          Brief description of the matter <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="referral" className="mb-1 block text-sm font-medium text-brand">
          How did you hear about {SITE_NAME}?
        </label>
        <select id="referral" name="referral" className={inputClass}>
          {referralSources.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Unable to send your enquiry. Please email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="break-all text-accent underline">
            {SITE_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-touch w-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-parchment transition hover:border-accent-light hover:bg-accent-light focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-60 md:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
