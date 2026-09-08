import { siteConfig } from "@/lib/site";
import type { Article, Locale } from "@/types";

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name[locale],
    alternateName: siteConfig.name.ar,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/mounis-mark.png`,
    description: siteConfig.description[locale],
    inLanguage: locale === "ar" ? "ar" : "en",
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name[locale],
    url: `${siteConfig.url}/${locale}`,
    inLanguage: locale === "ar" ? "ar-SA" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/${locale}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleJsonLd(article: Article, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[locale],
    description: article.excerpt[locale],
    inLanguage: locale === "ar" ? "ar" : "en",
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    image: `${siteConfig.url}${article.image}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name[locale],
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name[locale],
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/mounis-mark.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/${locale}/articles/${article.slug}`,
  };
}

export function breadcrumbJsonLd(
  locale: Locale,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}/${locale}${item.path}`,
    })),
  };
}
