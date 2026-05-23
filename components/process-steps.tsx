import { useTranslations } from "next-intl";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";

export function ProcessSteps() {
  const t = useTranslations("process");

  const steps = [
    { id: "1", number: "01" },
    { id: "2", number: "02" },
    { id: "3", number: "03" },
    { id: "4", number: "04" },
  ];

  return (
    <Section className="bg-birch/30">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-headline lg:sticky lg:top-32">{t("heading")}</h2>
        </div>
        <ScrollReveal variant="group" className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col gap-4 pt-6 border-t-2 border-birch">
              <span className="text-sm text-orange leading-none" style={{ fontFamily: "var(--font-mono)" }}>
                {step.number}
              </span>
              <h3 className="font-display text-2xl tracking-tight">
                {t(`step${step.id}_title`)}
              </h3>
              <p className="text-stone leading-relaxed">
                {t(`step${step.id}_body`)}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </Section>
  );
}
