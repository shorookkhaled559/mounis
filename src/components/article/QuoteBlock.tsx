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
    <figure className="my-6 mx-0 p-4 border border-[var(--line)] border-s-4 border-s-[var(--accent)] bg-[var(--paper)] rounded-md shadow-sm grid gap-[0.55rem] w-full box-border break-words md:p-5 md:px-[1.35rem]">
      <QuoteIcon className="size-5 shrink-0 text-[var(--forest)]" />
      <blockquote className="m-0">
        <p className="m-0 font-[var(--font-body-ar),serif] text-[1.15rem] leading-[2]">{quote.text[locale]}</p>
      </blockquote>
      <figcaption className="text-[var(--muted)] text-[0.85rem]">{quote.source[locale]}</figcaption>
    </figure>
  );
}
