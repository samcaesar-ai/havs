import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "./section";

export function AboutSnippet() {
  const t = useTranslations("about_snippet");

  return (
    <Section className="bg-birch/10">
      <div
        className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 md:gap-16 items-start"
      >
        {/* Left — portrait placeholder */}
        <div
          className="bg-forest/15 w-full"
          style={{ aspectRatio: "3/4" }}
          aria-hidden="true"
        />

        {/* Right — pullquote + body */}
        <div className="flex flex-col gap-8 justify-center md:pt-8">
          <h2 className="text-headline">{t("heading")}</h2>
          <blockquote className="pullquote">
            {t("body")}
          </blockquote>
          <p className="text-stone leading-relaxed max-w-prose" />
          <Link
            href="/om"
            className="text-orange border-b border-orange pb-1 hover:text-ink hover:border-ink transition-colors self-start"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </Section>
  );
}
