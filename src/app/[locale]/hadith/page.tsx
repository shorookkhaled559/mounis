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
    title: t(loc, "nav", "hadith"),
    description:
      loc === "ar"
        ? "الأحاديث في مؤنس: قراءات قصيرة وموثوقة المصدر."
        : "Hadith on Mounis: short readings with cited sources.",
    path: "/hadith",
  });
}

export default async function HadithPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const hadithArticles = articles.filter((article) => article.category === "hadith");

  return (
    <div className="page-wrap">
      <Breadcrumbs
        locale={loc}
        items={[
          { href: localizedPath(loc, "/"), label: t(loc, "nav", "home") },
          { href: localizedPath(loc, "/hadith"), label: t(loc, "nav", "hadith") },
        ]}
      />
      <main id="main">
        <h1 className="page-h1">{t(loc, "nav", "hadith")}</h1>
        <p className="lede">
          {loc === "ar"
            ? "نبدأ بمقالات حديثية قصيرة. الأرشيف الكامل سيُبنى على متون موثّقة."
            : "We begin with short hadith essays. A fuller archive will be built on cited collections."}
        </p>
        <ArticleList
          locale={loc}
          articles={hadithArticles.length ? hadithArticles : articles.slice(0, 2)}
          heading={t(loc, "article", "latest")}
          id="hadith-list"
        />
      </main>
    </div>
  );
}
