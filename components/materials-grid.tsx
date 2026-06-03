import { useTranslations } from "next-intl";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";

const SEGMENTS = [
  "clt",
  "glulam",
  "facader",
  "tag",
  "gulve",
  "special",
] as const;

export function MaterialsGrid() {
  const t = useTranslations("segments");

  return (
    <Section className="bg-ink text-paper">
      <ScrollReveal>
        <h2 className="text-headline mb-12">{t("heading")}</h2>
      </ScrollReveal>
      <ScrollReveal
        variant="group"
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10"
      >
        {SEGMENTS.map((key) => (
          <div
            key={key}
            className="relative overflow-hidden bg-ink flex flex-col justify-end p-8 gap-3 group"
            style={{ aspectRatio: "4/3" }}
          >
            <div
              className="absolute inset-0 bg-forest/30 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              aria-hidden="true"
            />
            <h3 className="relative font-display text-xl tracking-tight text-orange z-10">
              {t(`${key}_title`)}
            </h3>
            <p className="relative text-sm text-paper/60 leading-relaxed z-10">
              {t(`${key}_body`)}
            </p>
          </div>
        ))}
      </ScrollReveal>
    </Section>
  );
}
