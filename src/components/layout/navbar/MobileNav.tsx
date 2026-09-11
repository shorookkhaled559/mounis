"use client";

import Link from "next/link";
<<<<<<< HEAD
import { useEffect, useRef } from "react";
=======
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

interface MobileNavProps {
  locale: Locale;
  items: { href: string; label: string }[];
  isOpen: boolean;
  onItemClick: () => void;
}

export function MobileNav({ locale, items, isOpen, onItemClick }: MobileNavProps) {
<<<<<<< HEAD
  const navRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus first link when menu opens
      firstLinkRef.current?.focus();
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <nav
      ref={navRef}
      id="mobile-nav"
      className="box-border grid w-full bg-gradient-to-b from-[var(--primary-deep)] to-[var(--primary)] px-4 pt-3 pb-5 sm:hidden"
      aria-label={t(locale, "nav", "menu")}
    >
      {items.map((item, index) => (
        <Link
          key={item.href}
          ref={index === 0 ? firstLinkRef : null}
          href={item.href}
          onClick={onItemClick}
          className="border-b border-white/10 px-[0.35rem] py-[0.85rem] font-medium break-words !text-white no-underline transition-all duration-200 hover:ps-3 hover:!text-white rtl:hover:ps-[0.35rem] rtl:hover:pe-3"
        >
=======
  if (!isOpen) return null;

  return (
    <nav id="mobile-nav" className="mobile-nav" aria-label={t(locale, "nav", "menu")}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} onClick={onItemClick}>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
