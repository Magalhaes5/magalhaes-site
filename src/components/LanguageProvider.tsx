"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// IMPORTANT: this path must match your actual file name: src/i18n/dictionary.ts
import { dictionaries, Locale } from "@/i18n/dictionary";

type I18nCtx = {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}

const SUPPORTED: Locale[] = ["en", "fr", "pt", "de"];
const normalize = (v: unknown): Locale => {
  const s = String(v ?? "").toLowerCase();
  return (SUPPORTED.includes(s as Locale) ? (s as Locale) : "en") as Locale;
};

export function LanguageProvider({
  initialLang = "en",
  children,
}: {
  initialLang?: Locale;
  children: React.ReactNode;
}) {
  // Hydrate from server-provided lang to avoid hydration mismatch
  const [lang, setLangState] = useState<Locale>(normalize(initialLang));

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const fromQuery = normalize(url.searchParams.get("lang"));
      const fromLocal = normalize(localStorage.getItem("lang"));
      const next = fromQuery || fromLocal || lang;
      if (next !== lang) setLangState(next);
      document.documentElement.lang = next;
    } catch {
      /* SSR-safe */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = (l: Locale) => {
    const next = normalize(l);
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
      document.documentElement.lang = next;

      // keep URL in sync without reload
      const url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      window.history.replaceState({}, "", url.toString());
    } catch {
      /* ignore */
    }
  };

  const t = (key: string) => {
    const dict = dictionaries[lang] ?? dictionaries.en;
    const val = (dict as any)[key];
    if (val !== undefined) return val;
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[i18n] Missing key "${key}" for lang "${lang}"`);
    }
    return (dictionaries.en as any)[key] ?? key;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
