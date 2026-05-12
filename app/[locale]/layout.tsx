import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { inter, fraunces } from "@/app/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "HAVS — Nordisk træ & byggeri",
    template: "%s | HAVS",
  },
  description:
    "HAVS er en forretningsudviklingspraksis for den nordiske byggebranche. Drevet af David Hav, med fokus på CLT, limtræ og præfabrikerede træsystemer.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "da" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
