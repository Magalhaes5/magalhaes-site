// src/app/guides/[type]/page.tsx
"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { useI18n } from "@/components/LanguageProvider";

type GuideType = "buy" | "sell";

function normalizeType(v: unknown): GuideType | null {
  const raw = String(v ?? "").toLowerCase();
  if (raw.startsWith("buy")) return "buy";
  if (raw.startsWith("sell")) return "sell";
  return null;
}

export default function GuidesTypePage() {
  const { t, lang } = useI18n();
  const params = useParams<{ type: string }>();

  // Read /guides/[type] safely
  const type = normalizeType(params?.type);

  // Unknown slug → show “choose a guide” with links in the current lang
  if (!type) {
    return (
      <main
        className="section card"
        key={`guides-fallback-${lang}`}
        style={{ maxWidth: 1100, margin: "2rem auto" }}
      >
        <h1 style={{ marginTop: 0 }}>{t("guides_choose")}</h1>
        <div className="ctas" style={{ marginTop: 12 }}>
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

  const isBuy = type === "buy";
  const title = isBuy ? t("guides_buy_title") : t("guides_sell_title");
  const intro = isBuy ? t("guides_buy_intro") : t("guides_sell_intro");

  const steps = isBuy
    ? [
        { t: t("buy_s1_t"), p: t("buy_s1_p") },
        { t: t("buy_s2_t"), p: t("buy_s2_p") },
        { t: t("buy_s3_t"), p: t("buy_s3_p") },
        { t: t("buy_s4_t"), p: t("buy_s4_p") },
        { t: t("buy_s5_t"), p: t("buy_s5_p") },
        { t: t("buy_s6_t"), p: t("buy_s6_p") },
        { t: t("buy_s7_t"), p: t("buy_s7_p") },
        { t: t("buy_s8_t"), p: t("buy_s8_p") },
        { t: t("buy_s9_t"), p: t("buy_s9_p") },
        { t: t("buy_s10_t"), p: t("buy_s10_p") },
      ]
    : [
        { t: t("sell_s1_t"), p: t("sell_s1_p") },
        { t: t("sell_s2_t"), p: t("sell_s2_p") },
        { t: t("sell_s3_t"), p: t("sell_s3_p") },
        { t: t("sell_s4_t"), p: t("sell_s4_p") },
        { t: t("sell_s5_t"), p: t("sell_s5_p") },
        { t: t("sell_s6_t"), p: t("sell_s6_p") },
        { t: t("sell_s7_t"), p: t("sell_s7_p") },
        { t: t("sell_s8_t"), p: t("sell_s8_p") },
      ];

  // key={lang} guarantees a full re-mount when switching flags → strings update
  return (
    <main
      className="section"
      style={{ maxWidth: 1100, margin: "2rem auto" }}
      key={`guides-${type}-${lang}`}
    >
      <section className="card">
        <h1 style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 6 }}>
          {title}
        </h1>
        <p style={{ opacity: 0.9, marginBottom: 18 }}>{intro}</p>

        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          {steps.map((s, i) => (
            <li key={i} style={{ marginBottom: 16 }}>
              <strong style={{ display: "block", marginBottom: 6 }}>{s.t}</strong>
              <span>{s.p}</span>
            </li>
          ))}
        </ol>

        <div style={{ marginTop: 18 }}>
          <a href={`/contact?lang=${lang}`} className="button primary">
            {t("guides_cta")}
          </a>
        </div>
      </section>
    </main>
  );
}
