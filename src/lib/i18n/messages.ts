import type { Locale } from "@/types";

// Import all locale JSON files
import commonAr from "@/locales/ar/common.json";
import commonEn from "@/locales/en/common.json";
import articlesAr from "@/locales/ar/articles.json";
import articlesEn from "@/locales/en/articles.json";
import formsAr from "@/locales/ar/forms.json";
import formsEn from "@/locales/en/forms.json";
import toolsAr from "@/locales/ar/tools.json";
import toolsEn from "@/locales/en/tools.json";

// Merge all translations
const messagesAr = {
  ...commonAr,
  ...articlesAr,
  ...formsAr,
  ...toolsAr,
};

const messagesEn = {
  ...commonEn,
  ...articlesEn,
  ...formsEn,
  ...toolsEn,
};

// Helper function to get nested value from object using dot notation
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNestedValue(obj: any, path: string): string {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return path; // Return the key if not found
    }
  }
  return typeof current === "string" ? current : path;
}

// Main translation function with two signatures:
// 1. t(locale, "dotted.key") - new style
// 2. t(locale, "group", "key") - old style (backward compatible)
export function t(locale: Locale, groupOrKey: string, key?: string): string {
  const messages = locale === "ar" ? messagesAr : messagesEn;
  
  // Old style: t(locale, "group", "key")
  if (key !== undefined) {
    return getNestedValue(messages, `${groupOrKey}.${key}`);
  }
  
  // New style: t(locale, "dotted.key")
  return getNestedValue(messages, groupOrKey);
}
