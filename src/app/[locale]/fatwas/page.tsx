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
    title: t(loc, "nav", "fatwas"),
    description:
      loc === "ar"
        ? "الفتاوى والاستشارات في مؤنس ستُعرض لاحقًا بوضوح المصدر والمسؤولية."
        : "Fatwas and counsel on Mounis will later cite sources and responsibility clearly.",
    path: "/fatwas",
  });
}

export default async function FatwasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  return (
    <ToolPlaceholder
      locale={loc}
      title={t(loc, "nav", "fatwas")}
      description={
        loc === "ar"
          ? "لن نعرض إجابات غير منسوبة. هذا القسم ينتظر إطارًا علميًا واضحًا قبل الإطلاق."
          : "We will not publish unattributed answers. This section waits for a clear scholarly frame."
      }
      path="/fatwas"
    />
  );
}
