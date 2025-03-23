import { ImageResponse } from "next/og"
import { businesses } from "@/lib/businesses"

export const runtime = "edge"

export const alt = "Business Links"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

type BusinessPageParams = {
  businessId: string
}

export default function Image({
  params,
}: {
  params: BusinessPageParams
}) {
  // Access params directly without awaiting
  const businessId = params.businessId
  const business = businesses[businessId]

  if (!business) {
    return new ImageResponse(
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(to bottom right, #f9fafb, #e5e7eb)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#111827",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 20 }}>Business Not Found</div>
      </div>,
      { ...size },
    )
  }

  // Custom background colors based on business ID
  let background = "linear-gradient(to bottom right, #fb7185, #f9a8d4, #fecdd3)"
  let textColor = "#9f1239"

  if (businessId === "sleephacker") {
    background = "linear-gradient(to bottom right, #22c55e, #064e3b, #000000)"
    textColor = "#ffffff"
  } else if (businessId === "stamford-car-buyer") {
    background = "linear-gradient(to bottom right, #6366f1, #a855f7, #ffffff)"
    textColor = "#312e81"
  } else if (businessId === "pitch") {
    background = "linear-gradient(to bottom right, #111827, #374151, #111827)"
    textColor = "#ffffff"
  }

  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: textColor,
      }}
    >
      <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 20 }}>{business.name}</div>
      <div style={{ fontSize: 36, opacity: 0.8 }}>{business.description}</div>
    </div>,
    {
      ...size,
    },
  )
}

