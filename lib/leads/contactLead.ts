import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { SITE_NAME } from "@/lib/site";

export type ContactLeadPayload = {
  fullName: string;
  email: string;
  phone?: string;
  organisation?: string;
  instructionType?: string;
  practiceArea?: string;
  deadline?: string;
  message?: string;
  referral?: string;
  /** Distinguishes Contact vs Instruct on the shared sheet tab. */
  formType?: "contact" | "instruct" | string;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export const CONTACT_SHEET_HEADERS = [
  "Timestamp",
  "Brand",
  "Form Type",
  "Full Name",
  "Organisation",
  "Email",
  "Phone",
  "Instruction Type",
  "Practice Area",
  "Deadline",
  "Message",
  "Referral Source",
] as const;

/**
 * Row order should match row 1 headers on GOOGLE_SHEET_TAB_NAME (one shared tab).
 * Form Type distinguishes Contact vs Instruct if dual forms are added later.
 */
export async function appendContactLeadToSheet(
  payload: ContactLeadPayload
): Promise<void> {
  if (!isGoogleSheetsConfigured()) {
    return;
  }

  const formType =
    payload.formType === "instruct" ? "Instruct" : "Contact";

  await appendRow([
    new Date().toISOString(),
    SITE_NAME,
    formType,
    sanitize(payload.fullName),
    sanitize(payload.organisation || ""),
    payload.email.toLowerCase().trim(),
    sanitize(payload.phone || ""),
    sanitize(payload.instructionType || ""),
    sanitize(payload.practiceArea || ""),
    payload.deadline || "",
    sanitize(payload.message || ""),
    sanitize(payload.referral || ""),
  ]);
}

/** Soft-fail Sheets write — never throws to the contact API caller. */
export async function writeContactLeadSafely(
  payload: ContactLeadPayload
): Promise<void> {
  if (!isGoogleSheetsConfigured()) {
    console.warn("Google Sheets not configured — contact lead not persisted.");
    return;
  }

  try {
    await appendContactLeadToSheet(payload);
  } catch (error: unknown) {
    const err = error as { message?: string; code?: number };
    console.error("Google Sheets write failed:", {
      message: err?.message,
      code: err?.code,
      timestamp: new Date().toISOString(),
    });
  }
}
