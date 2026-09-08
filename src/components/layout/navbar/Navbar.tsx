"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavbarBrand } from "./NavbarBrand";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { NavbarActions } from "./NavbarActions";
import type { Locale } from "@/types";

interface NavbarProps {
  locale: Locale;
  items: { href: string; label: string }[];
}

export function Navbar({ locale, items }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="w-full max-w-[min(calc(100%-1.25rem),var(--page))] mx-auto min-h-[var(--header-h)] flex items-center gap-3 py-1 px-2.5 box-border md:gap-[1.15rem] md:px-4">
        <NavbarBrand locale={locale} />
        <DesktopNav locale={locale} items={items} />
        <NavbarActions
          locale={locale}
          pathname={pathname}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={handleMobileMenuToggle}
        />
      </div>
      <MobileNav
        locale={locale}
        items={items}
        isOpen={isMobileMenuOpen}
        onItemClick={handleMobileMenuItemClick}
      />
    </header>
  );
}
