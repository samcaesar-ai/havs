import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "./section";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <Section className="!pt-0 !pb-0 overflow-hidden">
      <div
        className="grid min-h-[90vh]"
        style={{ gridTemplateColumns: "1fr minmax(280px, 44%)" }}
      >
        {/* Left column — content */}
        <div className="flex flex-col justify-center py-24 pr-12">
          <p className="eyebrow mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            {t("eyebrow")}
          </p>
          <h1
            className="text-display mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000"
            style={{ fontWeight: 400 }}
          >
            {t("headline_line1")}
            <br />
            <em>{t("headline_line2")}</em>
          </h1>
          <p className="text-title text-stone mb-10 max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            {t("subhead")}
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Link href="/kontakt" className="btn-primary">
              {t("cta_primary")}
            </Link>
            <Link href="/ydelser" className="btn-outline">
              {t("cta_secondary")}
            </Link>
          </div>
        </div>

        {/* Right column — full-bleed image placeholder with left-edge fade */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-forest/20" />
          <div
            className="absolute inset-y-0 left-0 w-24 z-10"
            style={{
              background:
                "linear-gradient(to right, var(--color-paper), transparent)",
            }}
          />
        </div>
      </div>
    </Section>
  );
}
