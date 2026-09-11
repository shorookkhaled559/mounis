import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

interface NavbarBrandProps {
  locale: Locale;
}

export function NavbarBrand({ locale }: NavbarBrandProps) {
  return (
<<<<<<< HEAD
    <Link
      href={`/${locale}`}
      className="brand-link"
    >
      <BrandMark locale={locale} />
      <span className="sr-only">{siteConfig.name[locale]}</span>
=======
    <Link href={`/${locale}`} className="brand-link">
      <BrandMark locale={locale} />
      <span className="sr-only">
        {siteConfig.name[locale]}
      </span>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
    </Link>
  );
}
