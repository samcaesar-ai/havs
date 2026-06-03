import { useTranslations } from "next-intl";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";

export function WhatWeDo() {
  const t = useTranslations("what_we_do");

  return (
    <Section className="bg-birch/10">
      <ScrollReveal>
        <div className="max-w-3xl">
          <h2 className="text-headline mb-8">{t("heading")}</h2>
          <p className="text-title font-light text-stone leading-relaxed">
            {t("body")}
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
