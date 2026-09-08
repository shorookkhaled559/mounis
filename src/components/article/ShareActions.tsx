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
    <div className="flex flex-wrap gap-[0.35rem] my-2 mx-0 mb-8 pt-3 border-t border-[var(--line)]" role="group" aria-label={t(locale, "article", "share")}>
      <button 
        type="button" 
        className="inline-flex items-center justify-center gap-[0.4rem] border border-[var(--line)] min-h-[2.75rem] px-3 bg-[var(--paper)] text-[var(--ink)] rounded-md cursor-pointer transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary-subtle)]" 
        onClick={share}
        aria-label={`${t(locale, "article", "share")} - ${title}`}
      >
        <ShareIcon className="size-5" aria-hidden="true" />
        <span>{t(locale, "article", "share")}</span>
      </button>
      <button 
        type="button" 
        className="inline-flex items-center justify-center gap-[0.4rem] border border-[var(--line)] min-h-[2.75rem] px-3 bg-[var(--paper)] text-[var(--ink)] rounded-md cursor-pointer transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary-subtle)]" 
        onClick={copyLink}
        aria-label={copied ? t(locale, "article", "copied") : t(locale, "article", "copy")}
        aria-live="polite"
      >
        <LinkIcon className="size-5" aria-hidden="true" />
        <span>{copied ? t(locale, "article", "copied") : t(locale, "article", "copy")}</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-[0.4rem] border border-[var(--line)] min-h-[2.75rem] px-3 bg-[var(--paper)] text-[var(--ink)] rounded-md cursor-pointer transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary-subtle)]"
        onClick={() => {
          track("share", { method: "bookmark-intent" });
        }}
        aria-label={`${t(locale, "article", "bookmark")} - ${title}`}
      >
        <BookmarkIcon className="size-5" aria-hidden="true" />
        <span>{t(locale, "article", "bookmark")}</span>
      </button>
      <button 
        type="button" 
        className="inline-flex items-center justify-center gap-[0.4rem] border border-[var(--line)] min-h-[2.75rem] px-3 bg-[var(--paper)] text-[var(--ink)] rounded-md cursor-pointer transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary-subtle)]" 
        onClick={() => window.print()}
        aria-label={`${t(locale, "article", "print")} - ${title}`}
      >
        <PrintIcon className="size-5" aria-hidden="true" />
        <span>{t(locale, "article", "print")}</span>
      </button>
    </div>
  );
}
