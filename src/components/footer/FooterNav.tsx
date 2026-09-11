import Link from "next/link";

interface FooterNavProps {
  title: string;
  items: { href: string; label: string }[];
  ariaLabel: string;
}

export function FooterNav({ title, items, ariaLabel }: FooterNavProps) {
  return (
    <nav aria-label={ariaLabel}>
<<<<<<< HEAD
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
=======
      <p className="footer-label">{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
          </li>
        ))}
      </ul>
    </nav>
  );
}
