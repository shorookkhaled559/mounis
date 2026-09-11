import type { Locale } from "@/types";

interface ArticleBodyProps {
  locale: Locale;
  paragraphs: Array<{ ar: string; en: string }>;
}

export function ArticleBody({ locale, paragraphs }: ArticleBodyProps) {
  return (
<<<<<<< HEAD
    <div className="w-full text-base leading-[1.9] font-[var(--font-body-ar),var(--font-ui-en),serif] break-words md:text-lg md:leading-[2.05] [html[lang='en']_&]:leading-[1.7] [html[lang='en']_&]:font-[var(--font-ui-en),serif] [html[lang='en']_&]:md:leading-[1.8]">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.ar} className="m-0 mb-[1.15rem]">
          {paragraph[locale]}
        </p>
=======
    <div className="prose-article">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.ar}>{paragraph[locale]}</p>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
      ))}
    </div>
  );
}
