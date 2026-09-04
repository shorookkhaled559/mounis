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
    <figure className="quote-block">
      <QuoteIcon className="size-5 shrink-0 text-[var(--forest)]" />
      <blockquote>
        <p>{quote.text[locale]}</p>
      </blockquote>
      <figcaption>{quote.source[locale]}</figcaption>
    </figure>
  );
}
