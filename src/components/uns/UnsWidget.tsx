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
    <section className="bg-[var(--paper)] border border-[var(--line)] border-s-4 border-s-[var(--primary)] p-[1.1rem_1.15rem_1.2rem] rounded-md shadow-sm w-full box-border break-words" aria-labelledby="uns-heading">
      <p className="my-0 mb-2 text-[var(--primary)] text-[0.85rem] font-bold tracking-[0.04em] rtl:tracking-[0.04em] ltr:tracking-[0.08em] ltr:uppercase" id="uns-heading">
        {t(locale, "uns", "title")}
      </p>
      <p className="m-0 text-[var(--muted)] text-[0.85rem]">{t(locale, "uns", "subtitle")}</p>
      <p className="mt-[0.85rem] mb-0 text-[var(--ink)] text-[0.85rem] font-semibold">{content.title[locale]}</p>
      <blockquote className="mt-[0.65rem] mb-2 mx-0 grid gap-2">
        <QuoteIcon className="size-5 text-[var(--accent-deep)]" />
        <p className="m-0 font-[var(--font-body-ar),serif] text-[1.05rem] leading-[1.85]">{content.body[locale]}</p>
      </blockquote>
      {content.source ? (
        <p className="m-0 text-[var(--muted)] text-[0.85rem]">{content.source[locale]}</p>
      ) : null}
    </section>
  );
}
