"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

interface DesktopNavProps {
  locale: Locale;
  items: { href: string; label: string }[];
}

export function DesktopNav({ locale, items }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className="desktop-nav"
      aria-label={t(locale, "nav", "menu")}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`border-b-2 border-transparent py-[0.4rem] text-[0.925rem] font-medium whitespace-nowrap !text-white no-underline transition-all duration-200 hover:border-b-[var(--accent)] hover:!text-white ${pathname === item.href ? "border-b-[var(--accent)] !text-white" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
