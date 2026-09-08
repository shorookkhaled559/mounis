import Link from "next/link";

interface HeroToolsProps {
  tools: { href: string; label: string }[];
}

export function HeroTools({ tools }: HeroToolsProps) {
  return (
    <p className="flex flex-wrap gap-2 mt-[1.35rem] mb-0 md:gap-x-[0.85rem] md:gap-y-2.5">
      {tools.map((tool) => (
        <Link key={tool.href} href={tool.href} className="no-underline text-[0.85rem] font-medium !text-white bg-[var(--primary)] py-2 px-[0.85rem] rounded-md transition-all duration-200 shadow-sm whitespace-nowrap hover:bg-[var(--primary-deep)] hover:shadow-md hover:-translate-y-px md:text-[0.9rem] md:py-[0.55rem] md:px-4 dark:!text-[var(--ink)]">
          {tool.label}
        </Link>
      ))}
    </p>
  );
}
