import { BrandMark } from "@/components/brand/BrandMark";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

interface FooterBrandProps {
  locale: Locale;
}

export function FooterBrand({ locale }: FooterBrandProps) {
  return (
    <div className="grid w-full max-w-full gap-2 overflow-hidden text-[var(--muted)]">
      <BrandMark locale={locale} size={96} />
      <p className="letter-spacing-[-0.02em] font-semibold text-[var(--ink)]">
        {siteConfig.name[locale]}
      </p>
      <p>{siteConfig.tagline[locale]}</p>
    </div>
  );
}
