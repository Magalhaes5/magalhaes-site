"use client";
import styles from "./mobilecta.module.css";

export default function MobileCTABar() {
  return (
    <div className={styles.wrap} aria-label="Quick contact bar">
      <a className={styles.btn} href="tel:+352621597137">
        <span className={styles.ic} aria-hidden>📞</span>
        Call
      </a>
      <a
        className={`${styles.btn} ${styles.whatsapp}`}
        href="https://wa.me/352621597137"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className={styles.ic} aria-hidden>🟢</span>
        WhatsApp
      </a>
      <a className={`${styles.btn} ${styles.primary}`} href="/#lead">
        Search Cert
      </a>
    </div>
  );
}
