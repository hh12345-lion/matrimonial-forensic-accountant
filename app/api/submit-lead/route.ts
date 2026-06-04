import { NextResponse } from "next/server";
import {
  appendContactLeadToSheet,
  notifyLeadWebhook,
  type ContactLeadPayload,
} from "@/lib/leads/contactLead";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";

function parseLeadBody(body: Record<string, unknown>): ContactLeadPayload | null {
  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim();
  const organisation = String(body.organisation || "").trim();
  const message = String(body.message || "").trim();

  if (!fullName || !email || !organisation || !message) {
    return null;
  }

  return {
    fullName,
    email,
    phone: String(body.phone || "").trim(),
    organisation,
    instructionType: String(body.instructionType || "").trim(),
    practiceArea: String(body.practiceArea || "").trim(),
    deadline: String(body.deadline || "").trim(),
    message,
    referral: String(body.referral || "").trim(),
  };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const payload = parseLeadBody(body);
  if (!payload) {
    return NextResponse.json(
      {
        error:
          "fullName, email, organisation, and message are required",
      },
      { status: 400 }
    );
  }

  if (!isGoogleSheetsConfigured()) {
    console.error("Google Sheets env vars are not configured");
    return NextResponse.json(
      { error: "Contact form is not configured" },
      { status: 500 }
    );
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
    return NextResponse.json(
      { error: "Submission failed. Please try again or email us directly." },
      { status: 500 }
    );
  }

  void notifyLeadWebhook(payload).catch((err) => {
    console.error("Lead webhook failed (non-blocking):", err);
  });

  return NextResponse.json({ ok: true });
}
