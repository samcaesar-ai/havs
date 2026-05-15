import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "./section";

export function AboutSnippet() {
  const t = useTranslations("about_snippet");

  return (
    <Section className="bg-birch/10">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-headline">{t("heading")}</h2>
        <p className="text-title text-ink font-light leading-relaxed">
          {t("body")}
        </p>
        <Link
          href="/om"
          className="text-orange border-b border-orange pb-1 hover:text-ink hover:border-ink transition-colors"
        >
          {t("cta")}
        </Link>
      </div>
    </Section>
  );
}
