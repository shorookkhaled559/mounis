import Link from "next/link";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";

<<<<<<< HEAD
export function LanguageSwitcher({ locale, pathname }: { locale: Locale; pathname: string }) {
=======
export function LanguageSwitcher({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
  const next = locale === "ar" ? "en" : "ar";
  const withoutLocale = pathname.replace(/^\/(ar|en)(?=\/|$)/, "") || "/";
  const href = `/${next}${withoutLocale === "/" ? "" : withoutLocale}`;

  return (
<<<<<<< HEAD
    <Link
      href={href}
      className="rounded-full border border-white/30 px-[0.7rem] py-[0.45rem] text-[0.85rem] font-medium !text-white no-underline transition-all duration-200 hover:border-white/60 hover:bg-white/10 hover:!text-white rtl:ml-2 rtl:mr-0"
      hrefLang={next}
      lang={next}
    >
=======
    <Link href={href} className="lang-switch" hrefLang={next} lang={next}>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
      {t(locale, "chrome", "language")}
      <span className="sr-only">
        {locale === defaultLocale ? "Switch to English" : "التبديل إلى العربية"}
      </span>
    </Link>
  );
}
