"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

interface MobileNavProps {
  locale: Locale;
  items: { href: string; label: string }[];
  isOpen: boolean;
  onItemClick: () => void;
}

export function MobileNav({ locale, items, isOpen, onItemClick }: MobileNavProps) {
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
      className="grid bg-gradient-to-b from-[var(--primary-deep)] to-[var(--primary)] pt-3 px-4 pb-5 w-full box-border" 
      aria-label={t(locale, "nav", "menu")}
    >
      {items.map((item, index) => (
        <Link 
          key={item.href} 
          ref={index === 0 ? firstLinkRef : null}
          href={item.href} 
          onClick={onItemClick} 
          className="no-underline py-[0.85rem] px-[0.35rem] border-b border-white/10 !text-white font-medium transition-all duration-200 break-words hover:!text-white hover:ps-3"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
