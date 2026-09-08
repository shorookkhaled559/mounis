import type { UnsContent } from "@/types";
import dailyContentData from "@/data/daily-content.json";

export const unsToday: UnsContent = dailyContentData.current as UnsContent;
