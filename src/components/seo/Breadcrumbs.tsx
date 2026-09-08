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
    <nav className="mb-5 text-[0.88rem] text-[var(--muted)]" aria-label={locale === "ar" ? "مسار التنقل" : "Breadcrumb"}>
      <ol className="flex flex-wrap gap-x-2 gap-y-[0.35rem] list-none m-0 p-0 [&_li:not(:last-child)]:after:content-['/'] [&_li:not(:last-child)]:after:ms-2 [&_li:not(:last-child)]:after:text-[var(--line)] [html[dir='rtl']_&_li:not(:last-child)]:after:content-['‹']">
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
