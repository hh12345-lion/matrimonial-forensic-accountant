import { NextResponse } from "next/server";
import {
  writeContactLeadSafely,
  type ContactLeadPayload,
} from "@/lib/leads/contactLead";

function parseContactBody(
  body: Record<string, unknown>
): ContactLeadPayload | null {
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
    formType: "contact",
  };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const payload = parseContactBody(body);
  if (!payload) {
    return NextResponse.json(
      {
        error: "fullName, email, organisation, and message are required",
      },
      { status: 400 }
    );
  }

  // Sheets are soft-fail; webhook via /api/submit-lead is the primary lead path.
  await writeContactLeadSafely(payload);

  return NextResponse.json({ ok: true });
}
