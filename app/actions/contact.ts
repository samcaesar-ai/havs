"use server";

import { sendContactNotification } from "@/lib/resend";
import { appendContactRow } from "@/lib/sheets";

const ALLOWED_ROLES = ["manufacturer", "architect", "contractor", "other"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(_prev: unknown, formData: FormData) {
  // Honeypot — bots fill this hidden field; humans never see it
  if (formData.get("_trap")) {
    return { success: true };
  }

  const name    = (formData.get("name")    as string | null)?.trim() ?? "";
  const email   = (formData.get("email")   as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";
  const rawRole =  formData.get("role")    as string | null;
  const role    = ALLOWED_ROLES.includes(rawRole as (typeof ALLOWED_ROLES)[number])
    ? (rawRole as (typeof ALLOWED_ROLES)[number])
    : "other";

  // Field presence
  if (!name || !email || !message) {
    return { success: false, error: "Udfyld venligst alle felter." };
  }

  // Length limits
  if (name.length > 100) {
    return { success: false, error: "Udfyld venligst alle felter." };
  }
  if (message.length > 5000) {
    return { success: false, error: "Udfyld venligst alle felter." };
  }

  // Email format
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { success: false, error: "Angiv venligst en gyldig emailadresse." };
  }

  const row = { name, email, message, role, locale: "da", source: "/kontakt" };

  try {
    const [sheetResult, emailResult] = await Promise.allSettled([
      appendContactRow(row),
      sendContactNotification(row),
    ]);

    const sheetOk = sheetResult.status === "fulfilled" && sheetResult.value.success;
    const emailOk = emailResult.status === "fulfilled" && emailResult.value.success;

    if (!sheetOk && !emailOk) {
      console.error("Both sheet and email failed", { sheetResult, emailResult });
      return {
        success: false,
        error: "Der skete en fejl. Prøv igen eller skriv direkte til david@havs.dk.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact action error:", error);
    return { success: false, error: "Der skete en uventet fejl." };
  }
}
