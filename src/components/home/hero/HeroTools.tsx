import Link from "next/link";

interface HeroToolsProps {
  tools: { href: string; label: string }[];
}

export function HeroTools({ tools }: HeroToolsProps) {
  return (
    <p className="hero-tools">
      {tools.map((tool) => (
        <Link key={tool.href} href={tool.href}>
          {tool.label}
        </Link>
      ))}
    </p>
  );
}
