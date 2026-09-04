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
      : stored ?? "light";
    setTheme(current);
  }, []);

  const next = theme === "dark" ? "light" : "dark";
  const label =
    next === "dark"
      ? t(locale, "chrome", "themeDark")
      : t(locale, "chrome", "themeLight");

  return (
    <button
      type="button"
      className="icon-btn"
      aria-label={label}
      onClick={() => {
        applyTheme(next);
        setTheme(next);
      }}
    >
      {theme === "dark" ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </button>
  );
}
