"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const other = locale === "da" ? "en" : "da";

  function switchLocale() {
    startTransition(() => {
      router.replace(pathname, { locale: other });
    });
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="text-sm text-stone hover:text-ink transition-colors uppercase tracking-widest disabled:opacity-40"
      aria-label={`Switch to ${other === "da" ? "Danish" : "English"}`}
    >
      {other.toUpperCase()}
    </button>
  );
}
