import { ArticleList } from "@/components/article/ArticleList";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { articles } from "@/lib/data/articles";
import { localizedPath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import { localeMetadata } from "@/lib/seo/metadata";
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
    title: t(loc, "article", "latest"),
    description:
      loc === "ar"
        ? "أرشيف مقالات مؤنس في التدبر والحديث والذاكرة الإسلامية."
        : "The Mounis archive of reflection, hadith, and Islamic memory.",
    path: "/articles",
  });
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <div className="mx-auto box-border w-full max-w-[min(calc(100%-1.5rem),var(--page))] px-3 py-6 pb-12">
      <Breadcrumbs
        locale={loc}
        items={[
          { href: localizedPath(loc, "/"), label: t(loc, "nav", "home") },
          { href: localizedPath(loc, "/articles"), label: t(loc, "article", "latest") },
        ]}
      />
      <main id="main">
        <ArticleList
          locale={loc}
          articles={articles}
          heading={t(loc, "article", "latest")}
          id="latest-articles"
        />
      </main>
    </div>
  );
}
