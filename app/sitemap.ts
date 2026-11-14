import type { MetadataRoute } from "next";

const SITE_URL = "https://www.tymamakeupartist.com";

const LAST_MODIFIED = "2026-11-14";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/maquillage-mariage-casablanca`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/maquillage-mariage-rabat`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/wedding-makeup-marrakech`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tarifs`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/formation-maquillage-casablanca`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
