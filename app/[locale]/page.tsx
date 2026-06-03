import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { WhatWeDo } from "@/components/what-we-do";
import { AudienceTriage } from "@/components/audience-triage";
import { MaterialsGrid } from "@/components/materials-grid";
import { WhyHAVS } from "@/components/why-havs";
import { ProcessSteps } from "@/components/process-steps";
import { PartnersWall } from "@/components/partners-wall";
import { AboutSnippet } from "@/components/about-snippet";
import { ContactBand } from "@/components/contact-band";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return { title: t("eyebrow") };
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <AudienceTriage />
      <MaterialsGrid />
      <WhyHAVS />
      <ProcessSteps />
      <PartnersWall />
      <AboutSnippet />
      <ContactBand />
    </main>
  );
}
