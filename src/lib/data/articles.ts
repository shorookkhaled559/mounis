import type { Article } from "@/types";
import articlesData from "@/data/articles.json";

export const articles: Article[] = articlesData.articles as Article[];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticle() {
  return articles[0];
}

export function getPreviousArticles(limit = 3) {
  return articles.slice(1, 1 + limit);
}

export function getRelatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug);
  const pool = articles.filter((article) => article.slug !== slug);
  if (!current) return pool.slice(0, limit);
  const same = pool.filter((article) => article.category === current.category);
  const rest = pool.filter((article) => article.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}

export function searchArticles(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return articles.filter((article) => {
    const hay = [
      article.title.ar,
      article.title.en,
      article.excerpt.ar,
      article.excerpt.en,
      article.slug,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}
