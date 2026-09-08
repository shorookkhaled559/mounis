import { AdSlot } from "@/components/ads/AdSlot";
import { UnsWidget } from "@/components/uns/UnsWidget";
import { unsToday } from "@/lib/data/uns";
import type { Locale } from "@/types";

export function Sidebar({ locale }: { locale: Locale }) {
  return (
    <aside className="w-full order-first lg:order-none">
      <div className="lg:sticky lg:top-[calc(var(--header-h)+1rem)] grid gap-4">
        <UnsWidget locale={locale} content={unsToday} />
        <AdSlot placement="sidebar" locale={locale} />
      </div>
    </aside>
  );
}
