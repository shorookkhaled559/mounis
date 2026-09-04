import { ClockIcon } from "@/components/icons";
import { t } from "@/lib/i18n/messages";
import type { Article, Locale } from "@/types";

interface ArticleHeaderProps {
  locale: Locale;
  title: string;
  excerpt: string;
  category: Article["category"];
  readingMinutes: number;
  publishedAt: string;
}

export function ArticleHeader({
  locale,
  title,
  excerpt,
  category,
  readingMinutes,
  publishedAt,
}: ArticleHeaderProps) {
  return (
    <header className="featured-head">
      <p className="section-kicker">{t(locale, "article", "featuredKicker")}</p>
      <h1>{title}</h1>
      <p className="lede">{excerpt}</p>
      <p className="meta-row">
        <span>{t(locale, "categories", category)}</span>
        <span className="meta-dot" />
        <span className="inline-flex items-center gap-1">
          <ClockIcon className="size-4" />
          {readingMinutes} {t(locale, "article", "reading")}
        </span>
        <span className="meta-dot" />
        <time dateTime={publishedAt}>
          {t(locale, "article", "published")}{" "}
          {new Intl.DateTimeFormat(locale === "ar" ? "ar-SA" : "en-GB", {
            dateStyle: "medium",
          }).format(new Date(publishedAt))}
        </time>
      </p>
    </header>
  );
}
