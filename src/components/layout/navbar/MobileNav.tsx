"use client";

import Link from "next/link";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

interface MobileNavProps {
  locale: Locale;
  items: { href: string; label: string }[];
  isOpen: boolean;
  onItemClick: () => void;
}

export function MobileNav({ locale, items, isOpen, onItemClick }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <nav id="mobile-nav" className="mobile-nav" aria-label={t(locale, "nav", "menu")}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} onClick={onItemClick}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
