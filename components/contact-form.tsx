"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContact } from "@/app/actions/contact";

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, null);
  const t = useTranslations("contact_page");

  return (
    <form action={action} className="flex flex-col gap-6 w-full max-w-md">
      {/* Honeypot — hidden from humans, bots fill it in */}
      <input type="text" name="_trap" tabIndex={-1} aria-hidden="true" className="hidden" />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="eyebrow">{t("label_name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="bg-transparent border-b border-birch px-0 py-3 outline-none focus:border-ink transition-colors placeholder:text-stone/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="eyebrow">{t("label_email")}</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="bg-transparent border-b border-birch px-0 py-3 outline-none focus:border-ink transition-colors placeholder:text-stone/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="role" className="eyebrow">{t("label_role")}</label>
        <select
          id="role"
          name="role"
          className="bg-transparent border-b border-birch px-0 py-3 outline-none focus:border-ink transition-colors appearance-none cursor-pointer text-ink"
        >
          <option value="manufacturer">{t("role_manufacturer")}</option>
          <option value="architect">{t("role_architect")}</option>
          <option value="contractor">{t("role_contractor")}</option>
          <option value="other">{t("role_other")}</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow">{t("label_message")}</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="bg-transparent border-b border-birch px-0 py-3 outline-none focus:border-ink transition-colors resize-none placeholder:text-stone/50"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-2 self-start px-8 py-4 bg-ink text-paper font-medium hover:bg-orange transition-colors duration-200 disabled:opacity-50"
      >
        {isPending ? t("submitting") : t("submit")}
      </button>

      {state?.error && (
        <p role="alert" className="text-orange text-sm">{state.error}</p>
      )}
      {state?.success && (
        <p role="status" className="text-blue text-sm">{t("success")}</p>
      )}
    </form>
  );
}
