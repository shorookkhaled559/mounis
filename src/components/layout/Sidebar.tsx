import { AdSlot } from "@/components/ads/AdSlot";
import { UnsWidget } from "@/components/uns/UnsWidget";
import { unsToday } from "@/lib/data/uns";
import type { Locale } from "@/types";

export function Sidebar({ locale }: { locale: Locale }) {
  return (
    <aside className="order-first w-full lg:order-none">
      <div className="grid gap-4 lg:sticky lg:top-[calc(var(--header-h)+1rem)]">
        <UnsWidget locale={locale} content={unsToday} />
        <AdSlot placement="sidebar" locale={locale} />
      </div>
    </aside>
  );
}
