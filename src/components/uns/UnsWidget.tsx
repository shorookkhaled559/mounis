import { QuoteIcon } from "@/components/icons";
import { t } from "@/lib/i18n/messages";
import type { Locale, UnsContent } from "@/types";

export function UnsWidget({ locale, content }: { locale: Locale; content: UnsContent }) {
  return (
    <section
      className="box-border w-full rounded-md border border-s-4 border-[var(--line)] border-s-[var(--primary)] bg-[var(--paper)] p-[1.1rem_1.15rem_1.2rem] break-words shadow-sm rtl:border-s-0 rtl:border-e-4 rtl:border-e-[var(--primary)]"
      aria-labelledby="uns-heading"
    >
      <p
        className="my-0 mb-2 text-[0.85rem] font-bold tracking-[0.04em] text-[var(--primary)] ltr:tracking-[0.08em] ltr:uppercase rtl:tracking-[0.04em]"
        id="uns-heading"
      >
        {t(locale, "uns", "title")}
      </p>
      <p className="m-0 text-[0.85rem] text-[var(--muted)]">{t(locale, "uns", "subtitle")}</p>
      <p className="mt-[0.85rem] mb-0 text-[0.85rem] font-semibold text-[var(--ink)]">
        {content.title[locale]}
      </p>
      <blockquote className="mx-0 mt-[0.65rem] mb-2 grid gap-2 rtl:text-right">
        <QuoteIcon className="size-5 text-[var(--accent-deep)] rtl:justify-self-end" />
        <p className="m-0 text-[1.05rem] leading-[1.85] font-[var(--font-body-ar),serif]">
          {content.body[locale]}
        </p>
      </blockquote>
      {content.source ? (
        <p className="m-0 text-[0.85rem] text-[var(--muted)]">{content.source[locale]}</p>
      ) : null}
    </section>
  );
}
