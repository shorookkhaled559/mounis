import { BrandMark } from "@/components/brand/BrandMark";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

interface FooterBrandProps {
  locale: Locale;
}

export function FooterBrand({ locale }: FooterBrandProps) {
  return (
    <div className="grid gap-2 text-[var(--muted)] w-full max-w-full overflow-hidden">
      <BrandMark locale={locale} size={96} />
      <p className="font-semibold letter-spacing-[-0.02em] text-[var(--ink)]">{siteConfig.name[locale]}</p>
      <p>{siteConfig.tagline[locale]}</p>
    </div>
  );
}
