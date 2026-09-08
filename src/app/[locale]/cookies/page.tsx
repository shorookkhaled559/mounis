import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
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
    title: t(loc, "footer", "cookies"),
    description:
      loc === "ar"
        ? "ملفات الارتباط في مؤنس: تفضيل المظهر، والإعلانات مستقبلًا."
        : "Cookies on Mounis: appearance preference, and advertising later.",
    path: "/cookies",
  });
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const title = t(loc, "footer", "cookies");

  return (
    <div className="page-wrap page-narrow">
      <Breadcrumbs
        locale={loc}
        items={[
          { href: localizedPath(loc, "/"), label: t(loc, "nav", "home") },
          { href: localizedPath(loc, "/cookies"), label: title },
        ]}
      />
      <main id="main" className="legal-page">
        <h1>{title}</h1>
        <p>
          {loc === "ar"
            ? "نستخدم تخزينًا محليًا لحفظ اختيار الوضع الفاتح أو الداكن. لا نضع حاليًا ملفات ارتباط إعلانية. عند تفعيل الشبكات الإعلانية سنطلب الموافقة حيث يلزم القانون ذلك."
            : "We use local storage to remember light or dark appearance. We do not set advertising cookies yet. When ad networks are enabled, consent will be requested where the law requires it."}
        </p>
      </main>
    </div>
  );
}
