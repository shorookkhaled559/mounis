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
    <footer className="mt-8 w-full overflow-x-hidden border-t border-[var(--line)] bg-gradient-to-b from-[var(--surface)] to-[var(--surface-raised)] pt-8 pb-[1.6rem] md:pt-10 rtl:text-right">
      <div className="mx-auto box-border grid w-full max-w-[min(calc(100%-1.5rem),var(--page))] grid-cols-1 gap-6 px-3 md:grid-cols-[1.3fr_1fr_1fr] md:px-4 rtl:text-right">
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
