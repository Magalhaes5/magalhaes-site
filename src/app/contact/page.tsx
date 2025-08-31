"use client";
import Image from "next/image";
import { useI18n } from "@/components/LanguageProvider";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useI18n();

  // Try these in order. Put your new file in /public/images/ as .webp or .jpg
  const CANDIDATES = [
    "/images/joel-contact.webp",
    "/images/joel-contact.jpg",
    "/joel.jpg",
  ];

  const [idx, setIdx] = useState(0);
  const src = CANDIDATES[idx];

  return (
    <>
      <section
        aria-label="Contact header"
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          height: "36vh",
          minHeight: 260,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 60% at 0% 0%, rgba(30,70,140,.35), rgba(0,0,0,.55))",
          }}
        />
        <h1 style={{ position: "relative", zIndex: 1, margin: 0 }}>
          {t("contact_title")}
        </h1>
      </section>

      <section className="section card">
        <div className="split2" style={{ alignItems: "start" }}>
          <div className="photoCol">
            <Image
              key={src} // force re-render if we fall back
              src={src}
              alt="Joel Magalhães — portrait"
              width={900}
              height={1200}
              className="photoFrame"
              priority
              sizes="(max-width: 900px) 100vw, 460px"
              style={{ width: "100%", height: "auto", display: "block" }}
              onError={() => {
                // fall back to next candidate if current fails
                if (idx < CANDIDATES.length - 1) setIdx(idx + 1);
              }}
            />
          </div>

          <div>
            <h2 style={{ marginTop: 0 }}>{t("contact_lets_talk")}</h2>
            <p>
              {t("contact_phone")}:{" "}
              <a href="tel:+352621597137">+352 621 597 137</a>
            </p>
            <p>
              {t("contact_email")}:{" "}
              <a href="mailto:joel.magalhaes@cia.lu">joel.magalhaes@cia.lu</a>
            </p>
            <p>
              {t("contact_address")}: 59 route de Longwy, L-8080 Luxembourg
            </p>
            <p>{t("contact_hours")}: Mon–Fri 09:00–18:00</p>
            <div className="ctas" style={{ gap: 10 }}>
              <a
                className="button primary"
                href="https://wa.me/352621597137"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a className="button secondary" href="mailto:joel.magalhaes@cia.lu">
                {t("contact_email_me")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
