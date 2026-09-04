"use client";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

interface MobileMenuToggleProps {
  locale: Locale;
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuToggle({ locale, isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      className="icon-btn menu-toggle"
      aria-expanded={isOpen}
      aria-controls="mobile-nav"
      aria-label={isOpen ? t(locale, "nav", "close") : t(locale, "nav", "menu")}
      onClick={onToggle}
    >
      {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
    </button>
  );
}
