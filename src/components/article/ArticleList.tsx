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
    <section className="stack-lg" aria-labelledby={id}>
      <div className="section-head">
        <h2 id={id} className="section-title">
          {heading}
        </h2>
        {viewMoreHref ? (
          <Link href={viewMoreHref} className="text-link">
            {t(locale, "article", "viewMore")}
            <ArrowIcon className="size-4" />
          </Link>
        ) : (
          <Link href={localizedPath(locale, "/articles")} className="text-link">
            {t(locale, "article", "viewMore")}
            <ArrowIcon className="size-4" />
          </Link>
        )}
      </div>
      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} locale={locale} />
        ))}
      </div>
    </section>
  );
}
