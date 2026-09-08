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
    <section className="mt-9 pt-6 border-t border-[var(--line)]" aria-labelledby="comments-title">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="comments-title" className="m-0 text-xl font-bold text-[var(--ink)]">
          {t(locale, "comments", "title")}
        </h2>
      </div>
      <p className="text-[var(--muted)] max-w-full my-0 mt-[0.65rem] break-words">{t(locale, "comments", "empty")}</p>
      {submitted ? (
        <p className="text-[var(--success)] mt-4" role="status" aria-live="polite" aria-atomic="true">
          {t(locale, "comments", "pending")}
        </p>
      ) : (
        <form className="grid gap-[0.85rem] mt-4" onSubmit={onSubmit} aria-label={t(locale, "comments", "title")}>
          <label className="grid gap-[0.35rem] text-[0.9rem]" htmlFor="comment-name">
            {t(locale, "comments", "name")}
            <input 
              id="comment-name"
              name="name" 
              required 
              autoComplete="name" 
              aria-required="true"
              className="w-full max-w-full border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] rounded-md py-3 px-[0.85rem] transition-all duration-200 box-border focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-subtle)]" 
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
              className="w-full max-w-full border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] rounded-md py-3 px-[0.85rem] transition-all duration-200 box-border focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-subtle)]" 
            />
          </label>
          <button type="submit" className="justify-self-start border-0 bg-[var(--primary)] text-white py-3 px-[1.35rem] min-h-[2.85rem] rounded-md font-semibold cursor-pointer transition-all duration-200 shadow-sm hover:bg-[var(--primary-deep)] hover:shadow-md hover:-translate-y-px dark:text-[var(--ink)]">
            {t(locale, "comments", "submit")}
          </button>
        </form>
      )}
      <button 
        type="button" 
        className="bg-transparent border-0 text-[var(--primary)] font-medium cursor-pointer p-0 justify-self-start transition-colors duration-200 mt-4 hover:text-[var(--primary-deep)] disabled:text-[var(--muted)] disabled:cursor-not-allowed" 
        disabled
        aria-label={t(locale, "comments", "loadMore")}
        aria-disabled="true"
      >
        {t(locale, "comments", "loadMore")}
      </button>
    </section>
  );
}
