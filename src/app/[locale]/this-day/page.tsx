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
    title: t(loc, "nav", "thisDay"),
    description:
      loc === "ar"
        ? "في مثل هذا اليوم: ذاكرة إسلامية للمعنى لا للتقويم فقط."
        : "On this day: Islamic memory for meaning, not only the calendar.",
    path: "/this-day",
  });
}

export default async function ThisDayPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const list = articles.filter((article) => article.category === "this-day");

  return (
    <div className="page-wrap">
      <Breadcrumbs
        locale={loc}
        items={[
          { href: localizedPath(loc, "/"), label: t(loc, "nav", "home") },
          { href: localizedPath(loc, "/this-day"), label: t(loc, "nav", "thisDay") },
        ]}
      />
      <main id="main">
        <h1 className="page-h1">{t(loc, "nav", "thisDay")}</h1>
        <p className="lede">
          {loc === "ar"
            ? "نتوقف عند الأيام التي تستحق تذكّر معناها، لا مجرد ذكر تاريخها."
            : "We pause on days whose meaning deserves remembering, not only their date."}
        </p>
        <ArticleList
          locale={loc}
          articles={list.length ? list : articles.slice(0, 2)}
          heading={t(loc, "article", "latest")}
          id="this-day-list"
        />
      </main>
    </div>
  );
}
