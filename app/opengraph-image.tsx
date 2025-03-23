import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "County Florist Links"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom right, #fb7185, #f9a8d4, #fecdd3)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#9f1239",
      }}
    >
      <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 20 }}>County Florist</div>
      <div style={{ fontSize: 36, opacity: 0.8 }}>Beautiful floral arrangements for all occasions</div>
    </div>,
    {
      ...size,
    },
  )
}

