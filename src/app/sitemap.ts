import type { MetadataRoute } from "next";

const domain = "https://magalhaesjoel.com"; // TODO: your domain

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["","/about","/guides/buy","/guides/sell","/solutions","/contact","/thanks"];
  const now = new Date();
  return pages.map((p) => ({
    url: `${domain}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p==="" ? 1 : 0.7,
    alternates: {
      languages: {
        en: `${domain}${p}?lang=en`,
        fr: `${domain}${p}?lang=fr`,
        pt: `${domain}${p}?lang=pt`,
        de: `${domain}${p}?lang=de`,
      },
    },
  }));
}
