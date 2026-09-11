import Link from "next/link";

interface FooterNavProps {
  title: string;
  items: { href: string; label: string }[];
  ariaLabel: string;
}

export function FooterNav({ title, items, ariaLabel }: FooterNavProps) {
  return (
    <nav aria-label={ariaLabel}>
      <p className="m-0 mb-2 font-semibold text-[var(--ink)]">{title}</p>
      <ul className="m-0 grid list-none gap-[0.4rem] p-0">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[var(--muted)] no-underline hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
