/**
 * Local connection test: npm run test:sheets
 * Requires .env.local with Google credentials.
 */
import { config } from "dotenv";
import { appendRow, getSpreadsheetInfo } from "../lib/google-sheets";
import { SITE_NAME } from "../lib/site";

config({ path: ".env.local" });

async function test() {
  console.log("Testing Google Sheets connection...\n");

  try {
    const info = await getSpreadsheetInfo();
    console.log("Spreadsheet:", info.title);
    console.log("Tabs:", info.sheets?.map((s) => s.name).join(", "));
  } catch (error) {
    console.error("Failed to read spreadsheet info:", error);
    process.exit(1);
  }

  try {
    const result = await appendRow([
      new Date().toISOString(),
      "Test Entry",
      "Test Firm LLP",
      "test@example.com",
      "07000000000",
      "Expert Witness Report (FPR Part 25)",
      "Financial Remedy / Divorce",
      "",
      "Test message from scripts/test-sheets.ts",
      "Other",
      SITE_NAME,
    ]);
    console.log("Row written:", result.updatedRange);
    console.log("\nAll tests passed.");
  } catch (error) {
    console.error("Failed to write row:", error);
    process.exit(1);
  }
}

test();
