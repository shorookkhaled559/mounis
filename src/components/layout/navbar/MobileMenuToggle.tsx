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
      className="inline-flex lg:hidden items-center justify-center gap-[0.4rem] min-w-[2.35rem] min-h-[2.35rem] p-[0.35rem_0.45rem] border-0 bg-transparent text-white rounded-md cursor-pointer transition-colors duration-200 flex-shrink-0 hover:bg-white/15 hover:text-white md:min-w-[2.65rem] md:min-h-[2.65rem] md:p-[0.4rem_0.55rem]"
      aria-expanded={isOpen}
      aria-controls="mobile-nav"
      aria-label={isOpen ? t(locale, "nav", "close") : t(locale, "nav", "menu")}
      onClick={onToggle}
    >
      {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
    </button>
  );
}
