import { google, sheets_v4 } from "googleapis";

function trimEnvQuotes(value: string | undefined): string | undefined {
  if (value == null) return undefined;
  let v = value.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1).trim();
  }
  return v || undefined;
}

/** Accepts raw ID or a full `docs.google.com/spreadsheets/d/...` URL. */
export function normalizeSpreadsheetId(
  raw: string | undefined
): string | undefined {
  const trimmed = trimEnvQuotes(raw);
  if (!trimmed) return undefined;
  const fromUrl = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (fromUrl?.[1]) return fromUrl[1];
  return trimmed;
}

export const DEFAULT_SHEET_TAB_NAME = "Matrimonial Forensic Accountant";

function normalizePrivateKey(raw: string | undefined): string | undefined {
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

function resolveSheetTabName(override?: string): string {
  const raw =
    trimEnvQuotes(override || process.env.GOOGLE_SHEET_TAB_NAME) ||
    DEFAULT_SHEET_TAB_NAME;
  return raw.replace(/\s+/g, " ").trim();
}

/** A1 range for append; quotes tab names with spaces/special chars. */
function appendRangeForTab(sheetName: string): string {
  const name = sheetName || DEFAULT_SHEET_TAB_NAME;
  if (/^[A-Za-z0-9_]+$/.test(name)) return `${name}!A:A`;
  return `'${name.replace(/'/g, "''")}'!A:A`;
}

function getAuthClient() {
  const email = trimEnvQuotes(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  const key = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);

  if (!email || !key) {
    throw new Error("Google Sheets credentials are not configured");
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      private_key: key,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

export type CellValue = string | number | boolean | null;

export type SheetTarget = {
  spreadsheetId?: string;
  sheetName?: string;
};

export type AppendResult = {
  success: boolean;
  updatedRange: string | null | undefined;
};

export async function appendRow(
  values: CellValue[],
  target?: SheetTarget
): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = normalizeSpreadsheetId(
    target?.spreadsheetId || process.env.GOOGLE_SHEET_ID
  );
  const sheetName = resolveSheetTabName(target?.sheetName);

  if (!spreadsheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID");
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: appendRangeForTab(sheetName),
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [values] },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    trimEnvQuotes(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) &&
      normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY) &&
      normalizeSpreadsheetId(process.env.GOOGLE_SHEET_ID)
  );
}

export async function getSpreadsheetInfo(spreadsheetId?: string) {
  const sheets = getSheetsClient();
  const id = normalizeSpreadsheetId(spreadsheetId || process.env.GOOGLE_SHEET_ID);

  if (!id) {
    throw new Error("Missing GOOGLE_SHEET_ID");
  }

  const response = await sheets.spreadsheets.get({ spreadsheetId: id });

  return {
    title: response.data.properties?.title,
    sheets: response.data.sheets?.map((s) => ({
      name: s.properties?.title,
      sheetId: s.properties?.sheetId,
      rowCount: s.properties?.gridProperties?.rowCount,
      columnCount: s.properties?.gridProperties?.columnCount,
    })),
  };
}
