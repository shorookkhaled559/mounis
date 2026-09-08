import { HeroDate, HeroTools } from "./hero";
import { localizedPath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

interface HomeHeroProps {
  locale: Locale;
}

export function HomeHero({ locale }: HomeHeroProps) {
  const now = new Date();
  const gregorian = new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);
  
  const hijri = new Intl.DateTimeFormat(
    locale === "ar" ? "ar-SA-u-ca-islamic" : "en-GB-u-ca-islamic",
    { day: "numeric", month: "long", year: "numeric" },
  ).format(now);

  const tools = [
    { href: localizedPath(locale, "/prayer"), label: t(locale, "nav", "prayer") },
    { href: localizedPath(locale, "/zakat"), label: t(locale, "nav", "zakat") },
    { href: localizedPath(locale, "/this-day"), label: t(locale, "nav", "thisDay") },
  ];

  return (
    <section className="p-6 px-4 pb-5 bg-gradient-to-b from-[var(--surface)] to-[var(--cream)] rounded-lg mb-8 shadow-sm w-full box-border md:p-10 md:px-6 md:pb-8">
      <p className="my-0 mb-2 text-[var(--primary)] text-[0.85rem] font-bold tracking-[0.04em] rtl:tracking-[0.04em] ltr:tracking-[0.08em] ltr:uppercase">{t(locale, "hero", "kicker")}</p>
      <p className="m-0 text-[clamp(1.25rem,5vw,2.25rem)] font-bold leading-[1.35] max-w-full text-[var(--ink)] break-words">{siteConfig.tagline[locale]}</p>
      <p className="text-[var(--muted)] max-w-full my-0 mt-[0.65rem] break-words">{siteConfig.description[locale]}</p>
      <HeroDate 
        gregorian={gregorian} 
        hijri={hijri} 
        isoDate={now.toISOString().slice(0, 10)} 
      />
      <HeroTools tools={tools} />
    </section>
  );
}
