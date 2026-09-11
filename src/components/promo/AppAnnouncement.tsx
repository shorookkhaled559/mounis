import { PhoneIcon } from "@/components/icons";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

export function AppAnnouncement({ locale }: { locale: Locale }) {
  return (
<<<<<<< HEAD
    <section
      className="bg-gradient-to-[135deg] mt-8 box-border grid w-full grid-cols-1 items-start gap-[0.85rem] rounded-lg border border-[var(--line)] from-[var(--paper)] to-[var(--surface)] p-[1.15rem_1rem] shadow-sm sm:grid-cols-[auto_1fr] md:p-[1.35rem_1.4rem]"
      aria-labelledby="app-announce-title"
    >
      <PhoneIcon className="size-6 text-[var(--forest)]" />
      <div>
        <h2 id="app-announce-title" className="m-0 text-xl font-bold text-[var(--ink)]">
          {t(locale, "app", "title")}
        </h2>
        <p className="my-[0.35rem] mt-[0.35rem] mb-0 text-[var(--muted)]">
          {t(locale, "app", "body")}
        </p>
=======
    <section className="app-announce" aria-labelledby="app-announce-title">
      <PhoneIcon className="size-6 text-[var(--forest)]" />
      <div>
        <h2 id="app-announce-title" className="section-title">
          {t(locale, "app", "title")}
        </h2>
        <p>{t(locale, "app", "body")}</p>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
      </div>
    </section>
  );
}
