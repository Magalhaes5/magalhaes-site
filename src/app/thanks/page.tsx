"use client";
import Link from "next/link";
import { useI18n } from "@/components/LanguageProvider";

export default function ThanksPage() {
  const { t } = useI18n();
  return (
    <section className="section card" style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: 0 }}>{t("thanks_title")}</h1>
      <p style={{ margin: "8px 0 18px" }}>
        {t("thanks_message")}
      </p>

      <div className="ctas" style={{ justifyContent: "center" }}>
        <a
          href="https://wa.me/352621597137?text=Hi%20Joel%2C%20thanks%20for%20your%20reply.%20I%27d%20like%20to%20chat%20about%20my%20property%20search."
          className="button primary"
          target="_blank"
          rel="noreferrer"
          onClick={() => window.gtag?.("event", "whatsapp_click", { location: "thanks_page" })}
        >
          {t("thanks_whatsapp")}
        </a>
        <Link href="/" className="button secondary">{t("thanks_back_home")}</Link>
      </div>
    </section>
  );
}
