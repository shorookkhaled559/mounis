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
<<<<<<< HEAD
  path: string
=======
  path: string,
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
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
<<<<<<< HEAD
      <div className="mx-auto box-border w-full max-w-[min(calc(100%-1.5rem),42rem)] px-3 rtl:text-right">
=======
      <div className="page-wrap page-narrow">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
        <Breadcrumbs
          locale={locale}
          items={[
            { href: localizedPath(locale, "/"), label: t(locale, "nav", "home") },
            { href: localizedPath(locale, path), label: title },
          ]}
        />
<<<<<<< HEAD
        <main id="main" className="grid gap-[0.85rem] rtl:text-right">
          <h1 className="m-0 text-[1.7rem]">{title}</h1>
          <p className="my-0 mt-[0.65rem] max-w-full break-words text-[var(--muted)]">
            {description}
          </p>
=======
        <main id="main" className="legal-page">
          <h1>{title}</h1>
          <p className="lede">{description}</p>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
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
<<<<<<< HEAD
      <div className="mx-auto box-border w-full max-w-[min(calc(100%-1.5rem),42rem)] px-3 rtl:text-right">
=======
      <div className="page-wrap page-narrow">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
        <Breadcrumbs
          locale={locale}
          items={[
            { href: localizedPath(locale, "/"), label: t(locale, "nav", "home") },
            { href: localizedPath(locale, path), label: title },
          ]}
        />
<<<<<<< HEAD
        <main id="main" className="grid gap-[0.85rem] rtl:text-right">
          <h1 className="m-0 text-[1.7rem]">{title}</h1>
          <p className="my-0 mt-[0.65rem] max-w-full break-words text-[var(--muted)]">
            {description}
          </p>
          <p>{t(locale, "tools", "coming")}</p>
          <p>
            {t(locale, "tools", "explore")}{" "}
            <Link href={localizedPath(locale, "/articles")}>{t(locale, "article", "latest")}</Link>
=======
        <main id="main" className="legal-page">
          <h1>{title}</h1>
          <p className="lede">{description}</p>
          <p>{t(locale, "tools", "coming")}</p>
          <p>
            {t(locale, "tools", "explore")}{" "}
            <Link href={localizedPath(locale, "/articles")}>
              {t(locale, "article", "latest")}
            </Link>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
          </p>
        </main>
      </div>
    </>
  );
}
