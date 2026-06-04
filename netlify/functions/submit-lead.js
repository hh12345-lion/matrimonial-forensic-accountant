/**
 * POST lead notification to Lead_notification_url (n8n or other webhook).
 * Inbound body: { fullName, email, phone }
 * Outbound JSON keys: Full Name, Email, Phone Number, Brand name
 */
const BRAND_NAME = "Matrimonial Forensic Accountant";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) {
    console.error("Lead_notification_url is not configured");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Lead notification is not configured" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();

  if (!fullName || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "fullName and email are required" }),
    };
  }

  const payload = {
    "Full Name": fullName,
    Email: email,
    "Phone Number": phone,
    "Brand name": BRAND_NAME,
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Webhook failed", res.status, text);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Failed to deliver lead" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Webhook error", err);
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Failed to deliver lead" }),
    };
  }
};
