"use client";

import { useI18n } from "@/components/LanguageProvider";

export default function SolutionsPage() {
  const { t, lang } = useI18n();

  return (
    <main className="section">
      {/* Header */}
      <header className="card" style={{ marginBottom: 16, padding: 18 }}>
        <h1 style={{ marginTop: 0 }}>{t("sol_title")}</h1>
        <p style={{ marginBottom: 0 }}>{t("sol_intro_1")}</p>
      </header>

      {/* What I build */}
      <section className="card" style={{ padding: 18, marginBottom: 18 }}>
        <h2 style={{ marginTop: 0 }}>{t("sol_what")}</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            gap: 16,
            marginTop: 12,
          }}
        >
          {/* Real estate */}
          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>{t("sol_re_title")}</h3>
            <ul>
              <li>{t("sol_re_l1")}</li>
              <li>{t("sol_re_l2")}</li>
              <li>{t("sol_re_l3")}</li>
              <li>{t("sol_re_l4")}</li>
            </ul>
          </div>

          {/* Restaurants */}
          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>{t("sol_rest_title")}</h3>
            <ul>
              <li>{t("sol_rest_l1")}</li>
              <li>{t("sol_rest_l2")}</li>
              <li>{t("sol_rest_l3")}</li>
              <li>{t("sol_rest_l4")}</li>
            </ul>
          </div>

          {/* Landing pages */}
          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>{t("sol_lp_title")}</h3>
            <ul>
              <li>{t("sol_lp_l1")}</li>
              <li>{t("sol_lp_l2")}</li>
              <li>{t("sol_lp_l3")}</li>
              <li>{t("sol_lp_l4")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="card" style={{ padding: 18 }}>
        <h2 style={{ marginTop: 0 }}>{t("sol_how")}</h2>

        <ol style={{ lineHeight: 1.7, margin: 0 }}>
          <li>
            <strong>{t("sol_step1_t")}</strong> — {t("sol_step1_p")}
          </li>
          <li>
            <strong>{t("sol_step2_t")}</strong> — {t("sol_step2_p")}
          </li>
          <li>
            <strong>{t("sol_step3_t")}</strong> — {t("sol_step3_p")}
          </li>
          <li>
            <strong>{t("sol_step4_t")}</strong> — {t("sol_step4_p")}
          </li>
          <li>
            <strong>{t("sol_step5_t")}</strong> — {t("sol_step5_p")}
          </li>
          <li>
            <strong>{t("sol_step6_t")}</strong> — {t("sol_step6_p")}
          </li>
        </ol>

        <div className="ctas" style={{ marginTop: 12 }}>
          <a className="button primary" href={`/contact?lang=${lang}`}>
            {t("sol_cta_quote")}
          </a>
          <a
            className="button secondary"
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("sol_cta_whatsapp")}
          </a>
        </div>
      </section>
    </main>
  );
}
