// src/components/WhatsAppFloat.tsx
"use client";

import React from "react";
import styles from "./whatsappfloat.module.css";

type Props = {
  /** International phone without + or spaces, e.g. "352621234567" */
  phone?: string;
  /** Pre-filled message (URL-encoded automatically) */
  message?: string;
  /** Turn off the subtle float animation */
  noFloat?: boolean;
  /** Optional GA event label */
  label?: string;
  /** Diameter in px so you can match your other FAB (e.g. 52) */
  size?: number;
};

export default function WhatsAppFloat({
  phone = "352621234567",
  message = "Hello Joel, I’d like to talk about real estate.",
  noFloat = false,
  label = "float",
  size = 52, // <- match your Facebook FAB here (48, 52, 56, etc.)
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const onClick = () => {
    try {
      // @ts-ignore
      if (window?.gtag) {
        // @ts-ignore
        window.gtag("event", "whatsapp_click", {
          event_category: "CTA",
          event_label: label,
          transport_type: "beacon",
        });
      }
    } catch {}
  };

  return (
    <div
      className={`${styles.host} ${noFloat ? styles.noFloat : ""}`}
      style={{ ["--fab-size" as any]: `${size}px` }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp — chat with Joel"
        className={styles.btn}
        onClick={onClick}
      >
        <svg
          className={styles.icon}
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M19.11 17.18c-.28-.14-1.63-.81-1.88-.9-.25-.1-.43-.14-.62.14-.18.28-.71.9-.87 1.09-.16.2-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.62-1.54-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.49.14-.16.18-.28.28-.46.1-.18.06-.35-.02-.49-.08-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.46-.16 0-.35-.02-.53-.02-.18 0-.49.07-.76.35-.26.28-1 1-.1 2.45.9 1.45 2.1 2.57 2.4 2.85.3.28 4.02 3.08 6.91 4.02.97.31 1.73.49 2.32.63.98.21 1.88.18 2.59.11.79-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.2-.53-.34z"
            fill="currentColor"
          />
          <path
            d="M15.11 3.56C9.04 3.56 4.1 8.5 4.1 14.57c0 2.05.53 3.98 1.48 5.65l-1.58 5.79 5.93-1.55c1.63.88 3.49 1.37 5.49 1.37 6.07 0 11.01-4.94 11.01-11.01S21.18 3.56 15.11 3.56zm0 20.11c-1.86 0-3.58-.54-5.02-1.47l-.36-.23-3.52.92.94-3.43-.24-.35a9.05 9.05 0 0 1-1.57-5.05c0-5.02 4.08-9.11 9.11-9.11 5.02 0 9.11 4.08 9.11 9.11 0 5.02-4.08 9.11-9.11 9.11z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
