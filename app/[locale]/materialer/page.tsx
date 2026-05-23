import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { MaterialsGrid } from "@/components/materials-grid";
import { ContactBand } from "@/components/contact-band";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("materialer") };
}

export default function MaterialerPage() {
  const t = useTranslations("nav");

  return (
    <main>
      <Section className="pt-24 pb-12">
        <h1 className="text-display mb-6">{t("materialer")}</h1>
        <p className="text-title text-stone max-w-2xl font-light">
          Vi arbejder med de mest avancerede og miljøvenlige byggematerialer i Norden — træ, tag, cement og facadesystemer med dokumenteret klimaprofil.
        </p>
      </Section>
      
      <MaterialsGrid />

      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
                <h2 className="text-headline text-orange">Teknisk rådgivning</h2>
                <p className="text-stone leading-relaxed">Vi hjælper med at forstå de tekniske specifikationer, miljøcertificeringer og klimaprofiler for hvert materiale — så I kan specificere med sikkerhed.</p>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="text-headline text-orange">Dokumenteret bæredygtighed</h2>
                <p className="text-stone leading-relaxed">Alle materialer i vores netværk er valgt på baggrund af miljøprofil, levetid og CO₂-aftryk. Vi hjælper med at finde den rigtige løsning til det rigtige projekt.</p>
            </div>
         </div>
      </Section>

      <ContactBand />
    </main>
  );
}
