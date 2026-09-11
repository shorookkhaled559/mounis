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
    <header>
      <p className="my-0 mb-2 text-[0.85rem] font-bold tracking-[0.04em] text-[var(--primary)] ltr:tracking-[0.08em] ltr:uppercase rtl:tracking-[0.04em]">
        {t(locale, "article", "featuredKicker")}
      </p>
      <h1 className="mt-[0.15rem] mb-0 text-[clamp(1.35rem,4vw,2.25rem)] leading-[1.35] font-bold break-words text-[var(--ink)]">
        {title}
      </h1>
      <p className="my-0 mt-[0.85rem] max-w-full break-words text-[var(--muted)]">{excerpt}</p>
      <p className="mt-[0.85rem] mb-0 flex flex-wrap items-center gap-x-[0.6rem] gap-y-[0.45rem] text-[0.86rem] text-[var(--muted)]">
        <span>{t(locale, "categories", category)}</span>
        <span className="inline-block h-[3px] w-[3px] rounded-full bg-[var(--muted)]" />
        <span className="inline-flex items-center gap-1">
          <ClockIcon className="size-4" />
          {readingMinutes} {t(locale, "article", "reading")}
        </span>
        <span className="inline-block h-[3px] w-[3px] rounded-full bg-[var(--muted)]" />
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
