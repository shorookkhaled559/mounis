import { AdSlot } from "@/components/ads/AdSlot";
import { FeaturedArticle } from "@/components/article/FeaturedArticle";
import { ArticleList } from "@/components/article/ArticleList";
import { CommentsSection } from "@/components/comments/CommentsSection";
import { HomeHero } from "@/components/home/HomeHero";
import { Sidebar } from "@/components/layout/Sidebar";
import { AppAnnouncement } from "@/components/promo/AppAnnouncement";
import { JsonLd } from "@/components/seo/JsonLd";
import { SubscribeForm } from "@/components/subscribe/SubscribeForm";
import { getFeaturedArticle, getPreviousArticles } from "@/lib/data/articles";
import { t } from "@/lib/i18n/messages";
import { localeMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonld";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  return localeMetadata({
    locale: loc,
    title: `${siteConfig.name[loc]} — ${siteConfig.tagline[loc]}`,
    description: siteConfig.description[loc],
  });
}

<<<<<<< HEAD
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
=======
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
  const { locale } = await params;
  const loc = locale as Locale;
  const featured = getFeaturedArticle();
  const previous = getPreviousArticles(3);

<<<<<<< HEAD
  if (!featured) {
    throw new Error("No featured article found");
  }

=======
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
  return (
    <>
      <JsonLd data={organizationJsonLd(loc)} />
      <JsonLd data={websiteJsonLd(loc)} />
<<<<<<< HEAD
      <div className="mx-auto box-border w-full max-w-[min(calc(100%-1.5rem),var(--page))] px-3 py-6 pb-12">
        <HomeHero locale={loc} />
        <div className="box-border grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_var(--sidebar-w)] lg:items-start">
          <main id="main">
            <FeaturedArticle article={featured} locale={loc} />
            <AdSlot placement="in-content" locale={loc} />
            <ArticleList locale={loc} articles={previous} heading={t(loc, "article", "previous")} />
=======
      <div className="page-wrap">
        <HomeHero locale={loc} />
        <div className="content-with-sidebar">
          <main id="main">
            <FeaturedArticle article={featured} locale={loc} />
            <AdSlot placement="in-content" locale={loc} />
            <ArticleList
              locale={loc}
              articles={previous}
              heading={t(loc, "article", "previous")}
            />
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
            <CommentsSection locale={loc} />
          </main>
          <Sidebar locale={loc} />
        </div>
        <AppAnnouncement locale={loc} />
        <SubscribeForm locale={loc} />
        <AdSlot placement="footer" locale={loc} className="banner-desktop" />
      </div>
    </>
  );
}
