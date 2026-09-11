import { AdSlot } from "@/components/ads/AdSlot";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { footerNav, mainNav } from "@/lib/data/navigation";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        {t(locale, "chrome", "skip")}
      </a>
      <Header locale={locale} items={mainNav(locale)} />
      <AdSlot placement="banner-top" locale={locale} className="banner-desktop" />
      <AdSlot placement="mobile" locale={locale} className="banner-mobile" />
      {children}
      <Footer locale={locale} items={footerNav(locale)} />
    </>
  );
}
