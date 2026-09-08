import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

interface NavbarBrandProps {
  locale: Locale;
}

export function NavbarBrand({ locale }: NavbarBrandProps) {
  return (
    <Link href={`/${locale}`} className="flex items-center gap-[0.65rem] no-underline flex-none !text-white font-semibold transition-opacity duration-200 max-w-[140px] hover:!text-white hover:opacity-95 md:max-w-none">
      <BrandMark locale={locale} />
      <span className="sr-only">
        {siteConfig.name[locale]}
      </span>
    </Link>
  );
}
