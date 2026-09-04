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
      className={`ad-slot ad-slot-${placement} ${className}`.trim()}
      aria-label={t(locale, "ads", "label")}
      data-ad-placement={placement}
      data-ad-network="placeholder"
    >
      <div
        className="ad-slot-frame"
        style={{ minHeight: size.height, minWidth: Math.min(size.width, 320) }}
      >
        <span className="ad-kicker">{t(locale, "ads", "label")}</span>
        <span className="ad-copy">{t(locale, "ads", "placeholder")}</span>
        <span className="ad-size">
          {size.width}×{size.height}
        </span>
      </div>
    </aside>
  );
}
