import { FooterBrand, FooterNav, FooterNote } from "@/components/footer";
import { mainNav } from "@/lib/data/navigation";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

interface FooterProps {
  locale: Locale;
  items: { href: string; label: string }[];
}

export function Footer({ locale, items }: FooterProps) {
  const explore = mainNav(locale).filter((item) => !item.href.endsWith(`/${locale}`));

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <FooterBrand locale={locale} />
        <FooterNav
          title={locale === "ar" ? "استكشف" : "Explore"}
          items={explore.slice(0, 5)}
          ariaLabel={t(locale, "article", "latest")}
        />
        <FooterNav
          title={t(locale, "footer", "about")}
          items={items}
          ariaLabel={t(locale, "footer", "about")}
        />
      </div>
      <FooterNote text={t(locale, "footer", "rights")} />
    </footer>
  );
}
