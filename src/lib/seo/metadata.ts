import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

<<<<<<< HEAD
export interface LocaleMetadataOptions {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

=======
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
export function localeMetadata({
  locale,
  title,
  description,
  path = "",
<<<<<<< HEAD
  image,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: LocaleMetadataOptions): Metadata {
  const canonical = `${siteConfig.url}/${locale}${path}`;
  const languages = Object.fromEntries(
    locales.map((code) => [code, `${siteConfig.url}/${code}${path}`])
  );
  languages["x-default"] = `${siteConfig.url}/${defaultLocale}${path}`;

  // Use custom image or default brand image
  const ogImage = image ?? `${siteConfig.url}/brand/mounis-mark.png`;
  const ogImageAlt = imageAlt ?? siteConfig.name[locale];

=======
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

>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
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
<<<<<<< HEAD
      locale: locale === "ar" ? "ar_AR" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_AR"],
      url: canonical,
      siteName: siteConfig.name[locale],
      type,
      images: [
        {
          url: ogImage,
          width: imageWidth,
          height: imageHeight,
          alt: ogImageAlt,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags,
      }),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [ogImage] : undefined,
      creator: "@mounis_app",
      site: "@mounis_app",
=======
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
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
    },
  };
}
