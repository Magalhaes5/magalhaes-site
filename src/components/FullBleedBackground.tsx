"use client";

import React from "react";
import styles from "./fullbleed.module.css";

type Props = {
  /** Public path to your image in /public, e.g. "/home-secondary.jpg" */
  image: string;
  /** Optional: min section height in px (default 320) */
  height?: number;
  /** Optional: dark overlay (0 = none, 0.35 default) */
  overlay?: number;
  /** Your content (form, text, etc.) */
  children: React.ReactNode;
};

export default function FullBleedBackground({
  image,
  height = 320,
  overlay = 0.35,
  children,
}: Props) {
  // CSS custom properties let us feed values into the module safely
  const style = {
    // @ts-ignore – allow CSS var
    "--bg-url": `url('${image}')`,
    // @ts-ignore
    "--min-h": `${height}px`,
    // @ts-ignore
    "--overlay": overlay.toString(),
  } as React.CSSProperties;

  return (
    <section className={styles.bleed} style={style}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
