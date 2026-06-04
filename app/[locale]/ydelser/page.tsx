import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactBand } from "@/components/contact-band";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("ydelser") };
}

export default function YdelserPage() {
  const t = useTranslations("practice");

  return (
    <main>
      <Section className="pt-24 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-display mb-12">{t("pullquote")}</h1>
          <div className="prose prose-xl prose-stone">
            <p className="text-title text-ink font-light leading-relaxed">
              {t("body")}
            </p>
          </div>
        </div>
      </Section>
      
      <Section className="bg-birch/10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
                <h2 className="text-headline">Kortere vej fra produkt til specifikation.</h2>
                <p className="text-stone">Vi åbner døre baseret på teknisk relevans og gensidigværdi — uanset om produktet er træ, tag, cement eller en anden miljøvenlig løsning.</p>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="text-headline">Bæredygtige materialer i de rigtige projekter.</h2>
                <p className="text-stone">Vores mål er at se miljøvenlige produkter specificeret og bygget ind i projekter, hvor de gør den største forskel for klimaet.</p>
            </div>
         </div>
      </Section>

      <ContactBand />
    </main>
  );
}
