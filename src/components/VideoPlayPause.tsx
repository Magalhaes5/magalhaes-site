"use client";
import { useEffect, useState } from "react";

type Props = {
  /** id of the <video> element in your hero */
  targetId: string;
  /** where to place the control on the video */
  position?: "bottom-left" | "bottom-right";
};

export default function VideoPlayPause({ targetId, position = "bottom-left" }: Props) {
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const el = document.getElementById(targetId) as HTMLVideoElement | null;
    if (!el) return;

    // keep state in sync with real playback
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onPause);

    // if autoplay was blocked
    setPlaying(!el.paused);

    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onPause);
    };
  }, [targetId]);

  const toggle = () => {
    const el = document.getElementById(targetId) as HTMLVideoElement | null;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  const posStyle: React.CSSProperties =
    position === "bottom-right"
      ? { right: 16, bottom: 16 }
      : { left: 16, bottom: 16 };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause video" : "Play video"}
      title={playing ? "Pause" : "Play"}
      className="hero-pp"
      style={{
        position: "absolute",
        ...posStyle,
        zIndex: 5,
        width: 44,
        height: 44,
        borderRadius: 9999,
        display: "grid",
        placeItems: "center",
        background: "rgba(0,0,0,.55)",
        backdropFilter: "saturate(140%) blur(6px)",
        boxShadow: "0 8px 24px rgba(0,0,0,.35)",
        border: "1px solid rgba(255,255,255,.12)",
        color: "#fff",
        transition: "transform .15s ease, background .15s ease",
      }}
      onKeyDown={(e) => {
        if (e.key === " " || e.key.toLowerCase() === "k") {
          e.preventDefault();
          toggle();
        }
      }}
      onMouseEnter={(e) => ((e.currentTarget.style.transform = "scale(1.05)"))}
      onMouseLeave={(e) => ((e.currentTarget.style.transform = "scale(1.0)"))}
    >
      {playing ? (
        // pause icon
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <rect x="6" y="5" width="4" height="14" rx="1.2"></rect>
          <rect x="14" y="5" width="4" height="14" rx="1.2"></rect>
        </svg>
      ) : (
        // play icon
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M8 5v14l12-7-12-7z"></path>
        </svg>
      )}
    </button>
  );
}
