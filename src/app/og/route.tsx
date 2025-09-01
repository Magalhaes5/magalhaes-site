/* Dynamic OG image for Magalhaes Joel
   Visit /og to preview. Used by Open Graph and social shares. */

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function og() {
  const { width, height } = size;

  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(60% 60% at 20% 20%, rgba(30,70,140,.35) 0%, rgba(0,0,0,.55) 70%), linear-gradient(180deg, #0e0f13 0%, #14213a 100%)",
          position: "relative",
          fontFamily: "system-ui, Segoe UI, Roboto, Arial, sans-serif",
        }}
      >
        {/* Blue flare */}
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -160,
            width: 800,
            height: 800,
            borderRadius: 9999,
            background: "rgba(31,111,235,.35)",
            filter: "blur(80px)",
          }}
        />

        <div style={{ textAlign: "center", color: "#fff", padding: "0 80px" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: 0.2,
              marginBottom: 18,
            }}
          >
            Magalhaes Joel
          </div>

          {/* underline */}
          <div
            style={{
              width: 520,
              height: 4,
              background: "#1f6feb",
              margin: "0 auto 16px auto",
              borderRadius: 2,
            }}
          />

          <div style={{ fontSize: 42, fontWeight: 700, color: "#dfe6ff" }}>
            Less is more
          </div>

          <div
            style={{
              marginTop: 12,
              fontSize: 32,
              color: "#c8d4ff",
            }}
          >
            Trusted, multilingual real estate in Luxembourg
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
