import { useTranslations } from "next-intl";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";

const REASONS = ["reason1", "reason2", "reason3", "reason4", "reason5"] as const;

export function WhyHAVS() {
  const t = useTranslations("why_havs");

  return (
    <Section className="bg-forest text-nav-fg">
      <ScrollReveal>
        <h2 className="text-headline mb-12">{t("heading")}</h2>
      </ScrollReveal>
      <ScrollReveal variant="group">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {REASONS.map((key) => (
            <li
              key={key}
              className="bg-forest px-8 py-6 flex items-start gap-4"
            >
              <span
                className="text-orange mt-0.5 shrink-0"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem" }}
                aria-hidden="true"
              >
                →
              </span>
              <span className="text-nav-fg/80 leading-relaxed">{t(key)}</span>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </Section>
  );
}
