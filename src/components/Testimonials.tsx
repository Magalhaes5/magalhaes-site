"use client";

import styles from "./testimonials.module.css";

type Testimonial = { quote: string; meta: string };

const items: Testimonial[] = [
  {
    quote:
      "Clear guidance, fast communication, and a smooth negotiation. We felt supported at every step.",
    meta: "First-time buyers · Strassen",
  },
  {
    quote:
      "Joel managed the process end-to-end and kept us informed. Professional and efficient.",
    meta: "Seller · Bertrange",
  },
  {
    quote:
      "Multilingual support made everything easier. Great local insight and transparent advice.",
    meta: "Buyer · Luxembourg City",
  },
];

export default function Testimonials() {
  return (
    <div className={styles.wrap} aria-label="Client testimonials">
      <div className={styles.grid}>
        {items.map((t, i) => (
          <figure key={i} className={styles.card}>
            <blockquote className={styles.quote}>“{t.quote}”</blockquote>
            <figcaption className={styles.meta}>— {t.meta}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
