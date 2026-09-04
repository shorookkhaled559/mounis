import { BrandMark } from "@/components/brand/BrandMark";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

interface FooterBrandProps {
  locale: Locale;
}

export function FooterBrand({ locale }: FooterBrandProps) {
  return (
    <div className="footer-brand">
      <BrandMark locale={locale} size={96} />
      <p className="brand-word">{siteConfig.name[locale]}</p>
      <p>{siteConfig.tagline[locale]}</p>
    </div>
  );
}
