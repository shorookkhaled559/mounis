"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { articles, searchArticles } from "@/lib/data/articles";
import { mainNav } from "@/lib/data/navigation";
import { localizedPath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import { track } from "@/lib/analytics/track";
import type { Locale } from "@/types";

export function SearchDialog({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      track("search_open");
      inputRef.current?.focus();
    } else {
      setQuery("");
    }
  }, [open]);

  const results = useMemo(() => {
    const found = searchArticles(query);
    if (query.trim()) track("search_query", { length: query.length });
    const tools = mainNav(locale).filter((item) =>
      item.label.toLowerCase().includes(query.trim().toLowerCase()),
    );
    return { articles: found, tools: query.trim() ? tools : [] };
  }, [query, locale]);

  return (
    <>
      <button
        type="button"
        className="icon-btn"
        aria-label={t(locale, "nav", "search")}
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-5" />
      </button>
      {open ? (
        <div className="search-overlay" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="search-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={inputId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="search-head">
              <SearchIcon className="size-5 text-[var(--muted)]" />
              <input
                ref={inputRef}
                id={inputId}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t(locale, "search", "placeholder")}
                aria-label={t(locale, "search", "title")}
              />
              <button
                type="button"
                className="icon-btn"
                aria-label={t(locale, "nav", "close")}
                onClick={() => setOpen(false)}
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
            <p className="search-hint">{t(locale, "search", "hint")}</p>
            <div className="search-results">
              {!query.trim()
                ? articles.slice(0, 4).map((article) => (
                    <Link
                      key={article.slug}
                      href={localizedPath(locale, `/articles/${article.slug}`)}
                      onClick={() => setOpen(false)}
                    >
                      {article.title[locale]}
                    </Link>
                  ))
                : null}
              {query.trim() &&
              results.articles.length === 0 &&
              results.tools.length === 0 ? (
                <p>{t(locale, "search", "empty")}</p>
              ) : null}
              {results.articles.map((article) => (
                <Link
                  key={article.slug}
                  href={localizedPath(locale, `/articles/${article.slug}`)}
                  onClick={() => setOpen(false)}
                >
                  {article.title[locale]}
                </Link>
              ))}
              {results.tools.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
