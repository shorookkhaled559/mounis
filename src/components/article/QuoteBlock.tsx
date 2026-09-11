import { QuoteIcon } from "@/components/icons";
import type { Article, Locale } from "@/types";

export function QuoteBlock({
  quote,
  locale,
}: {
  quote: NonNullable<Article["quote"]>;
  locale: Locale;
}) {
  return (
    <figure className="mx-0 my-6 box-border grid w-full gap-[0.55rem] rounded-md border border-s-4 border-[var(--line)] border-s-[var(--accent)] bg-[var(--paper)] p-4 break-words shadow-sm md:p-5 md:px-[1.35rem]">
      <QuoteIcon className="size-5 shrink-0 text-[var(--forest)]" />
      <blockquote className="m-0">
        <p className="m-0 text-[1.15rem] leading-[2] font-[var(--font-body-ar),serif]">
          {quote.text[locale]}
        </p>
      </blockquote>
      <figcaption className="text-[0.85rem] text-[var(--muted)]">{quote.source[locale]}</figcaption>
    </figure>
  );
}
