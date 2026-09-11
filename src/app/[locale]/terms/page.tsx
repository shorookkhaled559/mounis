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
    title: t(loc, "footer", "terms"),
<<<<<<< HEAD
    description: loc === "ar" ? "شروط استخدام موقع مؤنس." : "Terms of use for the Mounis website.",
=======
    description:
      loc === "ar"
        ? "شروط استخدام موقع مؤنس."
        : "Terms of use for the Mounis website.",
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
    path: "/terms",
  });
}

<<<<<<< HEAD
export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
=======
export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
  const { locale } = await params;
  const loc = locale as Locale;
  const title = t(loc, "footer", "terms");

  return (
    <div className="page-wrap page-narrow">
      <Breadcrumbs
        locale={loc}
        items={[
          { href: localizedPath(loc, "/"), label: t(loc, "nav", "home") },
          { href: localizedPath(loc, "/terms"), label: title },
        ]}
      />
      <main id="main" className="legal-page">
        <h1>{title}</h1>
        <p>
          {loc === "ar"
            ? "المحتوى مقدَّم للقراءة والتعلّم. الاستشارات الفقهية الكاملة ليست متاحة بعد، ولا يُعد أي نص هنا فتوى ملزمة حتى يُعلن خلاف ذلك من مصدر مسؤول."
            : "Content is offered for reading and learning. Full legal counsel is not available yet, and no text here is a binding fatwa until a responsible source states otherwise."}
        </p>
      </main>
    </div>
  );
}
