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
<<<<<<< HEAD
    <nav
      className="mb-5 text-[0.88rem] text-[var(--muted)]"
      aria-label={locale === "ar" ? "مسار التنقل" : "Breadcrumb"}
    >
      <ol className="m-0 flex list-none flex-wrap gap-x-2 gap-y-[0.35rem] p-0 [&_li:not(:last-child)]:after:ms-2 [&_li:not(:last-child)]:after:text-[var(--line)] [&_li:not(:last-child)]:after:content-['/'] [html[dir='rtl']_&_li:not(:last-child)]:after:content-['‹'] rtl:flex-row-reverse">
=======
    <nav className="breadcrumbs" aria-label={locale === "ar" ? "مسار التنقل" : "Breadcrumb"}>
      <ol>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
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
