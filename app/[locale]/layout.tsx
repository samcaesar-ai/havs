import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { inter, cormorant } from "@/app/fonts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MobileEmailChip } from "@/components/mobile-email-chip";
import "@/app/globals.css";

const BASE_URL = "https://havs.dk";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Build hreflang alternates for the root path (pages override with their own)
  const languages = Object.fromEntries(
    routing.locales.map((l) => [
      l,
      `${BASE_URL}${l === routing.defaultLocale ? "" : `/${l}`}`,
    ])
  ) as Record<string, string>;
  languages["x-default"] = BASE_URL;

  const isEnglish = locale === "en";

  return {
    title: {
      default: isEnglish
        ? "HAVS — Nordic timber & construction"
        : "HAVS — Nordisk træ & byggeri",
      template: "%s | HAVS",
    },
    description: isEnglish
      ? "HAVS is a business development practice for the Nordic construction industry. Led by David Hav, working in CLT, glulam, and prefabricated timber systems."
      : "HAVS er en forretningsudviklingspraksis for den nordiske byggebranche. Drevet af David Hav, med fokus på CLT, limtræ og præfabrikerede træsystemer.",
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}${locale === routing.defaultLocale ? "" : `/${locale}`}`,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "HAVS",
      locale: locale === "en" ? "en_GB" : "da_DK",
      alternateLocale: locale === "en" ? "da_DK" : "en_GB",
      images: [
        {
          url: "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "HAVS — Nordisk træ & byggeri",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          {children}
          <Footer />
          <MobileEmailChip />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
