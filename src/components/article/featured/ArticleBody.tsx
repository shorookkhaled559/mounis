import type { Locale } from "@/types";

interface ArticleBodyProps {
  locale: Locale;
  paragraphs: Array<{ ar: string; en: string }>;
}

export function ArticleBody({ locale, paragraphs }: ArticleBodyProps) {
  return (
    <div className="prose-article">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.ar}>{paragraph[locale]}</p>
      ))}
    </div>
  );
}
