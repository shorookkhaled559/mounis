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
    <article className="bg-[var(--paper)] border border-[var(--line)] rounded-md overflow-hidden transition-all duration-200 w-full box-border hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--primary-light)]">
      <Link
        href={localizedPath(locale, `/articles/${article.slug}`)}
        className="no-underline grid h-full hover:[&_h3]:text-[var(--primary)]"
      >
        <div className="aspect-video bg-[var(--surface)] overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt[locale]}
            width={480}
            height={280}
            sizes="(max-width: 640px) 100vw, 240px"
            className="w-full h-full object-cover block max-w-full"
          />
        </div>
        <div className="p-[0.85rem_0.95rem_1.05rem] grid gap-[0.4rem]">
          <p className="flex flex-wrap items-center gap-x-[0.6rem] gap-y-[0.45rem] text-[var(--muted)] text-[0.86rem] m-0">
            <span>{t(locale, "categories", article.category)}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-[var(--muted)] inline-block" />
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" />
              {article.readingMinutes} {t(locale, "article", "reading")}
            </span>
          </p>
          <h3 className="m-0 text-[1.05rem] font-semibold leading-[1.5] transition-colors duration-200">{article.title[locale]}</h3>
          <p className="m-0 text-[var(--muted)] text-[0.9rem]">{article.excerpt[locale]}</p>
        </div>
      </Link>
    </article>
  );
}
