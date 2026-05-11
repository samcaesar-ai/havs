import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return { title: t("eyebrow") };
}

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <main>
      <section>
        <p>{t("eyebrow")}</p>
        <h1>{t("headline")}</h1>
        <p>{t("subhead")}</p>
      </section>
    </main>
  );
}
