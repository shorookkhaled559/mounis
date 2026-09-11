import { AdSlot } from "@/components/ads/AdSlot";
import { UnsWidget } from "@/components/uns/UnsWidget";
import { unsToday } from "@/lib/data/uns";
import type { Locale } from "@/types";

export function Sidebar({ locale }: { locale: Locale }) {
  return (
<<<<<<< HEAD
    <aside className="order-first w-full lg:order-none">
      <div className="grid gap-4 lg:sticky lg:top-[calc(var(--header-h)+1rem)]">
=======
    <aside className="site-sidebar">
      <div className="sidebar-sticky">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
        <UnsWidget locale={locale} content={unsToday} />
        <AdSlot placement="sidebar" locale={locale} />
      </div>
    </aside>
  );
}
