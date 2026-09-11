import { AdSlot } from "@/components/ads/AdSlot";
import { ArticleList } from "@/components/article/ArticleList";
import { FeaturedArticle } from "@/components/article/FeaturedArticle";
import { CommentsSection } from "@/components/comments/CommentsSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SubscribeForm } from "@/components/subscribe/SubscribeForm";
import { getArticle, getRelatedArticles } from "@/lib/data/articles";
import { localizedPath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { localeMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/lib/data/articles";

export function generateStaticParams() {
  return articles.flatMap((article) => [
    { locale: "ar", slug: article.slug },
    { locale: "en", slug: article.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const loc = locale as Locale;

  const imageUrl = article.image
    ? `${process.env.NEXT_PUBLIC_SITE_URL || "https://mounis.app"}${article.image}`
    : undefined;

  return localeMetadata({
    locale: loc,
    title: article.title[loc],
    description: article.excerpt[loc],
    path: `/articles/${article.slug}`,
    type: "article",
    ...(imageUrl && { image: imageUrl }),
    imageAlt: article.imageAlt?.[loc],
    publishedTime: article.publishedAt,
    section: t(loc, "categories", article.category),
    tags: [article.category, t(loc, "categories", article.category), siteConfig.name[loc]],
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = getRelatedArticles(slug);

  return (
    <div className="mx-auto box-border w-full max-w-[min(calc(100%-1.5rem),var(--page))] px-3 py-6 pb-12">
      <JsonLd data={articleJsonLd(article, loc)} />
      <JsonLd
        data={breadcrumbJsonLd(loc, [
          { name: t(loc, "nav", "home"), path: "/" },
          { name: t(loc, "article", "latest"), path: "/articles" },
          { name: article.title[loc], path: `/articles/${article.slug}` },
        ])}
      />
      <Breadcrumbs
        locale={loc}
        items={[
          { href: localizedPath(loc, "/"), label: t(loc, "nav", "home") },
          { href: localizedPath(loc, "/articles"), label: t(loc, "article", "latest") },
          {
            href: localizedPath(loc, `/articles/${article.slug}`),
            label: article.title[loc],
          },
        ]}
      />
      <main id="main">
        <FeaturedArticle article={article} locale={loc} />
        <AdSlot placement="between-sections" locale={loc} />
        <ArticleList
          locale={loc}
          articles={related}
          heading={t(loc, "article", "related")}
          id="related-articles"
        />
        <CommentsSection locale={loc} />
        <SubscribeForm locale={loc} />
      </main>
    </div>
  );
}
