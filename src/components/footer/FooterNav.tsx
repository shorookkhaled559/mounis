import Link from "next/link";

interface FooterNavProps {
  title: string;
  items: { href: string; label: string }[];
  ariaLabel: string;
}

export function FooterNav({ title, items, ariaLabel }: FooterNavProps) {
  return (
    <nav aria-label={ariaLabel}>
      <p className="footer-label">{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
