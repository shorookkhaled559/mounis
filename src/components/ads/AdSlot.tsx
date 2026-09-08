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
      className={`my-5 ad-slot-${placement} ${className}`.trim()}
      aria-label={t(locale, "ads", "label")}
      data-ad-placement={placement}
      data-ad-network="placeholder"
    >
      <div
        className="grid place-content-center gap-[0.2rem] text-center bg-[repeating-linear-gradient(-45deg,var(--ad-bg),var(--ad-bg)_8px,color-mix(in_srgb,var(--ad-bg)_88%,var(--line))_8px,color-mix(in_srgb,var(--ad-bg)_88%,var(--line))_16px)] border border-dashed border-[color-mix(in_srgb,var(--ad-ink)_45%,var(--line))] text-[var(--ad-ink)] text-[0.78rem] tracking-[0.02em]"
        style={{ minHeight: size.height, minWidth: Math.min(size.width, 320) }}
      >
        <span className="font-bold uppercase">{t(locale, "ads", "label")}</span>
        <span>{t(locale, "ads", "placeholder")}</span>
        <span>
          {size.width}×{size.height}
        </span>
      </div>
    </aside>
  );
}
