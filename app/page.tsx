"use client"

import type React from "react"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { businesses } from "@/lib/businesses"

export default function Home() {
  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, businessName: string) => {
    const target = e.target as HTMLImageElement
    target.onerror = null // Prevent infinite loop
    target.src = `/placeholder.svg?height=200&width=200&text=${businessName.charAt(0)}${businessName.split(" ")[1]?.charAt(0) || ""}`
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #8b5cf6, #d946ef, #ec4899)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "28rem",
          margin: "0 auto",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              width: "6rem",
              height: "6rem",
              borderRadius: "9999px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              marginBottom: "1rem",
              overflow: "hidden",
            }}
          >
            <img
              src="https://pub-3c670c54e508407b867016eb6efec600.r2.dev/IMG_4887.JPG"
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <h1
            style={{
              fontSize: "1.875rem",
              fontWeight: 700,
              color: "white",
              textAlign: "center",
            }}
          >
            linc.pink
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              marginTop: "0.5rem",
              maxWidth: "20rem",
            }}
          >
            Your gateway to multiple businesses in one convenient location
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {Object.values(businesses).map((business) => {
            // Determine text color based on background
            const textColor = business.id === "sleephacker" || business.id === "pitch" ? "#ffffff" : "#9f1239"

            // Determine background gradient
            let background = "linear-gradient(135deg, #fb7185, #f9a8d4, #fecdd3)"
            if (business.id === "sleephacker") {
              background = "linear-gradient(135deg, #22c55e, #064e3b, #000000)"
            } else if (business.id === "stamford-car-buyer") {
              background = "linear-gradient(135deg, #6366f1, #a855f7, #ffffff)"
            } else if (business.id === "pitch") {
              background = "linear-gradient(135deg, #111827, #374151, #111827)"
            }

            return (
              <Link
                key={business.id}
                href={`/${business.id}`}
                style={{ textDecoration: "none", width: "100%", display: "block" }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    background,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)"
                    e.currentTarget.style.boxShadow =
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.boxShadow =
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.1,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>
                  <div
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <div
                      style={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "0.75rem",
                        backgroundColor: business.id === "sleephacker" || business.id === "pitch" ? "#1f2937" : "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        marginRight: "1rem",
                        flexShrink: 0,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={business.logo || "/placeholder.svg"}
                        alt={`${business.name} logo`}
                        style={{
                          width: "80%",
                          height: "80%",
                          objectFit: "cover",
                        }}
                        onError={(e) => handleImageError(e, business.name)}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h2
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: textColor,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {business.name}
                      </h2>
                      <p
                        style={{
                          color: textColor,
                          opacity: 0.8,
                          fontSize: "0.875rem",
                        }}
                      >
                        {business.description}
                      </p>
                    </div>
                    <div
                      style={{
                        color: textColor,
                        opacity: 0.7,
                        transition: "opacity 0.2s",
                      }}
                    >
                      <ArrowUpRight style={{ height: "1.5rem", width: "1.5rem" }} />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <footer
        style={{
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "0.875rem",
          marginTop: "2rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        © 2025 | linc.pink
      </footer>
    </main>
  )
}

