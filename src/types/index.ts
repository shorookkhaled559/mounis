export type Locale = "ar" | "en";

export type ArticleCategory = "tadabbur" | "hadith" | "this-day" | "fatwa";

export type QuoteKind = "quran" | "hadith";

export interface LocalizedText {
  ar: string;
  en: string;
}

export interface Article {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText[];
  category: ArticleCategory;
  readingMinutes: number;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  imageAlt: LocalizedText;
  quote?: {
    kind: QuoteKind;
    text: LocalizedText;
    source: LocalizedText;
  };
}

export type AdPlacement =
  "banner-top" | "sidebar" | "in-content" | "between-sections" | "mobile" | "footer";

export interface UnsContent {
  dateIso: string;
  kind: "verse" | "hadith" | "reminder" | "event";
  title: LocalizedText;
  body: LocalizedText;
  source?: LocalizedText;
}

export type AnalyticsEventName =
  | "page_view"
  | "article_view"
  | "search_open"
  | "search_query"
  | "subscribe_submit"
  | "share"
  | "internal_nav";
