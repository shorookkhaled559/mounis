import type { AnalyticsEventName } from "@/types";

export function track(
  event: AnalyticsEventName,
<<<<<<< HEAD
  payload?: Record<string, string | number | boolean | undefined>
=======
  payload?: Record<string, string | number | boolean | undefined>,
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
) {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  void event;
  void payload;
}
