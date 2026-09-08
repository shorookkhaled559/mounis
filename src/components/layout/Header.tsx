import { Navbar } from "./navbar";
import type { Locale } from "@/types";

interface HeaderProps {
  locale: Locale;
  items: { href: string; label: string }[];
}

export function Header({ locale, items }: HeaderProps) {
  return <Navbar locale={locale} items={items} />;
}
