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
            />
          </div>
          <button type="submit" className="btn-primary">
            {t(locale, "subscribe", "submit")}
          </button>
          {status === "error" ? (
            <p id="email-error" className="form-error" role="alert">
              {t(locale, "subscribe", "error")}
            </p>
          ) : null}
        </form>
      )}
    </section>
  );
}
