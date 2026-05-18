import { useTranslations } from "next-intl";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";

export function AudienceTriage() {
  const t = useTranslations("triage");

  const segments = [
    { key: "manufacturers", color: "bg-paper" },
    { key: "architects", color: "bg-paper" },
    { key: "contractors", color: "bg-paper" },
  ] as const;

  return (
    <Section className="bg-birch/20">
      <ScrollReveal><h2 className="text-headline mb-12">{t("heading")}</h2></ScrollReveal>
      <ScrollReveal variant="group" className="grid grid-cols-1 md:grid-cols-3 gap-px bg-birch border border-birch">
        {segments.map((segment) => (
          <div
            key={segment.key}
            className={`p-8 md:p-12 ${segment.color} flex flex-col gap-4`}
          >
            <h3 className="font-display text-2xl tracking-tight">
              {t(`${segment.key}_title`)}
            </h3>
            <p className="text-stone text-sm leading-relaxed">
              {t(`${segment.key}_body`)}
            </p>
          </div>
        ))}
      </ScrollReveal>
    </Section>
  );
}
