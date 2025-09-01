"use client";

import React from "react";
import styles from "./fullbleedmedia.module.css";

type Props = {
  image?: string;      // /public image path (optional if video used)
  video?: string;      // /public video path (optional if image used)
  poster?: string;     // poster for video
  height?: number;     // min height in px
  overlay?: number;    // 0..1 darkness (default 0.35)
  children: React.ReactNode;
};

export default function FullBleedMedia({
  image,
  video,
  poster,
  height = 360,
  overlay = 0.35,
  children,
}: Props) {
  const style = {
    // CSS custom props
    // @ts-ignore
    "--min-h": `${height}px`,
    // @ts-ignore
    "--overlay": overlay.toString(),
    // @ts-ignore
    "--bg-url": image ? `url('${image}')` : undefined,
  } as React.CSSProperties;

  return (
    <section className={styles.bleed} style={style}>
      <div className={styles.media} aria-hidden>
        {video ? (
          <video
            className={styles.video}
            src={video}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div className={styles.image} />
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>{children}</div>
    </section>
  );
}
