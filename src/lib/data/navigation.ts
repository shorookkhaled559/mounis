import { localizedPath } from "@/lib/i18n/config";
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
}
