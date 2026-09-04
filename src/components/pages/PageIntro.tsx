import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { localizedPath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { localeMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/types";
import type { Metadata } from "next";

export function pageMeta(
  locale: Locale,
  title: string,
  description: string,
  path: string,
): Metadata {
  return localeMetadata({ locale, title, description, path });
}

export function PageIntro({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: t(locale, "nav", "home"), path: "/" },
          { name: title, path },
        ])}
      />
      <div className="page-wrap page-narrow">
        <Breadcrumbs
          locale={locale}
          items={[
            { href: localizedPath(locale, "/"), label: t(locale, "nav", "home") },
            { href: localizedPath(locale, path), label: title },
          ]}
        />
        <main id="main" className="legal-page">
          <h1>{title}</h1>
          <p className="lede">{description}</p>
        </main>
      </div>
    </>
  );
}

export function ToolPlaceholder({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: t(locale, "nav", "home"), path: "/" },
          { name: title, path },
        ])}
      />
      <div className="page-wrap page-narrow">
        <Breadcrumbs
          locale={locale}
          items={[
            { href: localizedPath(locale, "/"), label: t(locale, "nav", "home") },
            { href: localizedPath(locale, path), label: title },
          ]}
        />
        <main id="main" className="legal-page">
          <h1>{title}</h1>
          <p className="lede">{description}</p>
          <p>{t(locale, "tools", "coming")}</p>
          <p>
            {t(locale, "tools", "explore")}{" "}
            <Link href={localizedPath(locale, "/articles")}>
              {t(locale, "article", "latest")}
            </Link>
          </p>
        </main>
      </div>
    </>
  );
}
