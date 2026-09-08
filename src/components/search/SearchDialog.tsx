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
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
        // Return focus to trigger button when closing with Escape
        setTimeout(() => triggerButtonRef.current?.focus(), 0);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      track("search_open");
      // Focus input when opening
      setTimeout(() => inputRef.current?.focus(), 0);
      // Prevent body scroll when dialog is open
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => {
    const found = searchArticles(query);
    if (query.trim()) track("search_query", { length: query.length });
    const tools = mainNav(locale).filter((item) =>
      item.label.toLowerCase().includes(query.trim().toLowerCase()),
    );
    return { articles: found, tools: query.trim() ? tools : [] };
  }, [query, locale]);
  
  const handleClose = () => {
    setOpen(false);
    // Return focus to trigger button when closing
    setTimeout(() => triggerButtonRef.current?.focus(), 0);
  };

  return (
    <>
      <button
        ref={triggerButtonRef}
        type="button"
        className="inline-flex items-center justify-center gap-[0.4rem] min-w-[2.35rem] min-h-[2.35rem] p-[0.35rem_0.45rem] border-0 bg-transparent text-white rounded-md cursor-pointer transition-colors duration-200 flex-shrink-0 hover:bg-white/15 hover:text-white md:min-w-[2.65rem] md:min-h-[2.65rem] md:p-[0.4rem_0.55rem]"
        aria-label={t(locale, "nav", "search")}
        aria-expanded={open}
        aria-controls="search-dialog"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-5" />
      </button>
      {open ? (
        <div 
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur grid items-start justify-center pt-[12vh] px-4 pb-8" 
          role="presentation" 
          onClick={handleClose}
          aria-hidden="true"
        >
          <div
            id="search-dialog"
            className="w-full max-w-[36rem] bg-[var(--paper)] border border-[var(--line)] rounded-lg shadow-lg overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby={inputId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-2 py-[0.65rem] px-[0.7rem] border-b border-[var(--line)]">
              <SearchIcon className="size-5 text-[var(--muted)]" aria-hidden="true" />
              <input
                ref={inputRef}
                id={inputId}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t(locale, "search", "placeholder")}
                aria-label={t(locale, "search", "title")}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                className="border-0 bg-transparent w-full"
              />
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex items-center justify-center gap-[0.4rem] min-w-[2.35rem] min-h-[2.35rem] p-[0.35rem_0.45rem] border-0 bg-transparent text-[var(--ink)] rounded-md cursor-pointer transition-colors duration-200 flex-shrink-0 hover:bg-[var(--primary-subtle)] md:min-w-[2.65rem] md:min-h-[2.65rem] md:p-[0.4rem_0.55rem]"
                aria-label={t(locale, "nav", "close")}
                onClick={handleClose}
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
            <p className="m-0 py-[0.55rem] px-[0.9rem] text-[var(--muted)] text-[0.82rem]" role="status" aria-live="polite">
              {t(locale, "search", "hint")}
            </p>
            <div 
              className="grid pt-1 pb-2.5" 
              role="listbox" 
              aria-label={t(locale, "search", "title")}
            >
              {!query.trim()
                ? articles.slice(0, 4).map((article) => (
                    <Link
                      key={article.slug}
                      href={localizedPath(locale, `/articles/${article.slug}`)}
                      onClick={handleClose}
                      className="py-[0.65rem] px-[0.9rem] no-underline hover:bg-[var(--primary-subtle)]"
                      role="option"
                    >
                      {article.title[locale]}
                    </Link>
                  ))
                : null}
              {query.trim() &&
              results.articles.length === 0 &&
              results.tools.length === 0 ? (
                <p className="py-[0.65rem] px-[0.9rem] m-0" role="status">
                  {t(locale, "search", "empty")}
                </p>
              ) : null}
              {results.articles.map((article) => (
                <Link
                  key={article.slug}
                  href={localizedPath(locale, `/articles/${article.slug}`)}
                  onClick={handleClose}
                  className="py-[0.65rem] px-[0.9rem] no-underline hover:bg-[var(--primary-subtle)]"
                  role="option"
                >
                  {article.title[locale]}
                </Link>
              ))}
              {results.tools.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={handleClose} 
                  className="py-[0.65rem] px-[0.9rem] no-underline hover:bg-[var(--primary-subtle)]"
                  role="option"
                >
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
