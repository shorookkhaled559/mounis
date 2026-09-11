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
<<<<<<< HEAD
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
=======
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
<<<<<<< HEAD
      if (event.key === "Escape") {
        setOpen(false);
        // Return focus to trigger button when closing with Escape
        setTimeout(() => triggerButtonRef.current?.focus(), 0);
      }
=======
      if (event.key === "Escape") setOpen(false);
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      track("search_open");
<<<<<<< HEAD
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
=======
      inputRef.current?.focus();
    } else {
      setQuery("");
    }
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
  }, [open]);

  const results = useMemo(() => {
    const found = searchArticles(query);
    if (query.trim()) track("search_query", { length: query.length });
    const tools = mainNav(locale).filter((item) =>
<<<<<<< HEAD
      item.label.toLowerCase().includes(query.trim().toLowerCase())
=======
      item.label.toLowerCase().includes(query.trim().toLowerCase()),
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
    );
    return { articles: found, tools: query.trim() ? tools : [] };
  }, [query, locale]);

<<<<<<< HEAD
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
        className="inline-flex min-h-[2.35rem] min-w-[2.35rem] flex-shrink-0 cursor-pointer items-center justify-center gap-[0.4rem] rounded-md border-0 bg-transparent p-[0.35rem_0.45rem] text-white transition-colors duration-200 hover:bg-white/15 hover:text-white md:min-h-[2.65rem] md:min-w-[2.65rem] md:p-[0.4rem_0.55rem]"
        aria-label={t(locale, "nav", "search")}
        aria-expanded={open}
        aria-controls="search-dialog"
=======
  return (
    <>
      <button
        type="button"
        className="icon-btn"
        aria-label={t(locale, "nav", "search")}
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-5" />
      </button>
      {open ? (
<<<<<<< HEAD
        <div
          className="fixed inset-0 z-[60] grid items-start justify-center bg-black/50 px-4 pt-[12vh] pb-8 backdrop-blur"
          role="presentation"
          onClick={handleClose}
          aria-hidden="true"
        >
          <div
            id="search-dialog"
            className="w-full max-w-[36rem] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--paper)] shadow-lg"
=======
        <div className="search-overlay" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="search-panel"
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
            role="dialog"
            aria-modal="true"
            aria-labelledby={inputId}
            onClick={(event) => event.stopPropagation()}
          >
<<<<<<< HEAD
            <div className="flex items-center gap-2 border-b border-[var(--line)] px-[0.7rem] py-[0.65rem]">
              <SearchIcon className="size-5 text-[var(--muted)]" aria-hidden="true" />
              <input
                ref={inputRef}
                id={inputId}
                type="search"
=======
            <div className="search-head">
              <SearchIcon className="size-5 text-[var(--muted)]" />
              <input
                ref={inputRef}
                id={inputId}
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t(locale, "search", "placeholder")}
                aria-label={t(locale, "search", "title")}
<<<<<<< HEAD
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                className="w-full border-0 bg-transparent"
              />
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex min-h-[2.35rem] min-w-[2.35rem] flex-shrink-0 cursor-pointer items-center justify-center gap-[0.4rem] rounded-md border-0 bg-transparent p-[0.35rem_0.45rem] text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--primary-subtle)] md:min-h-[2.65rem] md:min-w-[2.65rem] md:p-[0.4rem_0.55rem]"
                aria-label={t(locale, "nav", "close")}
                onClick={handleClose}
=======
              />
              <button
                type="button"
                className="icon-btn"
                aria-label={t(locale, "nav", "close")}
                onClick={() => setOpen(false)}
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
<<<<<<< HEAD
            <p
              className="m-0 px-[0.9rem] py-[0.55rem] text-[0.82rem] text-[var(--muted)]"
              role="status"
              aria-live="polite"
            >
              {t(locale, "search", "hint")}
            </p>
            <div
              className="grid pt-1 pb-2.5"
              role="listbox"
              aria-label={t(locale, "search", "title")}
            >
=======
            <p className="search-hint">{t(locale, "search", "hint")}</p>
            <div className="search-results">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
              {!query.trim()
                ? articles.slice(0, 4).map((article) => (
                    <Link
                      key={article.slug}
                      href={localizedPath(locale, `/articles/${article.slug}`)}
<<<<<<< HEAD
                      onClick={handleClose}
                      className="px-[0.9rem] py-[0.65rem] no-underline hover:bg-[var(--primary-subtle)]"
                      role="option"
=======
                      onClick={() => setOpen(false)}
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
                    >
                      {article.title[locale]}
                    </Link>
                  ))
                : null}
<<<<<<< HEAD
              {query.trim() && results.articles.length === 0 && results.tools.length === 0 ? (
                <p className="m-0 px-[0.9rem] py-[0.65rem]" role="status">
                  {t(locale, "search", "empty")}
                </p>
=======
              {query.trim() &&
              results.articles.length === 0 &&
              results.tools.length === 0 ? (
                <p>{t(locale, "search", "empty")}</p>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
              ) : null}
              {results.articles.map((article) => (
                <Link
                  key={article.slug}
                  href={localizedPath(locale, `/articles/${article.slug}`)}
<<<<<<< HEAD
                  onClick={handleClose}
                  className="px-[0.9rem] py-[0.65rem] no-underline hover:bg-[var(--primary-subtle)]"
                  role="option"
=======
                  onClick={() => setOpen(false)}
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
                >
                  {article.title[locale]}
                </Link>
              ))}
              {results.tools.map((item) => (
<<<<<<< HEAD
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleClose}
                  className="px-[0.9rem] py-[0.65rem] no-underline hover:bg-[var(--primary-subtle)]"
                  role="option"
                >
=======
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
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
