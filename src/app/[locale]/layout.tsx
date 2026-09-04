import { SiteShell } from "@/components/layout/SiteShell";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
