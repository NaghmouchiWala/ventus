import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 14,
            color: "#2dd4bf",
            marginBottom: 28,
          }}
        >
          L&apos;AIR D&apos;UN MEILLEUR QUOTIDIEN
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 140,
            fontWeight: 700,
            letterSpacing: 18,
            color: "#f5f5f5",
          }}
        >
          VENTUS
        </div>
      </div>
    ),
    size
  );
}
