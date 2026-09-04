import { localizedPath } from "@/lib/i18n/config";
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
}
