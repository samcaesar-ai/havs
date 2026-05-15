import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { PartnersWall } from "@/components/partners-wall";
import { ContactBand } from "@/components/contact-band";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("partnere") };
}

export default function PartnerePage() {
  const t = useTranslations("nav");

  return (
    <main>
      <Section className="pt-24 pb-12">
        <h1 className="text-display mb-6">{t("partnere")}</h1>
        <p className="text-title text-stone max-w-2xl font-light">
          Vi repræsenterer de stærkeste led i den nordiske trækæde.
        </p>
      </Section>
      
      <PartnersWall />

      <Section className="bg-blue text-paper">
         <div className="max-w-3xl">
            <h2 className="text-headline mb-8">Vil du være en del af netværket?</h2>
            <p className="text-xl font-light mb-10 opacity-80">
                Vi leder altid efter innovative producenter og leverandører, der kan bidrage til at transformere byggebranchen med træ.
            </p>
            <div className="flex">
                <a href="mailto:david@havs.dk" className="px-8 py-4 bg-orange text-paper hover:bg-orange/90 transition-colors">
                    Bliv partner
                </a>
            </div>
         </div>
      </Section>

      <ContactBand />
    </main>
  );
}
