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
    <nav className="hidden lg:flex flex-1 items-center justify-start gap-x-5 gap-y-[0.15rem] min-w-0 overflow-auto scrollbar-none" aria-label={t(locale, "nav", "menu")}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`no-underline !text-white text-[0.925rem] font-medium whitespace-nowrap py-[0.4rem] border-b-2 border-transparent transition-all duration-200 hover:!text-white hover:border-b-[var(--accent)] ${pathname === item.href ? "!text-white border-b-[var(--accent)]" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
