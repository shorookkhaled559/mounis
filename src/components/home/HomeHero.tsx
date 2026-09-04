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
    <section className="home-hero">
      <p className="section-kicker">{t(locale, "hero", "kicker")}</p>
      <p className="hero-title">{siteConfig.tagline[locale]}</p>
      <p className="lede">{siteConfig.description[locale]}</p>
      <HeroDate 
        gregorian={gregorian} 
        hijri={hijri} 
        isoDate={now.toISOString().slice(0, 10)} 
      />
      <HeroTools tools={tools} />
    </section>
  );
}
