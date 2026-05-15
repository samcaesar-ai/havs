import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "./section";

export function ContactBand() {
  const t = useTranslations("contact_band");

  return (
    <Section className="bg-orange text-paper overflow-hidden relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10">
        <div className="max-w-xl">
          <h2 className="text-headline mb-6">{t("heading")}</h2>
          <p className="text-title text-paper/80 font-light">
            {t("body")}
          </p>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Link
            href="/kontakt"
            className="px-8 py-4 bg-paper text-orange font-medium text-center hover:bg-birch transition-colors"
          >
            {t("cta_primary")}
          </Link>
          <a
            href={`mailto:${t("email")}`}
            className="text-center text-sm font-medium border-b border-paper/40 pb-1 hover:border-paper transition-colors"
          >
            {t("email")}
          </a>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-paper/5 -skew-x-12 translate-x-1/2" />
    </Section>
  );
}
