/** @type {string} Per-brand label sent to the lead webhook */
const BRAND_NAME = "Matrimonial Forensic Accountant";

function getSiteDomain() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.matrimonialforensicaccountant.com";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "matrimonialforensicaccountant.com";
  }
}

function getLeadNotificationUrl() {
  return (
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL
  );
}

/**
 * @param {import("@netlify/functions").HandlerEvent} event
 */
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const fullName =
    typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!fullName || !email) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "fullName and email are required" }),
    };
  }

  const webhookUrl = getLeadNotificationUrl();
  let webhookOk = false;

  if (webhookUrl) {
    const outbound = {
      "Full Name": fullName,
      Email: email,
      "Phone Number": phone,
      "Brand name": BRAND_NAME,
      domain: getSiteDomain(),
    };

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
      });
      webhookOk = res.ok;
      if (!res.ok) {
        console.error("Lead webhook failed:", res.status, await res.text());
      }
    } catch (err) {
      console.error("Lead webhook error:", err);
    }
  }

  if (!webhookOk) {
    const error = webhookUrl
      ? "Lead notification failed"
      : "Lead notification not configured";
    return {
      statusCode: webhookUrl ? 502 : 503,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true }),
  };
};
