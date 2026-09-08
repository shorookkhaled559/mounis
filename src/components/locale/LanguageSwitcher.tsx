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
    <Link href={href} className="no-underline text-[0.85rem] font-medium !text-white py-[0.45rem] px-[0.7rem] border border-white/30 rounded-full transition-all duration-200 hover:!text-white hover:border-white/60 hover:bg-white/10" hrefLang={next} lang={next}>
      {t(locale, "chrome", "language")}
      <span className="sr-only">
        {locale === defaultLocale ? "Switch to English" : "التبديل إلى العربية"}
      </span>
    </Link>
  );
}
