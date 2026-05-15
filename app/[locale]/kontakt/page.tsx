import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { CalEmbed } from "@/components/cal-embed";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("kontakt") };
}

export default async function KontaktPage() {
  const t = await getTranslations("contact_page");

  return (
    <main>
      <Section className="pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-display mb-8">{t("heading")}</h1>
            <div className="mb-12 flex flex-col gap-2">
              <span className="eyebrow">{t("email_label")}</span>
              <a
                href="mailto:david@havs.dk"
                className="font-display text-xl text-ink hover:text-orange transition-colors"
              >
                david@havs.dk
              </a>
            </div>
            <ContactForm />
          </div>
          <div>
            <CalEmbed />
          </div>
        </div>
      </Section>
    </main>
  );
}
