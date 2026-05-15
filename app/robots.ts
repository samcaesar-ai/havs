import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://havs.dk/sitemap.xml",
    host: "https://havs.dk",
  };
}
