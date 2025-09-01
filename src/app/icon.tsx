// Dynamic favicon for Next.js — no downloads needed.
// Next will automatically use this at /icon for all sizes.
import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2a7ef0, #1f6feb)",
          borderRadius: 96, // rounded-square look
          fontFamily: "system-ui, Segoe UI, Roboto, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 240,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          MJ
        </div>
      </div>
    ),
    { ...size }
  );
}
