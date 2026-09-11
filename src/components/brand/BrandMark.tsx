import Image from "next/image";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

export function BrandMark({ locale, size = 180 }: { locale: Locale; size?: number }) {
  return (
    <div className="brand-mark-wrapper">
      <Image
        src="/brand/logo.png"
        alt={siteConfig.name[locale]}
        width={size}
        height={size * 0.45}
        className="brand-mark"
        priority
        style={{
          width: "100%",
          maxWidth: `${size}px`,
          height: "auto",
        }}
      />
    </div>
  );
}
