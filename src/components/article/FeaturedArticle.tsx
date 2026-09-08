import { ArticleHeader, ArticleVisual, ArticleBody } from "./featured";
import { QuoteBlock } from "./QuoteBlock";
import { ShareActions } from "./ShareActions";
import { siteConfig } from "@/lib/site";
import type { Article, Locale } from "@/types";

interface FeaturedArticleProps {
  article: Article;
  locale: Locale;
}

export function FeaturedArticle({ article, locale }: FeaturedArticleProps) {
  const url = `${siteConfig.url}/${locale}/articles/${article.slug}`;

  return (
    <article className="max-w-[var(--reading)] w-full box-border">
      <ArticleHeader
        locale={locale}
        title={article.title[locale]}
        excerpt={article.excerpt[locale]}
        category={article.category}
        readingMinutes={article.readingMinutes}
        publishedAt={article.publishedAt}
      />
      <ArticleVisual src={article.image} alt={article.imageAlt[locale]} />
      <ArticleBody locale={locale} paragraphs={article.body} />
      {article.quote ? <QuoteBlock quote={article.quote} locale={locale} /> : null}
      <ShareActions locale={locale} title={article.title[locale]} url={url} />
    </article>
  );
}
