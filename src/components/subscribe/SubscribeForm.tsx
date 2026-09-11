"use client";

import { FormEvent, useState } from "react";
import { MailIcon } from "@/components/icons";
import { track } from "@/lib/analytics/track";
import { t } from "@/lib/i18n/messages";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SubscribeForm({ locale }: { locale: Locale }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!emailPattern.test(email.trim())) {
      setStatus("error");
      return;
    }
    track("subscribe_submit");
    setStatus("success");
  }

  return (
<<<<<<< HEAD
    <section
      className="bg-gradient-to-[135deg] mt-8 box-border grid w-full items-center gap-[0.85rem] rounded-lg border border-[var(--line)] from-[var(--paper)] to-[var(--surface)] p-[1.15rem_1rem] shadow-sm md:grid-cols-[1.2fr_1fr] md:p-[1.35rem_1.4rem] rtl:text-right"
      aria-labelledby="subscribe-title"
    >
      <div>
        <p className="my-0 mb-2 text-[0.85rem] font-bold tracking-[0.04em] text-[var(--primary)] ltr:tracking-[0.08em] ltr:uppercase rtl:tracking-[0.04em]">
          {siteConfig.name[locale]}
        </p>
        <h2 id="subscribe-title" className="m-0 text-xl font-bold text-[var(--ink)]">
          {t(locale, "subscribe", "title")}
        </h2>
        <p className="my-0 mt-[0.35rem] max-w-full break-words text-[var(--muted)]">
          {t(locale, "subscribe", "body")}
        </p>
      </div>
      {status === "success" ? (
        <p
          className="m-0 text-[var(--success)]"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {t(locale, "subscribe", "success")}
        </p>
      ) : (
        <form
          className="grid items-start gap-[0.85rem]"
          onSubmit={onSubmit}
          noValidate
          aria-label={t(locale, "subscribe", "title")}
        >
          <label className="sr-only" htmlFor="mounis-email">
            {t(locale, "subscribe", "placeholder")}
          </label>
          <div className="flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--cream)] px-[0.7rem] rtl:flex-row-reverse">
            <MailIcon className="size-5 text-[var(--muted)]" aria-hidden="true" />
=======
    <section className="subscribe" aria-labelledby="subscribe-title">
      <div>
        <p className="section-kicker">{siteConfig.name[locale]}</p>
        <h2 id="subscribe-title" className="section-title">
          {t(locale, "subscribe", "title")}
        </h2>
        <p className="lede">{t(locale, "subscribe", "body")}</p>
      </div>
      {status === "success" ? (
        <p className="form-success" role="status">
          {t(locale, "subscribe", "success")}
        </p>
      ) : (
        <form className="subscribe-form" onSubmit={onSubmit} noValidate>
          <label className="sr-only" htmlFor="mounis-email">
            {t(locale, "subscribe", "placeholder")}
          </label>
          <div className="subscribe-field">
            <MailIcon className="size-5 text-[var(--muted)]" />
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
            <input
              id="mounis-email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder={t(locale, "subscribe", "placeholder")}
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "email-error" : undefined}
<<<<<<< HEAD
              aria-required="true"
              className="w-full max-w-full border-0 bg-transparent px-0"
            />
          </div>
          <button
            type="submit"
            className="min-h-[2.85rem] cursor-pointer justify-self-start rounded-md border-0 bg-[var(--primary)] px-[1.35rem] py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-[var(--primary-deep)] hover:shadow-md dark:text-[var(--ink)] rtl:justify-self-end"
          >
            {t(locale, "subscribe", "submit")}
          </button>
          {status === "error" ? (
            <p
              id="email-error"
              className="m-0 text-[0.88rem] text-[var(--danger)]"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
=======
            />
          </div>
          <button type="submit" className="btn-primary">
            {t(locale, "subscribe", "submit")}
          </button>
          {status === "error" ? (
            <p id="email-error" className="form-error" role="alert">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
              {t(locale, "subscribe", "error")}
            </p>
          ) : null}
        </form>
      )}
    </section>
  );
}
