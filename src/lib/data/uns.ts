import type { UnsContent } from "@/types";
<<<<<<< HEAD
import dailyContentData from "@/data/daily-content.json";

export const unsToday: UnsContent = dailyContentData.current as UnsContent;
=======

export const unsToday: UnsContent = {
  dateIso: "2026-08-26",
  kind: "hadith",
  title: {
    ar: "حديث اليوم",
    en: "Today’s hadith",
  },
  body: {
    ar: "إن الرفق لا يكون في شيء إلا زانه، ولا يُنزع من شيء إلا شانه.",
    en: "Gentleness is not found in anything except that it beautifies it, and it is not removed from anything except that it disfigures it.",
  },
  source: {
    ar: "رواه مسلم",
    en: "Narrated by Muslim",
  },
};
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
