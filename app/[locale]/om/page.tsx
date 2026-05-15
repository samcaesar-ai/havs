import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactBand } from "@/components/contact-band";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("om") };
}

export default function OmPage() {
  const t = useTranslations("about_snippet");

  return (
    <main>
      <Section className="pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
                <h1 className="text-display mb-12">{t("heading")}</h1>
                <p className="text-title text-ink font-light leading-relaxed mb-8">
                    {t("body")}
                </p>
                <div className="prose prose-stone">
                    <p className="text-stone">
                        David har brugt sin karriere på at bygge bro mellem de mennesker, der designer vores byer, og de mennesker, der leverer materialerne til dem. Med en dyb forståelse for både det arkitektoniske udtryk og de kommercielle realiteter i byggeriet, er HAVS skabt for at accelerere brugen af træ i Skandinavien.
                    </p>
                </div>
            </div>
            <div className="aspect-[4/5] bg-birch/30 relative overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-birch italic">
                    Portrait of David Hav
                </div>
            </div>
        </div>
      </Section>

      <Section className="bg-birch/10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl">Vision</h3>
                <p className="text-stone text-sm">At gøre træ til det naturlige førstevalg i skandinavisk byggeri gennem stærke relationer og teknisk ekspertise.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl">Mission</h3>
                <p className="text-stone text-sm">At forbinde de rigtige producenter med de rigtige projekter på det rigtige tidspunkt.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl">Værdier</h3>
                <p className="text-stone text-sm">Integritet, langsigtede relationer og en passion for bæredygtigt byggeri.</p>
            </div>
         </div>
      </Section>

      <ContactBand />
    </main>
  );
}
