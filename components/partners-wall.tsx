import { useTranslations } from "next-intl";
import { partners } from "@/content/partners";
import { Section } from "./section";

export function PartnersWall() {
  const t = useTranslations("partners");

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-headline mb-6">{t("heading")}</h2>
          <p className="text-stone leading-relaxed max-w-md">
            {t("body")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.id} className="group grayscale hover:grayscale-0 transition-all duration-300">
              {/* Logo Placeholder - in a real app, use <Image /> with public/marks/ logoFile */}
              <div className="h-12 flex items-center">
                <span className="font-display text-2xl font-semibold tracking-tighter text-ink/40 group-hover:text-ink transition-colors">
                  {partner.name}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-birch opacity-0 group-hover:opacity-100 transition-opacity">
                 <p className="text-xs text-stone uppercase tracking-widest">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
