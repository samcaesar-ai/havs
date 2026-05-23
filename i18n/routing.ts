import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["da"],
  defaultLocale: "da",
  localePrefix: "never",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/praksis": "/praksis",
    "/materialer": "/materialer",
    "/partnere": "/partnere",
    "/om": "/om",
    "/kontakt": "/kontakt",
  },
});

export type Locale = (typeof routing.locales)[number];
