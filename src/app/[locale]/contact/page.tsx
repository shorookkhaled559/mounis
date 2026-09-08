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
    title: t(loc, "footer", "contact"),
    description:
      loc === "ar" ? "تواصل مع فريق مؤنس." : "Contact the Mounis team.",
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const title = t(loc, "footer", "contact");

  return (
    <div className="page-wrap page-narrow">
      <Breadcrumbs
        locale={loc}
        items={[
          { href: localizedPath(loc, "/"), label: t(loc, "nav", "home") },
          { href: localizedPath(loc, "/contact"), label: title },
        ]}
      />
      <main id="main" className="legal-page">
        <h1>{title}</h1>
        <p className="lede">
          {loc === "ar"
            ? "للشراكات الإعلانية، أو التصحيح العلمي، أو ملاحظات المنتج:"
            : "For advertising partnerships, scholarly corrections, or product notes:"}
        </p>
        <p>
          <a href="mailto:hello@mounis.app">hello@mounis.app</a>
        </p>
        <p className="muted">
          {loc === "ar"
            ? "هذا البريد واجهة جاهزة. صندوق الاستقبال سيُربط لاحقًا."
            : "This address is the intended mailbox. Delivery will be connected later."}
        </p>
      </main>
    </div>
  );
}
