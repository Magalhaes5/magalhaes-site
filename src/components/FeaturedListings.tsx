"use client";

import styles from "./featuredlistings.module.css";
import { useI18n } from "./LanguageProvider";

type Listing = {
  title: string;
  meta: string;
  price: string;
};

const LISTINGS: Listing[] = [
  { title: "Modern 2-bed apartment — Strassen", meta: "92 m² • Balcony • Parking", price: "€845,000" },
  { title: "Family house — Bertrange", meta: "4 beds • Garden • Garage", price: "€1,390,000" },
  { title: "Studio — Luxembourg City Centre", meta: "35 m² • Lift • Near tram", price: "€495,000" },
  { title: "Penthouse — Kirchberg", meta: "3 beds • Terrace • View", price: "€1,780,000" },
];

export default function FeaturedListings() {
  const { t } = useI18n();

  function scrollBy(dir: "left" | "right") {
    const el = document.getElementById("flist");
    if (!el) return;
    const dx = dir === "left" ? -380 : 380;
    el.scrollBy({ left: dx, behavior: "smooth" });
  }

  return (
    <section className="section">
      <div className={styles.bar}>
        <h2>{t("home_listings_title")}</h2>
        <div className={styles.controls}>
          <button className={styles.arrow} onClick={() => scrollBy("left")} aria-label={t("prev")}>‹</button>
          <button className={styles.arrow} onClick={() => scrollBy("right")} aria-label={t("next")}>›</button>
        </div>
      </div>

      <div id="flist" className={styles.row} role="list">
        {LISTINGS.map((l, i) => (
          <article key={i} className={styles.card} role="listitem">
            <div className={styles.thumb} />
            <h3 className={styles.title}>{l.title}</h3>
            <p className={styles.meta}>{l.meta}</p>
            <span className={styles.price}>{l.price}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
