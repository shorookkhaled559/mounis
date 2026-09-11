import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "@/components/icons";
import { localizedPath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import type { Article, Locale } from "@/types";

<<<<<<< HEAD
export function ArticleCard({ article, locale }: { article: Article; locale: Locale }) {
  return (
    <article className="box-border w-full overflow-hidden rounded-md border border-[var(--line)] bg-[var(--paper)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary-light)] hover:shadow-md">
      <Link
        href={localizedPath(locale, `/articles/${article.slug}`)}
        className="grid h-full no-underline hover:[&_h3]:text-[var(--primary)]"
      >
        <div className="aspect-video overflow-hidden bg-[var(--surface)]">
=======
export function ArticleCard({
  article,
  locale,
}: {
  article: Article;
  locale: Locale;
}) {
  return (
    <article className="article-card">
      <Link
        href={localizedPath(locale, `/articles/${article.slug}`)}
        className="article-card-link"
      >
        <div className="article-card-media">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
          <Image
            src={article.image}
            alt={article.imageAlt[locale]}
            width={480}
            height={280}
            sizes="(max-width: 640px) 100vw, 240px"
<<<<<<< HEAD
            className="block h-full w-full max-w-full object-cover"
          />
        </div>
        <div className="grid gap-[0.4rem] p-[0.85rem_0.95rem_1.05rem]">
          <p className="m-0 flex flex-wrap items-center gap-x-[0.6rem] gap-y-[0.45rem] text-[0.86rem] text-[var(--muted)]">
            <span>{t(locale, "categories", article.category)}</span>
            <span className="inline-block h-[3px] w-[3px] rounded-full bg-[var(--muted)]" />
=======
          />
        </div>
        <div className="article-card-body">
          <p className="meta-row">
            <span>{t(locale, "categories", article.category)}</span>
            <span className="meta-dot" />
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" />
              {article.readingMinutes} {t(locale, "article", "reading")}
            </span>
          </p>
<<<<<<< HEAD
          <h3 className="m-0 text-[1.05rem] leading-[1.5] font-semibold transition-colors duration-200">
            {article.title[locale]}
          </h3>
          <p className="m-0 text-[0.9rem] text-[var(--muted)]">{article.excerpt[locale]}</p>
=======
          <h3>{article.title[locale]}</h3>
          <p>{article.excerpt[locale]}</p>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
        </div>
      </Link>
    </article>
  );
}
