import { useTranslations } from "next-intl";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";

const SERVICES = [
  "projektidentifikation",
  "tilbudsmateriale",
  "introduktioner",
  "moedebooking",
] as const;

export function AudienceTriage() {
  const t = useTranslations("services");

  return (
    <Section>
      <ScrollReveal>
        <h2 className="text-headline mb-12">{t("heading")}</h2>
      </ScrollReveal>
      <ScrollReveal
        variant="group"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-birch border border-birch"
      >
        {SERVICES.map((key) => (
          <div key={key} className="bg-paper p-8 flex flex-col gap-4">
            <h3 className="font-display text-xl tracking-tight">
              {t(`${key}_title`)}
            </h3>
            <p className="text-stone text-sm leading-relaxed">
              {t(`${key}_body`)}
            </p>
          </div>
        ))}
      </ScrollReveal>
    </Section>
  );
}
