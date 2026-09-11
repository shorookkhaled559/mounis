"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { t } from "@/lib/i18n/messages";
import type { Locale } from "@/types";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("mounis-theme", theme);
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("mounis-theme") as Theme | null;
    const current = document.documentElement.classList.contains("dark")
      ? "dark"
<<<<<<< HEAD
      : (stored ?? "light");
=======
      : stored ?? "light";
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
    setTheme(current);
  }, []);

  const next = theme === "dark" ? "light" : "dark";
  const label =
<<<<<<< HEAD
    next === "dark" ? t(locale, "chrome", "themeDark") : t(locale, "chrome", "themeLight");
=======
    next === "dark"
      ? t(locale, "chrome", "themeDark")
      : t(locale, "chrome", "themeLight");
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c

  return (
    <button
      type="button"
<<<<<<< HEAD
      className="inline-flex min-h-[2.35rem] min-w-[2.35rem] flex-shrink-0 cursor-pointer items-center justify-center gap-[0.4rem] rounded-md border-0 bg-transparent p-[0.35rem_0.45rem] text-white transition-colors duration-200 hover:bg-white/15 hover:text-white md:min-h-[2.65rem] md:min-w-[2.65rem] md:p-[0.4rem_0.55rem]"
=======
      className="icon-btn"
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
      aria-label={label}
      onClick={() => {
        applyTheme(next);
        setTheme(next);
      }}
    >
<<<<<<< HEAD
      {theme === "dark" ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
=======
      {theme === "dark" ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
    </button>
  );
}
