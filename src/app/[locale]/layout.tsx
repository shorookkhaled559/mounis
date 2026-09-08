import { SiteShell } from "@/components/layout/SiteShell";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : "ar";

  return {
    title: {
      default: `${siteConfig.name[loc]} — ${siteConfig.tagline[loc]}`,
      template: `%s | ${siteConfig.name[loc]}`,
    },
    description: siteConfig.description[loc],
    openGraph: {
      locale: loc === "ar" ? "ar_AR" : "en_US",
      title: `${siteConfig.name[loc]} — ${siteConfig.tagline[loc]}`,
      description: siteConfig.description[loc],
    },
    twitter: {
      title: `${siteConfig.name[loc]} — ${siteConfig.tagline[loc]}`,
      description: siteConfig.description[loc],
    },
    alternates: {
      canonical: `${siteConfig.url}/${loc}`,
      languages: {
        ar: `${siteConfig.url}/ar`,
        en: `${siteConfig.url}/en`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <SiteShell locale={locale as Locale}>{children}</SiteShell>;
}
