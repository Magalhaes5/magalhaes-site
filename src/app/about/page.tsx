"use client";

import Image from "next/image";
import { useI18n } from "@/components/LanguageProvider";

/**
 * About page as a Client Component so it re-renders when the language changes.
 */
export default function AboutPage() {
  const { t } = useI18n();

  // small helpers for consistent card styles
  const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 16,
  };

  return (
    <main>
      {/* Title & kicker */}
      <section className="section card" style={{ maxWidth: 1100, margin: "2rem auto" }}>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", marginBottom: 8 }}>
          {t("about_title")}
        </h1>
        <p style={{ opacity: 0.9 }}>{t("about_kicker")}</p>
      </section>

      {/* Values row (four boxes side by side, responsive) */}
      <section className="section card" style={{ maxWidth: 1100, margin: "0 auto 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0,1fr))",
            gap: 12,
          }}
        >
          <div style={cardStyle}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{t("values_transparent")}</div>
            <div style={{ opacity: 0.95 }}>{t("valdesc_transparent")}</div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{t("values_precise")}</div>
            <div style={{ opacity: 0.95 }}>{t("valdesc_precise")}</div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{t("values_multilingual")}</div>
            <div style={{ opacity: 0.95 }}>{t("valdesc_multilingual")}</div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{t("values_techsavvy")}</div>
            <div style={{ opacity: 0.95 }}>{t("valdesc_techsavvy")}</div>
          </div>
        </div>
      </section>

      {/* Bio split: portrait + text */}
      <section className="section card" style={{ maxWidth: 1100, margin: "0 auto 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(260px, 360px) 1fr",
            gap: 20,
            alignItems: "start",
          }}
        >
          <div>
            <Image
              src="/joel.jpg"
              alt="Joel Magalhães"
              width={900}
              height={1200}
              priority
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 16,
                objectFit: "cover",
              }}
            />
          </div>

          <div>
            {/* Intro paragraph */}
            <p style={{ marginBottom: 16, lineHeight: 1.7 }}>{t("about_bio_p1")}</p>

            {/* Bullet points */}
            <ul style={{ paddingLeft: 18, margin: 0, lineHeight: 1.7 }}>
              <li style={{ marginBottom: 8 }}>
                <strong>{t("foundations")} — Re/Max:</strong> {t("about_remax")}
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Daniel Frères:</strong> {t("about_dfi")}
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>AfIL Immo:</strong> {t("about_afil")}
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>{t("today")}:</strong> {t("about_cimmo")}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
