import { PhoneIcon } from "@/components/icons";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

export function AppAnnouncement({ locale }: { locale: Locale }) {
  return (
    <section className="app-announce" aria-labelledby="app-announce-title">
      <PhoneIcon className="size-6 text-[var(--forest)]" />
      <div>
        <h2 id="app-announce-title" className="section-title">
          {t(locale, "app", "title")}
        </h2>
        <p>{t(locale, "app", "body")}</p>
      </div>
    </section>
  );
}
