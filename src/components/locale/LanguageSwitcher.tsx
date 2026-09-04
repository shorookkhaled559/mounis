import Link from "next/link";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";

export function LanguageSwitcher({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  const next = locale === "ar" ? "en" : "ar";
  const withoutLocale = pathname.replace(/^\/(ar|en)(?=\/|$)/, "") || "/";
  const href = `/${next}${withoutLocale === "/" ? "" : withoutLocale}`;

  return (
    <Link href={href} className="lang-switch" hrefLang={next} lang={next}>
      {t(locale, "chrome", "language")}
      <span className="sr-only">
        {locale === defaultLocale ? "Switch to English" : "التبديل إلى العربية"}
      </span>
    </Link>
  );
}
