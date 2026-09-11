import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

interface NavbarBrandProps {
  locale: Locale;
}

export function NavbarBrand({ locale }: NavbarBrandProps) {
  return (
    <Link
      href={`/${locale}`}
      className="brand-link"
    >
      <BrandMark locale={locale} />
      <span className="sr-only">{siteConfig.name[locale]}</span>
    </Link>
  );
}
