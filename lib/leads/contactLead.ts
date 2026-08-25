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
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

/**
 * Row order (columns A–K) should match row 1 headers in your Google Sheet tab:
 * Timestamp | Full Name | Organisation | Email | Phone | Instruction Type |
 * Practice Area | Deadline | Message | Referral | Brand name
 */
export async function appendContactLeadToSheet(
  payload: ContactLeadPayload
): Promise<void> {
  if (!isGoogleSheetsConfigured()) {
    throw new Error("Google Sheets is not configured");
  }

  const timestamp = new Date().toISOString();

  await appendRow([
    timestamp,
    sanitize(payload.fullName),
    sanitize(payload.organisation || ""),
    payload.email.toLowerCase().trim(),
    sanitize(payload.phone || ""),
    sanitize(payload.instructionType || ""),
    sanitize(payload.practiceArea || ""),
    payload.deadline || "",
    sanitize(payload.message || ""),
    sanitize(payload.referral || ""),
    SITE_NAME,
  ]);
}
