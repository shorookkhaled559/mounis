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
    <nav className="desktop-nav" aria-label={t(locale, "nav", "menu")}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname === item.href ? "is-active" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
