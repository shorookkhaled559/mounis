import { AdSlot } from "@/components/ads/AdSlot";
import { UnsWidget } from "@/components/uns/UnsWidget";
import { unsToday } from "@/lib/data/uns";
import type { Locale } from "@/types";

export function Sidebar({ locale }: { locale: Locale }) {
  return (
    <aside className="site-sidebar">
      <div className="sidebar-sticky">
        <UnsWidget locale={locale} content={unsToday} />
        <AdSlot placement="sidebar" locale={locale} />
      </div>
    </aside>
  );
}
