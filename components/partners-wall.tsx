import { useTranslations } from "next-intl";
import { Section } from "./section";

export function PartnersWall() {
  const t = useTranslations("partners");

  return (
    <Section>
      <h2 className="text-headline mb-4">{t("heading")}</h2>
      <p className="text-stone leading-relaxed max-w-md">{t("body")}</p>
    </Section>
  );
}
