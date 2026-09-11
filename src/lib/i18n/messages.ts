import type { Locale } from "@/types";

<<<<<<< HEAD
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
=======
export const messages = {
  nav: {
    home: { ar: "الرئيسية", en: "Home" },
    prayer: { ar: "مواقيت الصلاة واتجاه القبلة", en: "Prayer times & Qibla" },
    zakat: { ar: "حاسبة الزكاة", en: "Zakat calculator" },
    hadith: { ar: "الأحاديث", en: "Hadith" },
    thisDay: { ar: "في مثل هذا اليوم", en: "On this day" },
    fatwas: { ar: "الفتاوى والاستشارات", en: "Fatwas & counsel" },
    about: { ar: "من نحن", en: "About" },
    search: { ar: "بحث", en: "Search" },
    menu: { ar: "القائمة", en: "Menu" },
    close: { ar: "إغلاق", en: "Close" },
  },
  chrome: {
    language: { ar: "English", en: "العربية" },
    themeLight: { ar: "الوضع الفاتح", en: "Light mode" },
    themeDark: { ar: "الوضع الداكن", en: "Dark mode" },
    skip: { ar: "تخطي إلى المحتوى", en: "Skip to content" },
  },
  uns: {
    title: { ar: "قسم أنس", en: "Uns" },
    subtitle: { ar: "ورد اليوم", en: "Today’s companion" },
  },
  article: {
    featuredKicker: { ar: "تدبر وتأمل", en: "Reflection" },
    reading: { ar: "دقائق قراءة", en: "min read" },
    share: { ar: "مشاركة", en: "Share" },
    copy: { ar: "نسخ الرابط", en: "Copy link" },
    copied: { ar: "تم نسخ الرابط", en: "Link copied" },
    bookmark: { ar: "حفظ", en: "Save" },
    print: { ar: "طباعة", en: "Print" },
    previous: { ar: "مقالات سابقة", en: "Previous articles" },
    viewMore: { ar: "مشاهدة المزيد", en: "View more" },
    related: { ar: "مقالات ذات صلة", en: "Related articles" },
    latest: { ar: "أحدث المقالات", en: "Latest articles" },
    popular: { ar: "الأكثر قراءة", en: "Popular" },
    recommended: { ar: "مقترحات لك", en: "Recommended" },
    published: { ar: "نُشر في", en: "Published" },
  },
  comments: {
    title: { ar: "التعليقات", en: "Comments" },
    empty: {
      ar: "التعليقات غير مفعّلة بعد. ستظهر هنا عندما نفتح باب المشاركة.",
      en: "Comments are not open yet. This space is ready for when they are.",
    },
    loadMore: { ar: "عرض المزيد", en: "Show more" },
    name: { ar: "الاسم", en: "Name" },
    body: { ar: "تعليقك", en: "Your comment" },
    submit: { ar: "إرسال", en: "Send" },
    pending: {
      ar: "نراجع المشاركات قبل ظهورها. هذه الخطوة لحماية جودة النقاش.",
      en: "Comments will be reviewed before they appear, to keep the discussion thoughtful.",
    },
    reply: { ar: "رد", en: "Reply" },
  },
  subscribe: {
    title: { ar: "إشعارات من مؤنس", en: "Notes from Mounis" },
    body: {
      ar: "اترك بريدك لتصلك المقالات الجديدة، ورد اليوم، وأخبار التطبيق عند إطلاقه.",
      en: "Leave your email for new articles, the daily companion, and the app launch.",
    },
    placeholder: { ar: "بريدك الإلكتروني", en: "Your email" },
    submit: { ar: "اشتراك", en: "Subscribe" },
    success: {
      ar: "شكرًا لك. سنحفظ طلبك عندما نربط خدمة الإرسال.",
      en: "Thank you. We’ll store this when email delivery is connected.",
    },
    error: { ar: "أدخل بريدًا صالحًا.", en: "Enter a valid email." },
  },
  app: {
    title: { ar: "انتظروا قريبًا تطبيق مؤنس على الهاتف", en: "The Mounis app is coming soon" },
    body: {
      ar: "نجهّز تطبيقًا خفيفًا للقراءة اليومية والأدوات. ليس متاحًا للتحميل بعد.",
      en: "A lightweight app for daily reading and tools is in preparation. It is not available yet.",
    },
  },
  ads: {
    label: { ar: "إعلان", en: "Advertisement" },
    placeholder: { ar: "مساحة إعلانية محجوزة", en: "Reserved ad space" },
  },
  search: {
    title: { ar: "ابحث في مؤنس", en: "Search Mounis" },
    placeholder: {
      ar: "مقال، حديث، فتوى، أداة…",
      en: "Article, hadith, fatwa, tool…",
    },
    empty: { ar: "لا نتائج مطابقة.", en: "No matching results." },
    hint: { ar: "ابحث ثم انتقل مباشرة إلى الصفحة.", en: "Search, then go straight to the page." },
  },
  footer: {
    privacy: { ar: "سياسة الخصوصية", en: "Privacy policy" },
    terms: { ar: "شروط الاستخدام", en: "Terms of use" },
    cookies: { ar: "ملفات الارتباط", en: "Cookies" },
    contact: { ar: "تواصل معنا", en: "Contact" },
    about: { ar: "من نحن", en: "About" },
    rights: { ar: "مؤنس — منصة معرفية مستقلة.", en: "Mounis — an independent knowledge platform." },
  },
  tools: {
    coming: { ar: "هذه الأداة قيد التجهيز.", en: "This tool is being prepared." },
    explore: { ar: "يمكنك في الأثناء قراءة التدبر أو تصفّح المقالات.", en: "Meanwhile, you can read the latest reflection or browse articles." },
  },
  hero: {
    kicker: { ar: "رفيق يومك", en: "Your daily companion" },
  },
  categories: {
    tadabbur: { ar: "تدبر وتأمل", en: "Reflection" },
    hadith: { ar: "حديث", en: "Hadith" },
    "this-day": { ar: "في مثل هذا اليوم", en: "On this day" },
    fatwa: { ar: "فتوى", en: "Fatwa" },
  },
} as const;

export function t<
  K1 extends keyof typeof messages,
  K2 extends keyof (typeof messages)[K1],
>(locale: Locale, group: K1, key: K2): string {
  const value = messages[group][key] as { ar: string; en: string };
  return value[locale];
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
}
