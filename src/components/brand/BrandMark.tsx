import Image from "next/image";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

<<<<<<< HEAD
export function BrandMark({ locale, size = 180 }: { locale: Locale; size?: number }) {
=======
export function BrandMark({
  locale,
  size = 180,
}: {
  locale: Locale;
  size?: number;
}) {
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
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
<<<<<<< HEAD
          width: "100%",
          maxWidth: `${size}px`,
          height: "auto",
=======
          width: '100%',
          maxWidth: `${size}px`,
          height: 'auto',
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
        }}
      />
    </div>
  );
}
