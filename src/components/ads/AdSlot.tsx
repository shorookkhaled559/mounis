import { adSlotSizes } from "@/lib/ads/config";
import { t } from "@/lib/i18n/messages";
import type { AdPlacement, Locale } from "@/types";

export function AdSlot({
  placement,
  locale,
  className = "",
}: {
  placement: AdPlacement;
  locale: Locale;
  className?: string;
}) {
  const size = adSlotSizes[placement];

  return (
    <aside
<<<<<<< HEAD
      className={`my-5 ad-slot-${placement} ${className}`.trim()}
=======
      className={`ad-slot ad-slot-${placement} ${className}`.trim()}
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
      aria-label={t(locale, "ads", "label")}
      data-ad-placement={placement}
      data-ad-network="placeholder"
    >
      <div
<<<<<<< HEAD
        className="grid place-content-center gap-[0.2rem] border border-dashed border-[color-mix(in_srgb,var(--ad-ink)_45%,var(--line))] bg-[repeating-linear-gradient(-45deg,var(--ad-bg),var(--ad-bg)_8px,color-mix(in_srgb,var(--ad-bg)_88%,var(--line))_8px,color-mix(in_srgb,var(--ad-bg)_88%,var(--line))_16px)] text-center text-[0.78rem] tracking-[0.02em] text-[var(--ad-ink)]"
        style={{ minHeight: size.height, minWidth: Math.min(size.width, 320) }}
      >
        <span className="font-bold uppercase">{t(locale, "ads", "label")}</span>
        <span>{t(locale, "ads", "placeholder")}</span>
        <span>
=======
        className="ad-slot-frame"
        style={{ minHeight: size.height, minWidth: Math.min(size.width, 320) }}
      >
        <span className="ad-kicker">{t(locale, "ads", "label")}</span>
        <span className="ad-copy">{t(locale, "ads", "placeholder")}</span>
        <span className="ad-size">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
          {size.width}×{size.height}
        </span>
      </div>
    </aside>
  );
}
