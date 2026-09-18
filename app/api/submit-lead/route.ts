import { NextResponse } from "next/server";
import { notifyLeadWebhook } from "@/lib/leadNotification";
import { writeContactLeadSafely } from "@/lib/leads/contactLead";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { parseSubmitLeadBody } from "@/lib/submitLeadSchema";

/**
 * Soft-fail webhook + soft-fail Sheets.
 * Form submit must not hard-fail when only Sheets or only webhook is available.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const payload = parseSubmitLeadBody(body);
  if (!payload) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  const skipSheet = body.skipSheet === true;
  const message = String(
    body.message ??
      body.Message ??
      body.description ??
      body.enquiry ??
      body.details ??
      body.summary ??
      body.notes ??
      body.matter ??
      ""
  ).trim();

  const webhook = await notifyLeadWebhook({
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    message,
  });

  if (!webhook.configured) {
    console.warn(
      "[submit-lead] Lead_notification_url missing — continuing with Sheets fallback"
    );
  } else if (!webhook.ok) {
    console.error("[submit-lead] webhook failed — continuing with Sheets fallback");
  }

  const writtenToSheet = skipSheet
    ? false
    : await writeContactLeadSafely({
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        organisation: String(body.organisation || "").trim(),
        instructionType: String(body.instructionType || "").trim(),
        practiceArea: String(body.practiceArea || "").trim(),
        deadline: String(body.deadline || "").trim(),
        message: String(
          body.message ??
            body.Message ??
            body.description ??
            body.enquiry ??
            body.details ??
            body.summary ??
            body.notes ??
            body.matter ??
            ""
        ).trim(),
        referral: String(body.referral || "").trim(),
        formType: payload.formType || "contact",
      });

  if (!webhook.ok && !writtenToSheet) {
    const sheetsHint = isGoogleSheetsConfigured()
      ? "Sheets write failed"
      : "Google Sheets env vars not detected";
    return NextResponse.json(
      {
        error: "Lead storage failed",
        message: webhook.configured
          ? `Webhook failed and ${sheetsHint}.`
          : `Lead_notification_url missing and ${sheetsHint}.`,
      },
      { status: 503 }
    );
  }

  return NextResponse.json({
    ok: true,
    success: true,
    forwarded: webhook.ok,
    writtenToSheet,
  });
}
