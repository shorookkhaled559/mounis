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
    title: t(loc, "nav", "zakat"),
    description:
      loc === "ar"
        ? "حاسبة الزكاة — أداة محاسبية هادئة قيد التجهيز."
        : "Zakat calculator — a calm tool in preparation.",
    path: "/zakat",
  });
}

export default async function ZakatPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  return (
    <ToolPlaceholder
      locale={loc}
      title={t(loc, "nav", "zakat")}
      description={
        loc === "ar"
          ? "الحاسبة ستساعدك على تقدير الزكاة وفق مدخلاتك، مع شرح واضح للأسس لاحقًا."
          : "The calculator will help estimate zakat from your inputs, with clear principles later."
      }
      path="/zakat"
    />
  );
}
