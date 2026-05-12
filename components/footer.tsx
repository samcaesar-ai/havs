import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-birch bg-paper">
      <div className="container py-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-display text-xl tracking-tight text-ink leading-none">
            HAVS
          </span>
          <span className="text-sm text-stone">{t("tagline")}</span>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href={`mailto:${t("email")}`}
            className="text-sm text-ink hover:text-orange transition-colors"
          >
            {t("email")}
          </a>
          <p className="text-xs text-stone">
            {t("copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
