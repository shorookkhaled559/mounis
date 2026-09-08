import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { localizedPath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { localeMetadata } from "@/lib/seo/metadata";
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
    title: t(loc, "nav", "about"),
    description: siteConfig.description[loc],
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const title = t(loc, "nav", "about");

  return (
    <div className="page-wrap page-narrow">
      <JsonLd
        data={breadcrumbJsonLd(loc, [
          { name: t(loc, "nav", "home"), path: "/" },
          { name: title, path: "/about" },
        ])}
      />
      <Breadcrumbs
        locale={loc}
        items={[
          { href: localizedPath(loc, "/"), label: t(loc, "nav", "home") },
          { href: localizedPath(loc, "/about"), label: title },
        ]}
      />
      <main id="main" className="legal-page">
        <h1>{title}</h1>
        <p className="lede">{siteConfig.tagline[loc]}</p>
        {loc === "ar" ? (
          <>
            <p>
              مؤنس منصة عربية أولى، صُممت لتكون رفيقًا يوميًا لا واجهة دعائية. نكتب في التدبر،
              ونجهّز أدوات عملية مثل مواقيت الصلاة وحاسبة الزكاة، ونبني أرشيفًا يمكن الرجوع إليه.
            </p>
            <p>
              الاسم نفسه يحدد العلاقة: المؤانسة لا الصخب. لذلك نتجنب المبالغة البصرية، ونمنح النص
              مساحته، ونضع الإعلان في مواضع واضحة لا تختلط بالمحتوى.
            </p>
          </>
        ) : (
          <>
            <p>
              Mounis is Arabic-first by design: a daily companion rather than a campaign page. We
              write reflection, prepare practical tools such as prayer times and zakat, and build
              an archive worth returning to.
            </p>
            <p>
              The name sets the relationship: companionship, not noise. That is why the visual
              language stays quiet, the text keeps its width, and advertising remains clearly
              marked.
            </p>
          </>
        )}
      </main>
    </div>
  );
}
