import type { Article } from "@/types";
<<<<<<< HEAD
import articlesData from "@/data/articles.json";

export const articles: Article[] = articlesData.articles as Article[];
=======

export const articles: Article[] = [
  {
    slug: "sakinah-in-remembrance",
    title: {
      ar: "السكينة التي تأتي من الذكر لا من الضجيج",
      en: "The stillness that comes from remembrance, not from noise",
    },
    excerpt: {
      ar: "قراءة هادئة في أثر الذكر على القلب، وكيف يتحوّل التدبر من عادة سريعة إلى رفقة يومية.",
      en: "A quiet reading on how remembrance steadies the heart, and how reflection becomes a daily companion.",
    },
    body: [
      {
        ar: "يفتح كثير من الناس يومهم على شاشات مزدحمة، ثم يبحثون عن سكينة في اللحظة الأخيرة قبل النوم. مؤنس يدعوك إلى عكس الاتجاه: أن تبدأ بآية قصيرة، وأن تمنحها وقتًا كافيًا كي تستقر.",
        en: "Many people open the day to crowded screens, then look for stillness at the last hour of night. Mounis invites the opposite: begin with a short verse, and give it time to settle.",
      },
      {
        ar: "التدبر ليس تحليلًا باردًا للنص، ولا موعظة ثقيلة تُلقى من بعيد. هو جلوس بجانب المعنى، كما يجلس الصديق. تقرأ، ثم تتوقف، ثم تسأل: أين يقع هذا الكلام في يومي؟",
        en: "Reflection is not a cold analysis of text, nor a heavy sermon from afar. It is sitting beside meaning, as a companion would. You read, pause, and ask: where does this sit in my day?",
      },
      {
        ar: "حين يعتاد القلب هذا الإيقاع، تقل حاجته إلى الاستعجال. لا يختفي القلق دفعة واحدة، لكن يتراجع ضجيجه، ويتسع موضع للحضور.",
        en: "When the heart learns this pace, it needs less hurry. Anxiety does not vanish at once, but its noise recedes, and a place for presence opens.",
      },
    ],
    category: "tadabbur",
    readingMinutes: 6,
    publishedAt: "2026-08-24",
    image: "/articles/sakinah.svg",
    imageAlt: {
      ar: "مساحة هادئة بلون أخضر عميق تمثل السكينة",
      en: "A calm deep-green field suggesting stillness",
    },
    quote: {
      kind: "quran",
      text: {
        ar: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        en: "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.",
      },
      source: {
        ar: "سورة الرعد: ٢٨",
        en: "Qur’an 13:28",
      },
    },
  },
  {
    slug: "mercy-in-small-habits",
    title: {
      ar: "الرحمة التي تُبنى بالعادات الصغيرة",
      en: "Mercy built through small habits",
    },
    excerpt: {
      ar: "كيف تتحول النية الصادقة إلى عمل يومي بسيط لا يثقل النفس ولا ينقطع.",
      en: "How a sincere intention becomes a light daily practice that does not break.",
    },
    body: [
      {
        ar: "كثير من الانقطاع يأتي من الوعود الكبيرة. العادة الصغيرة التي تُحفظ أصدق أثرًا من الحماس الذي لا يجد مكانًا في الجدول.",
        en: "Much interruption comes from oversized promises. A small kept habit is truer than enthusiasm that never finds a place in the day.",
      },
    ],
    category: "tadabbur",
    readingMinutes: 4,
    publishedAt: "2026-08-18",
    image: "/articles/mercy.svg",
    imageAlt: {
      ar: "شريط لوني هادئ لمقالة عن العادات",
      en: "A quiet color band for an article on habits",
    },
  },
  {
    slug: "hadith-of-gentleness",
    title: {
      ar: "الرفق الذي لا يُنقص القوة",
      en: "Gentleness that does not diminish strength",
    },
    excerpt: {
      ar: "وقفات مع معاني الرفق في القول والعمل، بعيدًا عن الحدة التي تُلبس ثوب الغيرة.",
      en: "Notes on gentleness in speech and action, away from harshness dressed as zeal.",
    },
    body: [
      {
        ar: "الرفق ليس ضعفًا في الحق، بل قدرة على حمله دون أن يجرح من حولك. وهو باب واسع من أبواب الأحاديث التي تستحق عودة متأنية.",
        en: "Gentleness is not weakness in truth; it is the ability to carry it without wounding those nearby. It is a wide door in the hadith tradition, worth a slower return.",
      },
    ],
    category: "hadith",
    readingMinutes: 5,
    publishedAt: "2026-08-11",
    image: "/articles/rifq.svg",
    imageAlt: {
      ar: "لوحة هادئة لمقالة عن الرفق",
      en: "A calm panel for an article on gentleness",
    },
  },
  {
    slug: "on-this-day-first-revelation",
    title: {
      ar: "في مثل هذا اليوم: معنى البداية لا تاريخها فقط",
      en: "On this day: the meaning of a beginning, not only its date",
    },
    excerpt: {
      ar: "تذكير بأن الذاكرة الإسلامية ليست تقويمًا للذكرى، بل دعوة لإحياء المعنى في الحاضر.",
      en: "A reminder that Islamic memory is not only a calendar of dates, but a call to revive meaning now.",
    },
    body: [
      {
        ar: "التاريخ يعيننا على التذكر، لكن التدبر يبدأ حين نسأل: ماذا نفعل بهذه الذكرى اليوم؟",
        en: "History helps us remember. Reflection begins when we ask: what do we do with this memory today?",
      },
    ],
    category: "this-day",
    readingMinutes: 3,
    publishedAt: "2026-08-05",
    image: "/articles/this-day.svg",
    imageAlt: {
      ar: "مساحة بصرية بسيطة لموضوع في مثل هذا اليوم",
      en: "A simple visual field for an on-this-day piece",
    },
  },
];
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c

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
