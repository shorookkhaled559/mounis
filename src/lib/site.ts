export const siteConfig = {
  name: {
    ar: "مؤنس",
    en: "Mounis",
  },
  tagline: {
    ar: "رفيقك اليومي للتدبّر والمعرفة الإسلامية",
    en: "Your daily companion for reflection and Islamic knowledge",
  },
  description: {
    ar: "مؤنس منصة عربية معاصرة للتدبّر، والأحاديث، ومواقيت الصلاة، وحاسبة الزكاة، والفتاوى، والمحتوى اليومي الموثوق.",
    en: "Mounis is a modern Arabic-first Islamic platform for reflection, hadith, prayer times, zakat, fatwas, and trusted daily content.",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mounis.app",
} as const;
