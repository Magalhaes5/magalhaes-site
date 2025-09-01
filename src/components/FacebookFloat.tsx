// src/components/FacebookFloat.tsx
"use client";

import { useEffect, useRef } from "react";

export default function FacebookFloat() {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const fb = ref.current!;
    if (!fb) return;

    const GAP = 12;

    const findWA = () =>
      document.querySelector<HTMLElement>("[data-whatsapp-float]");

    const place = () => {
      const wa = findWA();
      if (!wa) return;

      const r = wa.getBoundingClientRect();
      const right = Math.max(0, window.innerWidth - r.right);
      const bottom = Math.max(0, window.innerHeight - r.top) + GAP;

      fb.style.right = `${right}px`;
      fb.style.bottom = `${bottom}px`;
    };

    // initial + resize/scroll
    place();
    const onResize = () => place();
    const onScroll = () => requestAnimationFrame(place);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    // observe WA size/position changes
    const wa = findWA();
    const ro = wa ? new ResizeObserver(place) : null;
    if (wa && ro) ro.observe(wa);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      if (wa && ro) ro.unobserve(wa);
    };
  }, []);

  return (
    <a
      ref={ref}
      href="https://www.facebook.com/magaalhaesjoel"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow me on Facebook"
      title="Follow me on Facebook"
      style={{
        position: "fixed",
        right: 16,                 // harmless fallback; JS sets real values
        bottom: 84,                // harmless fallback; JS sets real values
        zIndex: 10050,             // above WA (10040) and sparkle (<= 9999)
        width: 56,
        height: 56,
        borderRadius: 9999,
        backgroundColor: "#1877F2",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,.25)",
        pointerEvents: "auto",
      }}
    >
      {/* Facebook “f” */}
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-1 .4-1.6 1.6-1.6h1.5V4.2c-.6-.1-1.6-.2-2.7-.2-2.4 0-3.9 1.5-3.9 4.1V11H8v3h2v8h3.5z" />
      </svg>
    </a>
  );
}
