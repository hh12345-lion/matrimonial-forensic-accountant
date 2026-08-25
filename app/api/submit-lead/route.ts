import { NextResponse } from "next/server";
import { notifyLeadWebhook } from "@/lib/leadNotification";
import { parseSubmitLeadBody } from "@/lib/submitLeadSchema";

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

  const webhook = await notifyLeadWebhook({
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
  });

  if (!webhook.ok) {
    const error = webhook.configured
      ? "Lead notification failed"
      : "Lead notification not configured";
    return NextResponse.json(
      { error },
      { status: webhook.configured ? 502 : 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
