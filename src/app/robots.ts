import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://thesaistory.com/sitemap.xml",
    host: "https://thesaistory.com",
  };
}