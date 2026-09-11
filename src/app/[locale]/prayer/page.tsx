import { ToolPlaceholder } from "@/components/pages/PageIntro";
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
    title: t(loc, "nav", "prayer"),
    description:
      loc === "ar"
        ? "مواقيت الصلاة واتجاه القبلة — أداة قيد التجهيز في مؤنس."
        : "Prayer times and Qibla — a Mounis tool in preparation.",
    path: "/prayer",
  });
}

<<<<<<< HEAD
export default async function PrayerPage({ params }: { params: Promise<{ locale: string }> }) {
=======
export default async function PrayerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
  const { locale } = await params;
  const loc = locale as Locale;
  return (
    <ToolPlaceholder
      locale={loc}
      title={t(loc, "nav", "prayer")}
      description={
        loc === "ar"
          ? "ستظهر هنا مواقيت دقيقة واتجاه القبلة حسب موقعك، دون إثقال الصفحة الآن."
          : "Accurate prayer times and Qibla by location will live here without overloading the site today."
      }
      path="/prayer"
    />
  );
}
