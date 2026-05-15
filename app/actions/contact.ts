"use server";

import { sendContactNotification } from "@/lib/resend";
import { appendContactRow } from "@/lib/sheets";
import { headers } from "next/headers";

export async function submitContact(_prev: unknown, formData: FormData) {
  // Honeypot check — bots fill the hidden _trap field
  if (formData.get("_trap")) {
    return { success: true }; // silently succeed so bots don't retry
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();
  const role = (formData.get("role") as string) || "other";

  if (!name || !email || !message) {
    return { success: false, error: "Udfyld venligst alle felter." };
  }

  // Derive locale from the referer path (/en/... = en, else da)
  const headersList = await headers();
  const referer = headersList.get("referer") ?? "";
  const locale = referer.includes("/en/") || referer.endsWith("/en") ? "en" : "da";

  const row = { name, email, message, role, locale, source: "/kontakt" };

  try {
    const [sheetResult, emailResult] = await Promise.allSettled([
      appendContactRow(row),
      sendContactNotification(row),
    ]);

    const sheetOk = sheetResult.status === "fulfilled" && sheetResult.value.success;
    const emailOk = emailResult.status === "fulfilled" && emailResult.value.success;

    if (!sheetOk && !emailOk) {
      console.error("Both sheet and email failed", { sheetResult, emailResult });
      return { success: false, error: "Der skete en fejl. Prøv igen eller skriv direkte til david@havs.dk." };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact action error:", error);
    return { success: false, error: "Der skete en uventet fejl." };
  }
}
