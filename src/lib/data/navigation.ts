import { localizedPath } from "@/lib/i18n/config";
<<<<<<< HEAD
import type { Locale } from "@/types";
import navigationData from "@/data/navigation.json";

// Import translations directly
import commonAr from "@/locales/ar/common.json";
import commonEn from "@/locales/en/common.json";

function getLabel(locale: Locale, key: string): string {
  const messages = locale === "ar" ? commonAr : commonEn;
  const parts = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = messages;
  for (const part of parts) {
    value = value?.[part];
  }
  return typeof value === "string" ? value : key;
}

export function mainNav(locale: Locale) {
  return navigationData.main.map((item) => ({
    href: localizedPath(locale, item.path),
    label: getLabel(locale, item.labelKey),
  }));
}

export function footerNav(locale: Locale) {
  return navigationData.footer.map((item) => ({
    href: localizedPath(locale, item.path),
    label: getLabel(locale, item.labelKey),
  }));
=======
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

export function mainNav(locale: Locale) {
  return [
    { href: localizedPath(locale, "/"), label: t(locale, "nav", "home") },
    { href: localizedPath(locale, "/prayer"), label: t(locale, "nav", "prayer") },
    { href: localizedPath(locale, "/zakat"), label: t(locale, "nav", "zakat") },
    { href: localizedPath(locale, "/hadith"), label: t(locale, "nav", "hadith") },
    { href: localizedPath(locale, "/this-day"), label: t(locale, "nav", "thisDay") },
    { href: localizedPath(locale, "/fatwas"), label: t(locale, "nav", "fatwas") },
    { href: localizedPath(locale, "/about"), label: t(locale, "nav", "about") },
  ];
}

export function footerNav(locale: Locale) {
  return [
    { href: localizedPath(locale, "/about"), label: t(locale, "footer", "about") },
    { href: localizedPath(locale, "/contact"), label: t(locale, "footer", "contact") },
    { href: localizedPath(locale, "/privacy"), label: t(locale, "footer", "privacy") },
    { href: localizedPath(locale, "/terms"), label: t(locale, "footer", "terms") },
    { href: localizedPath(locale, "/cookies"), label: t(locale, "footer", "cookies") },
  ];
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
}
