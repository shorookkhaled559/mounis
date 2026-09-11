import type { AnalyticsEventName } from "@/types";

export function track(
  event: AnalyticsEventName,
  payload?: Record<string, string | number | boolean | undefined>
) {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  void event;
  void payload;
}
