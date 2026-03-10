import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JG-Marine – Independent Marine Surveyors Since 1959";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#21383D",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#005E8E",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F4F9F6",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            JG
          </div>
          <span
            style={{
              color: "#F4F9F6",
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            JG-MARINE
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            color: "#F4F9F6",
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: 0,
            maxWidth: "800px",
          }}
        >
          Independent Marine Surveyors Since 1959
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(244, 249, 246, 0.7)",
            fontSize: "24px",
            marginTop: "24px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Three generations of Master Mariners. Hull & machinery surveys, cargo
          inspections, casualty response across 11+ countries.
        </p>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "auto",
            color: "rgba(244, 249, 246, 0.5)",
            fontSize: "18px",
          }}
        >
          <span>Sopot</span>
          <span>•</span>
          <span>Szczecin</span>
          <span>•</span>
          <span>Warsaw</span>
          <span style={{ marginLeft: "auto" }}>jg-marine.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
