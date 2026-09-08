"use client";

import { LanguageSwitcher } from "@/components/locale/LanguageSwitcher";
import { SearchDialog } from "@/components/search/SearchDialog";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileMenuToggle } from "./MobileMenuToggle";
import type { Locale } from "@/types";

interface NavbarActionsProps {
  locale: Locale;
  pathname: string;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export function NavbarActions({
  locale,
  pathname,
  isMobileMenuOpen,
  onMobileMenuToggle,
}: NavbarActionsProps) {
  return (
    <div className="ms-auto flex items-center gap-[0.15rem] flex-shrink-0 md:gap-[0.2rem]">
      <LanguageSwitcher locale={locale} pathname={pathname} />
      <ThemeToggle locale={locale} />
      <SearchDialog locale={locale} />
      <MobileMenuToggle
        locale={locale}
        isOpen={isMobileMenuOpen}
        onToggle={onMobileMenuToggle}
      />
    </div>
  );
}
