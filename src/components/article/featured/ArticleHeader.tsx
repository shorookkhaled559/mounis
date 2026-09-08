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
      <p className="my-0 mb-2 text-[var(--primary)] text-[0.85rem] font-bold tracking-[0.04em] rtl:tracking-[0.04em] ltr:tracking-[0.08em] ltr:uppercase">{t(locale, "article", "featuredKicker")}</p>
      <h1 className="mt-[0.15rem] mb-0 text-[clamp(1.35rem,4vw,2.25rem)] leading-[1.35] font-bold text-[var(--ink)] break-words">{title}</h1>
      <p className="text-[var(--muted)] max-w-full my-0 mt-[0.85rem] break-words">{excerpt}</p>
      <p className="flex flex-wrap items-center gap-x-[0.6rem] gap-y-[0.45rem] text-[var(--muted)] text-[0.86rem] mt-[0.85rem] mb-0">
        <span>{t(locale, "categories", category)}</span>
        <span className="w-[3px] h-[3px] rounded-full bg-[var(--muted)] inline-block" />
        <span className="inline-flex items-center gap-1">
          <ClockIcon className="size-4" />
          {readingMinutes} {t(locale, "article", "reading")}
        </span>
        <span className="w-[3px] h-[3px] rounded-full bg-[var(--muted)] inline-block" />
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
