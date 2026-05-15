import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

async function getSheetsClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not set");

  const credentials = JSON.parse(
    Buffer.from(raw, "base64").toString("utf-8")
  );

  const auth = new google.auth.GoogleAuth({ credentials, scopes: SCOPES });
  return google.sheets({ version: "v4", auth });
}

type ContactRow = {
  name: string;
  email: string;
  message: string;
  role?: string;
  locale?: string;
  source?: string;
};

export async function appendContactRow(data: ContactRow) {
  const spreadsheetId = process.env.HAVS_SHEET_ID;
  if (!spreadsheetId) {
    console.error("HAVS_SHEET_ID is not set");
    return { success: false, error: "Configuration error" };
  }

  try {
    const sheets = await getSheetsClient();

    // Columns: timestamp | name | email | role | message | locale | source | status | last_touch | notes
    const values = [[
      new Date().toISOString(),
      data.name,
      data.email,
      data.role ?? "other",
      data.message,
      data.locale ?? "da",
      data.source ?? "/kontakt",
      "new",   // status — David updates manually
      "",      // last_touch — Apps Script populates on status change
      "",      // notes — David's private notes
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "HAVS Inbox!A1",
      valueInputOption: "RAW",
      requestBody: { values },
    });

    return { success: true };
  } catch (error) {
    console.error("Google Sheets error:", error);
    return { success: false, error: "Fejl ved lagring i Sheets" };
  }
}
