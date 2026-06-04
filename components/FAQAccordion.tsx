"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data/faq";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-card border border-line bg-white shadow-card">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const id = `faq-${index}`;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                id={`${id}-button`}
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                className="flex min-h-touch w-full items-start justify-between gap-4 px-4 py-4 text-left font-semibold text-navy transition hover:bg-section-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold sm:px-5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="min-w-0 flex-1 break-words text-sm sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={`mt-1 shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </h3>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              hidden={!isOpen}
              className="px-4 pb-4 text-sm leading-relaxed text-body sm:px-5 sm:text-base"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
