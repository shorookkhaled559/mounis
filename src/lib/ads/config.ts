import type { AdPlacement } from "@/types";

<<<<<<< HEAD
export const adSlotSizes: Record<AdPlacement, { width: number; height: number; label: string }> = {
=======
export const adSlotSizes: Record<
  AdPlacement,
  { width: number; height: number; label: string }
> = {
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
  "banner-top": { width: 728, height: 90, label: "Banner" },
  sidebar: { width: 300, height: 250, label: "Sidebar" },
  "in-content": { width: 336, height: 280, label: "In-content" },
  "between-sections": { width: 728, height: 90, label: "Section" },
  mobile: { width: 320, height: 100, label: "Mobile" },
  footer: { width: 728, height: 90, label: "Footer" },
};

export const adNetworkReady = {
  adsense: false,
  gam: false,
} as const;
