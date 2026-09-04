import Link from "next/link";
import type { Locale } from "@/types";

export function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: { href: string; label: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label={locale === "ar" ? "مسار التنقل" : "Breadcrumb"}>
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index < items.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
