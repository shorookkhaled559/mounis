import { locales } from "@/lib/i18n/config";
import { articles } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

const staticPaths = [
  "",
  "/articles",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
  "/prayer",
  "/zakat",
  "/hadith",
  "/this-day",
  "/fatwas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${siteConfig.url}/${locale}${path}`,
        lastModified,
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((code) => [code, `${siteConfig.url}/${code}${path}`])
          ),
        },
      });
    }
    for (const article of articles) {
      entries.push({
        url: `${siteConfig.url}/${locale}/articles/${article.slug}`,
        lastModified: new Date(article.updatedAt ?? article.publishedAt),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((code) => [code, `${siteConfig.url}/${code}/articles/${article.slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
