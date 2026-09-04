"use client";

import { useState } from "react";
import {
  BookmarkIcon,
  LinkIcon,
  PrintIcon,
  ShareIcon,
} from "@/components/icons";
import { track } from "@/lib/analytics/track";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

export function ShareActions({
  locale,
  title,
  url,
}: {
  locale: Locale;
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      track("share", { method: "copy" });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function share() {
    track("share", { method: "native" });
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }
    await copyLink();
  }

  return (
    <div className="share-bar" role="group" aria-label={t(locale, "article", "share")}>
      <button type="button" className="icon-btn" onClick={share}>
        <ShareIcon className="size-5" />
        <span>{t(locale, "article", "share")}</span>
      </button>
      <button type="button" className="icon-btn" onClick={copyLink}>
        <LinkIcon className="size-5" />
        <span>{copied ? t(locale, "article", "copied") : t(locale, "article", "copy")}</span>
      </button>
      <button
        type="button"
        className="icon-btn"
        onClick={() => {
          track("share", { method: "bookmark-intent" });
        }}
      >
        <BookmarkIcon className="size-5" />
        <span>{t(locale, "article", "bookmark")}</span>
      </button>
      <button type="button" className="icon-btn" onClick={() => window.print()}>
        <PrintIcon className="size-5" />
        <span>{t(locale, "article", "print")}</span>
      </button>
    </div>
  );
}
