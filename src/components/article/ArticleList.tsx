import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ArticleCard } from "@/components/article/ArticleCard";
import { localizedPath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import type { Article, Locale } from "@/types";

export function ArticleList({
  locale,
  articles,
  heading,
  viewMoreHref,
  id = "previous-articles",
}: {
  locale: Locale;
  articles: Article[];
  heading: string;
  viewMoreHref?: string;
  id?: string;
}) {
  return (
<<<<<<< HEAD
    <section className="my-8 grid gap-4" aria-labelledby={id}>
      <div className="section-head flex items-baseline justify-between gap-4 rtl:flex-row-reverse">
        <h2 id={id} className="m-0 text-xl font-bold text-[var(--ink)]">
          {heading}
        </h2>
        {viewMoreHref ? (
          <Link
            href={viewMoreHref}
            className="inline-flex items-center gap-[0.3rem] text-[0.9rem] font-medium whitespace-nowrap text-[var(--primary)] no-underline transition-colors duration-200 hover:text-[var(--primary-deep)]"
          >
=======
    <section className="stack-lg" aria-labelledby={id}>
      <div className="section-head">
        <h2 id={id} className="section-title">
          {heading}
        </h2>
        {viewMoreHref ? (
          <Link href={viewMoreHref} className="text-link">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
            {t(locale, "article", "viewMore")}
            <ArrowIcon className="size-4" />
          </Link>
        ) : (
<<<<<<< HEAD
          <Link
            href={localizedPath(locale, "/articles")}
            className="inline-flex items-center gap-[0.3rem] text-[0.9rem] font-medium whitespace-nowrap text-[var(--primary)] no-underline transition-colors duration-200 hover:text-[var(--primary-deep)]"
          >
=======
          <Link href={localizedPath(locale, "/articles")} className="text-link">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
            {t(locale, "article", "viewMore")}
            <ArrowIcon className="size-4" />
          </Link>
        )}
      </div>
<<<<<<< HEAD
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
=======
      <div className="article-grid">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} locale={locale} />
        ))}
      </div>
    </section>
  );
}
