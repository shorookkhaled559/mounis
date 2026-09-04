import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Noto_Naskh_Arabic } from "next/font/google";
import { headers } from "next/headers";
import { defaultLocale, getDirection, isLocale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const uiAr = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui-ar",
  display: "swap",
});

const uiEn = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui-en",
  display: "swap",
});

const bodyAr = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-ar",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name.ar} — ${siteConfig.tagline.ar}`,
    template: `%s | ${siteConfig.name.ar}`,
  },
  description: siteConfig.description.ar,
  applicationName: siteConfig.name.ar,
  icons: { icon: "/brand/mounis-mark.png", apple: "/brand/mounis-mark.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#101812" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localeHeader = (await headers()).get("x-locale") ?? defaultLocale;
  const locale = isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className={`${uiAr.variable} ${uiEn.variable} ${bodyAr.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mounis-theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
