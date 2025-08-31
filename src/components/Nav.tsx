"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/components/LanguageProvider";
import styles from "./nav.module.css"; // must be in the same folder

export default function Nav() {
  const { t, lang, setLang } = useI18n();
  const router = useRouter();
  const pathname = usePathname() || "/";

  // Active state also works for nested routes like /guides/buy
  const isCurrent = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  // NO useSearchParams during render (avoids SSR/CSR mismatch).
  const changeLang = (l: string) => {
    setLang(l as any);
    try {
      const params = new URLSearchParams(window.location.search);
      params.set("lang", l);
      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname);
    } catch {
      router.push(`${pathname}?lang=${l}`);
    }
  };

  return (
    <header className={styles.wrap}>
      <div className={styles.inner}>
        {/* Brand — consistent markup on server & client */}
        <Link href="/" className={styles.brand} aria-label="Go to homepage">
          <span className={styles.brandText}>
            Magalhães <span>Joel</span>
          </span>
        </Link>

        {/* Primary nav */}
        <nav className={styles.links} aria-label="Primary">
          <Link
            href="/"
            className={`${styles.link} ${isCurrent("/") ? styles.active : ""}`}
          >
            {t("nav_home")}
          </Link>
          <Link
            href="/about"
            className={`${styles.link} ${isCurrent("/about") ? styles.active : ""}`}
          >
            {t("nav_about")}
          </Link>
          <Link
            href="/guides"
            className={`${styles.link} ${isCurrent("/guides") ? styles.active : ""}`}
          >
            {t("nav_guides")}
          </Link>
          <Link
            href="/solutions"
            className={`${styles.link} ${isCurrent("/solutions") ? styles.active : ""}`}
          >
            {t("nav_solutions")}
          </Link>
          <Link
            href="/contact"
            className={`${styles.link} ${isCurrent("/contact") ? styles.active : ""}`}
          >
            {t("nav_contact")}
          </Link>
        </nav>

        {/* Language flags */}
        <div className={styles.flags}>
          {(["en", "fr", "pt", "de"] as const).map((l) => (
            <button
              key={l}
              type="button"
              className={`${styles.flag} ${lang === l ? styles.flagActive : ""}`}
              onClick={() => changeLang(l)}
              title={l.toUpperCase()}
              aria-pressed={lang === l}
            >
              <span aria-hidden>
                {l === "en" ? "🇬🇧" : l === "fr" ? "🇫🇷" : l === "pt" ? "🇵🇹" : "🇩🇪"}
              </span>
              <span className="sr-only">{l.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
