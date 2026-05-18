import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { partners } from "@/content/partners";
import { Section } from "./section";

export function PartnersWall() {
  const t = useTranslations("partners");
  const locale = useLocale() as "da" | "en";

  const featured = partners.find((p) => p.featured);
  const rest = partners.filter((p) => !p.featured);

  return (
    <Section>
      <div className="mb-12">
        <h2 className="text-headline mb-4">{t("heading")}</h2>
        <p className="text-stone leading-relaxed max-w-md">{t("body")}</p>
      </div>

      {/* Hairline 4-col grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-birch border border-birch">
        {/* Featured partner — spans 2 cols on forest background */}
        {featured && (
          <div className="md:col-span-2 bg-forest p-10 flex flex-col justify-between gap-6">
            <span className="font-display text-3xl font-light text-nav-fg tracking-tight">
              {featured.name}
            </span>
            <p className="text-sm text-nav-fg/60 leading-relaxed">
              {featured[locale].description}
            </p>
          </div>
        )}

        {/* Remaining partners */}
        {rest.map((partner) => (
          <div
            key={partner.id}
            className="bg-paper p-8 flex items-center justify-center group"
          >
            <span className="font-display text-2xl font-light text-ink/40 group-hover:text-ink transition-colors">
              {partner.name}
            </span>
          </div>
        ))}

        {/* Empty placeholder cells to fill the grid */}
        {Array.from({ length: Math.max(0, 2 - rest.length) }).map((_, i) => (
          <div key={`empty-${i}`} className="bg-paper p-8" />
        ))}
      </div>
    </Section>
  );
}
