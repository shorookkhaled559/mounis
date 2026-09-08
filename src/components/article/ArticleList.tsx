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
    <section className="grid gap-4 my-8" aria-labelledby={id}>
      <div className="flex items-baseline justify-between gap-4">
        <h2 id={id} className="m-0 text-xl font-bold text-[var(--ink)]">
          {heading}
        </h2>
        {viewMoreHref ? (
          <Link href={viewMoreHref} className="inline-flex items-center gap-[0.3rem] no-underline text-[var(--primary)] text-[0.9rem] font-medium whitespace-nowrap transition-colors duration-200 hover:text-[var(--primary-deep)]">
            {t(locale, "article", "viewMore")}
            <ArrowIcon className="size-4" />
          </Link>
        ) : (
          <Link href={localizedPath(locale, "/articles")} className="inline-flex items-center gap-[0.3rem] no-underline text-[var(--primary)] text-[0.9rem] font-medium whitespace-nowrap transition-colors duration-200 hover:text-[var(--primary-deep)]">
            {t(locale, "article", "viewMore")}
            <ArrowIcon className="size-4" />
          </Link>
        )}
      </div>
      <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} locale={locale} />
        ))}
      </div>
    </section>
  );
}
