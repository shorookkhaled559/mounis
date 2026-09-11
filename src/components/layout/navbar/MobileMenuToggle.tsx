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
      className="flex min-h-[2.35rem] min-w-[2.35rem] flex-shrink-0 cursor-pointer items-center justify-center gap-[0.4rem] rounded-md border-0 bg-transparent p-[0.35rem_0.45rem] text-white transition-colors duration-200 hover:bg-white/15 hover:text-white md:hidden"
      aria-expanded={isOpen}
      aria-controls="mobile-nav"
      aria-label={isOpen ? t(locale, "nav", "close") : t(locale, "nav", "menu")}
      onClick={onToggle}
    >
      {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
    </button>
  );
}
