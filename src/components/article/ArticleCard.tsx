import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "@/components/icons";
import { localizedPath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import type { Article, Locale } from "@/types";

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
          <Image
            src={article.image}
            alt={article.imageAlt[locale]}
            width={480}
            height={280}
            sizes="(max-width: 640px) 100vw, 240px"
          />
        </div>
        <div className="article-card-body">
          <p className="meta-row">
            <span>{t(locale, "categories", article.category)}</span>
            <span className="meta-dot" />
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" />
              {article.readingMinutes} {t(locale, "article", "reading")}
            </span>
          </p>
          <h3>{article.title[locale]}</h3>
          <p>{article.excerpt[locale]}</p>
        </div>
      </Link>
    </article>
  );
}
