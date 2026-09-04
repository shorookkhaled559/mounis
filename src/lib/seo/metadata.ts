import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

export function localeMetadata({
  locale,
  title,
  description,
  path = "",
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonical = `${siteConfig.url}/${locale}${path}`;
  const languages = Object.fromEntries(
    locales.map((code) => [code, `${siteConfig.url}/${code}${path}`]),
  );
  languages["x-default"] = `${siteConfig.url}/${defaultLocale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      url: canonical,
      siteName: siteConfig.name[locale],
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/brand/mounis-mark.png`,
          width: 512,
          height: 512,
          alt: siteConfig.name[locale],
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
