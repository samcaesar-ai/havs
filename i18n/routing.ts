import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["da", "en"],
  defaultLocale: "da",
  pathnames: {
    "/": "/",
    "/praksis": { da: "/praksis", en: "/practice" },
    "/materialer": { da: "/materialer", en: "/materials" },
    "/partnere": { da: "/partnere", en: "/partners" },
    "/om": { da: "/om", en: "/about" },
    "/kontakt": { da: "/kontakt", en: "/contact" },
  },
});

export type Locale = (typeof routing.locales)[number];
