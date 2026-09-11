import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files, API routes, and public assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brand") ||
<<<<<<< HEAD
    (pathname.startsWith("/articles/") && pathname.includes(".")) ||
=======
    pathname.startsWith("/articles/") && pathname.includes(".") ||
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];
<<<<<<< HEAD
  const locale = isLocale(segment ?? "") ? (segment ?? "") : defaultLocale;
=======
  const locale = isLocale(segment) ? segment : defaultLocale;
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);

  // Redirect root and paths without locale to the default locale
<<<<<<< HEAD
  if (!isLocale(segment ?? "")) {
=======
  if (!isLocale(segment)) {
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (with file extensions)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*|robots.txt|sitemap.xml).*)",
  ],
};

void locales;
