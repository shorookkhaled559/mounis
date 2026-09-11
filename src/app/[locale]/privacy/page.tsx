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
    title: t(loc, "footer", "privacy"),
    description:
      loc === "ar"
        ? "سياسة خصوصية مؤنس: ما نجمعه، ولماذا، وكيف نعامل الإعلانات والاشتراك."
        : "Mounis privacy policy: what we collect, why, and how ads and email are handled.",
    path: "/privacy",
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const title = t(loc, "footer", "privacy");

  return (
    <div className="page-wrap page-narrow">
      <Breadcrumbs
        locale={loc}
        items={[
          { href: localizedPath(loc, "/"), label: t(loc, "nav", "home") },
          { href: localizedPath(loc, "/privacy"), label: title },
        ]}
      />
      <main id="main" className="legal-page">
        <h1>{title}</h1>
        {loc === "ar" ? (
          <>
            <p>
              مؤنس منصة محتوى. في هذه المرحلة لا ننشئ حسابات مستخدمين ولا نخزّن تعليقات عامة. عند
              تفعيل الاشتراك بالبريد أو شبكات الإعلان، سنحدّث هذه الصفحة قبل الجمع الفعلي للبيانات.
            </p>
            <h2>ما قد يُجمع لاحقًا</h2>
            <p>البريد الإلكتروني عند الاشتراك، وبيانات تقنية لازمة لعرض الإعلانات وقياس الأداء.</p>
            <h2>الإعلانات</h2>
            <p>
              المساحات الإعلانية محجوزة الآن كعناصر تطوير. عند الربط بـ Google AdSense أو Google Ad
              Manager ستعمل تلك الشبكات وفق سياساتها، وسنميّز الإعلان عن محتوى مؤنس دائمًا.
            </p>
          </>
        ) : (
          <>
            <p>
              Mounis is a content platform. At this stage we do not create user accounts or store
              public comments. When email subscription or ad networks go live, this page will be
              updated before any actual collection.
            </p>
            <h2>What may be collected later</h2>
            <p>
              Email on subscribe, and technical data needed to serve ads and measure performance.
            </p>
            <h2>Advertising</h2>
            <p>
              Ad slots are reserved development placeholders. When Google AdSense or Google Ad
              Manager is connected, those networks will operate under their policies. Ads will
              remain visually distinct from Mounis content.
            </p>
          </>
        )}
      </main>
    </div>
  );
}
