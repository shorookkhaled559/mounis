import { BrandMark } from "@/components/brand/BrandMark";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

interface FooterBrandProps {
  locale: Locale;
}

export function FooterBrand({ locale }: FooterBrandProps) {
  return (
<<<<<<< HEAD
    <div className="grid w-full max-w-full gap-2 overflow-hidden text-[var(--muted)]">
      <BrandMark locale={locale} size={96} />
      <p className="letter-spacing-[-0.02em] font-semibold text-[var(--ink)]">
        {siteConfig.name[locale]}
      </p>
=======
    <div className="footer-brand">
      <BrandMark locale={locale} size={96} />
      <p className="brand-word">{siteConfig.name[locale]}</p>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
      <p>{siteConfig.tagline[locale]}</p>
    </div>
  );
}
