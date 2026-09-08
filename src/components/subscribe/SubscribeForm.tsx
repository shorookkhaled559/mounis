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
    <section className="mt-8 p-[1.15rem_1rem] border border-[var(--line)] bg-gradient-to-[135deg] from-[var(--paper)] to-[var(--surface)] rounded-lg shadow-sm grid gap-[0.85rem] w-full box-border items-center md:grid-cols-[1.2fr_1fr] md:p-[1.35rem_1.4rem]" aria-labelledby="subscribe-title">
      <div>
        <p className="my-0 mb-2 text-[var(--primary)] text-[0.85rem] font-bold tracking-[0.04em] rtl:tracking-[0.04em] ltr:tracking-[0.08em] ltr:uppercase">{siteConfig.name[locale]}</p>
        <h2 id="subscribe-title" className="m-0 text-xl font-bold text-[var(--ink)]">
          {t(locale, "subscribe", "title")}
        </h2>
        <p className="text-[var(--muted)] max-w-full my-0 mt-[0.35rem] break-words">{t(locale, "subscribe", "body")}</p>
      </div>
      {status === "success" ? (
        <p className="text-[var(--success)] m-0" role="status" aria-live="polite" aria-atomic="true">
          {t(locale, "subscribe", "success")}
        </p>
      ) : (
        <form className="grid gap-[0.85rem] items-start" onSubmit={onSubmit} noValidate aria-label={t(locale, "subscribe", "title")}>
          <label className="sr-only" htmlFor="mounis-email">
            {t(locale, "subscribe", "placeholder")}
          </label>
          <div className="flex items-center gap-2 border border-[var(--line)] bg-[var(--cream)] px-[0.7rem] rounded-md">
            <MailIcon className="size-5 text-[var(--muted)]" aria-hidden="true" />
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
              aria-required="true"
              className="border-0 bg-transparent px-0 w-full max-w-full"
            />
          </div>
          <button type="submit" className="justify-self-start border-0 bg-[var(--primary)] text-white py-3 px-[1.35rem] min-h-[2.85rem] rounded-md font-semibold cursor-pointer transition-all duration-200 shadow-sm hover:bg-[var(--primary-deep)] hover:shadow-md hover:-translate-y-px dark:text-[var(--ink)]">
            {t(locale, "subscribe", "submit")}
          </button>
          {status === "error" ? (
            <p id="email-error" className="text-[var(--danger)] m-0 text-[0.88rem]" role="alert" aria-live="assertive" aria-atomic="true">
              {t(locale, "subscribe", "error")}
            </p>
          ) : null}
        </form>
      )}
    </section>
  );
}
