import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

const BASE_URL = "https://havs.dk";

type Pathname = keyof typeof routing.pathnames;

const pages: { pathname: Pathname; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { pathname: "/",           priority: 1.0,  changeFrequency: "monthly" },
  { pathname: "/ydelser",    priority: 0.85, changeFrequency: "monthly" },
  { pathname: "/materialer", priority: 0.85, changeFrequency: "monthly" },
  { pathname: "/partnere",   priority: 0.8,  changeFrequency: "monthly" },
  { pathname: "/om",         priority: 0.8,  changeFrequency: "yearly"  },
  { pathname: "/kontakt",    priority: 0.9,  changeFrequency: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ pathname, priority, changeFrequency }) =>
    routing.locales.map((locale) => ({
      url: `${BASE_URL}${locale === routing.defaultLocale ? "" : `/${locale}`}${
        getPathname({ locale, href: pathname })
      }`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [
            l,
            `${BASE_URL}${l === routing.defaultLocale ? "" : `/${l}`}${
              getPathname({ locale: l, href: pathname })
            }`,
          ])
        ),
      },
    }))
  );
}
