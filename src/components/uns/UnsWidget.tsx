import { QuoteIcon } from "@/components/icons";
import { t } from "@/lib/i18n/messages";
import type { Locale, UnsContent } from "@/types";

export function UnsWidget({
  locale,
  content,
}: {
  locale: Locale;
  content: UnsContent;
}) {
  return (
    <section className="uns-widget" aria-labelledby="uns-heading">
      <p className="section-kicker" id="uns-heading">
        {t(locale, "uns", "title")}
      </p>
      <p className="uns-sub">{t(locale, "uns", "subtitle")}</p>
      <p className="uns-kind">{content.title[locale]}</p>
      <blockquote className="uns-quote">
        <QuoteIcon className="size-5 text-[var(--accent-deep)]" />
        <p>{content.body[locale]}</p>
      </blockquote>
      {content.source ? (
        <p className="uns-source">{content.source[locale]}</p>
      ) : null}
    </section>
  );
}
