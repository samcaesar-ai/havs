import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "./section";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <Section className="pt-20 pb-12 md:pt-32 md:pb-24">
      <div className="max-w-4xl">
        <p className="eyebrow mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
          {t("eyebrow")}
        </p>
        <h1 className="text-display mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t("headline")}
        </h1>
        <p className="text-title text-stone mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
          {t("subhead")}
        </p>
        <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          <Link
            href="/kontakt"
            className="px-8 py-4 bg-orange text-paper font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {t("cta_primary")}
          </Link>
          <Link
            href="/praksis"
            className="px-8 py-4 border border-birch text-ink font-medium hover:bg-birch/30 transition-colors"
          >
            {t("cta_secondary")}
          </Link>
        </div>
      </div>
    </Section>
  );
}
