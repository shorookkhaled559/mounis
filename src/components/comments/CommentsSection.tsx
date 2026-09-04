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
    <section className="comments" aria-labelledby="comments-title">
      <div className="section-head">
        <h2 id="comments-title" className="section-title">
          {t(locale, "comments", "title")}
        </h2>
      </div>
      <p className="lede">{t(locale, "comments", "empty")}</p>
      {submitted ? (
        <p className="form-success" role="status">
          {t(locale, "comments", "pending")}
        </p>
      ) : (
        <form className="comment-form" onSubmit={onSubmit}>
          <label>
            {t(locale, "comments", "name")}
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            {t(locale, "comments", "body")}
            <textarea name="body" required rows={3} />
          </label>
          <button type="submit" className="btn-primary">
            {t(locale, "comments", "submit")}
          </button>
        </form>
      )}
      <button type="button" className="load-more" disabled>
        {t(locale, "comments", "loadMore")}
      </button>
    </section>
  );
}
