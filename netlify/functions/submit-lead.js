/**
 * Netlify backup for /api/submit-lead — soft webhook + soft Sheets.
 */

const { google } = require("googleapis");

const BRAND_NAME = "Matrimonial Forensic Accountant";
const DEFAULT_SHEET_TAB_NAME = "Matrimonial Forensic Accountant";

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

function trimEnvQuotes(value) {
  if (value == null) return undefined;
  let v = String(value).trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1).trim();
  }
  return v || undefined;
}

function normalizeSpreadsheetId(raw) {
  const trimmed = trimEnvQuotes(raw);
  if (!trimmed) return undefined;
  const fromUrl = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (fromUrl && fromUrl[1]) return fromUrl[1];
  return trimmed;
}

function normalizePrivateKey(raw) {
  const trimmed = trimEnvQuotes(raw);
  if (!trimmed) return undefined;
  let key = trimmed;
  for (let i = 0; i < 3 && key.includes("\\n"); i += 1) {
    key = key.replace(/\\n/g, "\n");
  }
  key = key.trim();
  if (key.includes("BEGIN PRIVATE KEY") && !key.includes("\n")) {
    key = key
      .replace("-----BEGIN PRIVATE KEY-----", "-----BEGIN PRIVATE KEY-----\n")
      .replace("-----END PRIVATE KEY-----", "\n-----END PRIVATE KEY-----");
  }
  return key.includes("BEGIN PRIVATE KEY") ? key : undefined;
}

function appendRangeForTab(sheetName) {
  const name = sheetName || DEFAULT_SHEET_TAB_NAME;
  if (/^[A-Za-z0-9_]+$/.test(name)) return `${name}!A:L`;
  return `'${name.replace(/'/g, "''")}'!A:L`;
}

function isGoogleSheetsConfigured() {
  return Boolean(
    trimEnvQuotes(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) &&
      normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY) &&
      normalizeSpreadsheetId(process.env.GOOGLE_SHEET_ID)
  );
}

function sanitize(str) {
  return String(str || "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

async function appendLeadToSheet(body) {
  if (!isGoogleSheetsConfigured()) {
    console.warn("[submit-lead fn] Sheets not configured — skip");
    return false;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: trimEnvQuotes(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL),
      private_key: normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = normalizeSpreadsheetId(process.env.GOOGLE_SHEET_ID);
  const sheetName = (
    trimEnvQuotes(process.env.GOOGLE_SHEET_TAB_NAME) || DEFAULT_SHEET_TAB_NAME
  )
    .replace(/\s+/g, " ")
    .trim();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: appendRangeForTab(sheetName),
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          BRAND_NAME,
          body.formType === "instruct" ? "Instruct" : "Contact",
          sanitize(body.fullName),
          sanitize(body.organisation),
          String(body.email || "").toLowerCase().trim(),
          sanitize(body.phone),
          sanitize(body.instructionType),
          sanitize(body.practiceArea),
          sanitize(body.deadline),
          sanitize(body.message),
          sanitize(body.referral),
        ],
      ],
    },
  });

  return true;
}

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

  let webhookOk = false;
  const webhookUrl = getLeadNotificationUrl();

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Full Name": fullName,
          Email: email,
          "Phone Number": phone,
          "Brand name": BRAND_NAME,
          domain: getSiteDomain(),
        }),
      });
      webhookOk = res.ok;
      if (!res.ok) {
        console.error("Lead webhook failed:", res.status, await res.text());
      }
    } catch (err) {
      console.error("Lead webhook error:", err);
    }
  } else {
    console.warn(
      "[submit-lead fn] Lead_notification_url missing — continuing with Sheets fallback"
    );
  }

  let writtenToSheet = false;
  if (!body.skipSheet) {
    try {
      writtenToSheet = await appendLeadToSheet(body);
    } catch (err) {
      console.error("Google Sheets error (submit-lead fn):", {
        message: err && err.message,
        tab: (
          process.env.GOOGLE_SHEET_TAB_NAME || DEFAULT_SHEET_TAB_NAME
        )
          .replace(/\s+/g, " ")
          .trim(),
      });
    }
  }

  if (!webhookOk && !writtenToSheet) {
    return {
      statusCode: 503,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Lead storage failed",
        message: webhookUrl
          ? "Webhook failed and Sheets write failed/not configured."
          : "Lead_notification_url missing and Sheets write failed/not configured.",
      }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ok: true,
      success: true,
      forwarded: webhookOk,
      writtenToSheet,
    }),
  };
};
