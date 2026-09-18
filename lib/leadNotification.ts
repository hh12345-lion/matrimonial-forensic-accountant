import { getSiteDomain, SITE_NAME } from "@/lib/site";

const BRAND_NAME = SITE_NAME;

function getLeadNotificationUrl(): string | undefined {
  return (
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL
  );
}

export async function notifyLeadWebhook(payload: {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}): Promise<{ ok: boolean; configured: boolean }> {
  const webhookUrl = getLeadNotificationUrl();
  if (!webhookUrl) {
    return { ok: false, configured: false };
  }

  const outbound = {
    "Full Name": payload.fullName,
    Email: payload.email,
    "Phone Number": payload.phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
    message: payload.message ?? "",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
    });
    return { ok: res.ok, configured: true };
  } catch {
    return { ok: false, configured: true };
  }
}
