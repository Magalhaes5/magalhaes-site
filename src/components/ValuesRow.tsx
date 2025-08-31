"use client";

import { useI18n } from "@/components/LanguageProvider";

/**
 * Four compact "value" pills shown side-by-side on desktop,
 * stacked on mobile. The multilingual pill shows flag emojis.
 */
export default function ValuesRow() {
  const { t } = useI18n();

  return (
    <section className="section" aria-label="Values">
      <div className="pillGrid">
        <div className="pill">
          <h3>{t("values_transparent")}</h3>
          <p className="sub">{t("valdesc_transparent")}</p>
        </div>

        <div className="pill">
          <h3>{t("values_precise")}</h3>
          <p className="sub">{t("valdesc_precise")}</p>
        </div>

        <div className="pill">
          <h3>{t("values_multilingual")}</h3>
          <p className="sub langFlags">🇬🇧 EN · 🇫🇷 FR · 🇵🇹 PT · 🇩🇪 DE · 🇱🇺 LU</p>
        </div>

        <div className="pill">
          <h3>{t("values_techsavvy")}</h3>
          <p className="sub">{t("valdesc_techsavvy")}</p>
        </div>
      </div>
    </section>
  );
}
