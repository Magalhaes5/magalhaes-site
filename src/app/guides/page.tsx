"use client";

import { useI18n } from "@/components/LanguageProvider";

export default function GuidesIndexPage() {
  const { t, lang } = useI18n();

  return (
    <main className="section card" style={{ maxWidth: 1100, margin: "2rem auto" }} key={`guides-index-${lang}`}>
      <h1 style={{ marginTop: 0 }}>{t("guides_choose")}</h1>
      <p className="muted" style={{ marginTop: 6 }}>
        {t("guides_buy_intro")}
      </p>
      <div className="ctas" style={{ marginTop: 14 }}>
        <a className="button secondary" href={`/guides/buy?lang=${lang}`}>
          {t("guides_buy_title")}
        </a>
        <a className="button primary" href={`/guides/sell?lang=${lang}`}>
          {t("guides_sell_title")}
        </a>
      </div>
    </main>
  );
}
