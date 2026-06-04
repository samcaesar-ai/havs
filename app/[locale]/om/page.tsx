import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
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
                    <h2 className="font-display text-xl mb-4">Hvem er David Hav?</h2>
                    <p className="text-stone mb-4">
                        David Hav har gennem flere år arbejdet med opsøgende dialog i byggebranchen — med særligt fokus på CLT, limtræ og præfabrikerede byggesystemer. Han kender markedet indefra og forstår, hvad der skal til for at bringe et produkt i spil på det rigtige tidspunkt i et projekt.
                    </p>
                    <p className="text-stone">
                        HAVS er bygget på de relationer og den markedsviden David har opbygget: evnen til at identificere relevante projekter, skaffe adgang til tilbudsmateriale og skabe kontakt til de entreprenører og arkitekter, der træffer beslutningerne.
                    </p>
                </div>
            </div>
            <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                    src="/images/david-hav.webp"
                    alt="David Hav"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>
        </div>
      </Section>

      <Section className="bg-birch/10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl">Vision</h3>
                <p className="text-stone text-sm">At gøre miljøvenlige byggematerialer til det naturlige førstevalg i skandinavisk byggeri — gennem stærke relationer og teknisk ekspertise.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl">Mission</h3>
                <p className="text-stone text-sm">At forbinde producenter af bæredygtige byggematerialer med de rigtige projekter på det rigtige tidspunkt.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl">Værdier</h3>
                <p className="text-stone text-sm">Integritet, langsigtede relationer og en dyb forpligtelse til miljøvenligt og klimabevidst byggeri.</p>
            </div>
         </div>
      </Section>

      <ContactBand />
    </main>
  );
}
