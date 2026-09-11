import Link from "next/link";

interface HeroToolsProps {
  tools: { href: string; label: string }[];
}

export function HeroTools({ tools }: HeroToolsProps) {
  return (
<<<<<<< HEAD
    <p className="hero-tools mt-[1.35rem] mb-0 flex flex-wrap gap-2 md:gap-x-[0.85rem] md:gap-y-2.5 rtl:flex-row-reverse rtl:justify-start">
      {tools.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          className="rounded-md bg-[var(--primary)] px-[0.85rem] py-2 text-[0.85rem] font-medium whitespace-nowrap !text-white no-underline shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-[var(--primary-deep)] hover:shadow-md md:px-4 md:py-[0.55rem] md:text-[0.9rem] dark:!text-[var(--ink)]"
        >
=======
    <p className="hero-tools">
      {tools.map((tool) => (
        <Link key={tool.href} href={tool.href}>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
          {tool.label}
        </Link>
      ))}
    </p>
  );
}
