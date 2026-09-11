"use client";

import { FormEvent, useState } from "react";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

export function CommentsSection({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const body = String(data.get("body") ?? "").trim();
    if (!name || !body) return;
    setSubmitted(true);
    form.reset();
  }

  return (
    <section className="mt-9 border-t border-[var(--line)] pt-6" aria-labelledby="comments-title">
      <div className="section-head flex items-baseline justify-between gap-4 rtl:flex-row-reverse">
        <h2 id="comments-title" className="m-0 text-xl font-bold text-[var(--ink)]">
          {t(locale, "comments", "title")}
        </h2>
      </div>
      <p className="my-0 mt-[0.65rem] max-w-full break-words text-[var(--muted)]">
        {t(locale, "comments", "empty")}
      </p>
      {submitted ? (
        <p
          className="mt-4 text-[var(--success)]"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {t(locale, "comments", "pending")}
        </p>
      ) : (
        <form
          className="mt-4 grid gap-[0.85rem]"
          onSubmit={onSubmit}
          aria-label={t(locale, "comments", "title")}
        >
          <label className="grid gap-[0.35rem] text-[0.9rem]" htmlFor="comment-name">
            {t(locale, "comments", "name")}
            <input
              id="comment-name"
              name="name"
              required
              autoComplete="name"
              aria-required="true"
              className="box-border w-full max-w-full rounded-md border border-[var(--line)] bg-[var(--paper)] px-[0.85rem] py-3 text-[var(--ink)] transition-all duration-200 focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-subtle)] focus:outline-none"
            />
          </label>
          <label className="grid gap-[0.35rem] text-[0.9rem]" htmlFor="comment-body">
            {t(locale, "comments", "body")}
            <textarea
              id="comment-body"
              name="body"
              required
              rows={3}
              aria-required="true"
              className="box-border w-full max-w-full rounded-md border border-[var(--line)] bg-[var(--paper)] px-[0.85rem] py-3 text-[var(--ink)] transition-all duration-200 focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-subtle)] focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="min-h-[2.85rem] cursor-pointer justify-self-start rounded-md border-0 bg-[var(--primary)] px-[1.35rem] py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-[var(--primary-deep)] hover:shadow-md dark:text-[var(--ink)]"
          >
            {t(locale, "comments", "submit")}
          </button>
        </form>
      )}
      <button
        type="button"
        className="mt-4 cursor-pointer justify-self-start border-0 bg-transparent p-0 font-medium text-[var(--primary)] transition-colors duration-200 hover:text-[var(--primary-deep)] disabled:cursor-not-allowed disabled:text-[var(--muted)]"
        disabled
        aria-label={t(locale, "comments", "loadMore")}
        aria-disabled="true"
      >
        {t(locale, "comments", "loadMore")}
      </button>
    </section>
  );
}
