"use client"

import Link from "next/link"
import { ArrowUpRight, Home } from "lucide-react"
import type React from "react"
import type { Business } from "@/lib/businesses"
import * as LucideIcons from "lucide-react"

export default function BusinessPageClient({ business }: { business: Business }) {
  // Special styling for dark themes (SleepHacker and Pitch)
  const isDarkTheme = business.id === "sleephacker" || business.id === "pitch"

  // Determine background gradient
  let background = "linear-gradient(135deg, #fb7185, #f9a8d4, #fecdd3)"
  if (business.id === "sleephacker") {
    background = "linear-gradient(135deg, #22c55e, #064e3b, #000000)"
  } else if (business.id === "stamford-car-buyer") {
    background = "linear-gradient(135deg, #6366f1, #a855f7, #ffffff)"
  } else if (business.id === "pitch") {
    background = "linear-gradient(135deg, #111827, #374151, #111827)"
  }

  const textColor = isDarkTheme ? "#ffffff" : "#9f1239"

  // Helper function to get the icon component
  const getIconComponent = (iconName: string) => {
    // @ts-ignore - We know these icons exist in lucide-react
    const Icon = LucideIcons[iconName] || LucideIcons.Link
    return <Icon size={20} />
  }

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.onerror = null // Prevent infinite loop
    target.src = `/placeholder.svg?height=200&width=200&text=${business.name.charAt(0)}${business.name.split(" ")[1]?.charAt(0) || ""}`
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background,
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "28rem",
          width: "100%",
          margin: "0 auto",
          padding: "1.5rem 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: "7rem",
              height: "7rem",
              borderRadius: "9999px",
              backgroundColor: isDarkTheme ? "#1f2937" : "white",
              padding: "0.375rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              marginBottom: "1rem",
              overflow: "hidden",
            }}
          >
            <img
              src={business.logo || "/placeholder.svg"}
              alt={`${business.name} logo`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "9999px",
              }}
              onError={handleImageError}
            />
          </div>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: textColor,
              textAlign: "center",
            }}
          >
            {business.name}
          </h1>
          <p
            style={{
              color: textColor,
              opacity: isDarkTheme ? 0.8 : 0.7,
              textAlign: "center",
              marginTop: "0.25rem",
            }}
          >
            {business.description}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {business.links.map((link, index) => {
            // Determine button color
            let buttonColor = "#f43f5e" // Default rose-500
            if (link.color.includes("pink")) buttonColor = "#ec4899"
            else if (link.color.includes("fuchsia")) buttonColor = "#d946ef"
            else if (link.color.includes("purple")) buttonColor = "#a855f7"
            else if (link.color.includes("emerald")) buttonColor = "#10b981"
            else if (link.color.includes("blue")) buttonColor = "#3b82f6"
            else if (link.color.includes("indigo")) buttonColor = "#6366f1"
            else if (link.color.includes("violet")) buttonColor = "#7c3aed"
            else if (link.color.includes("green-6")) buttonColor = "#16a34a"
            else if (link.color.includes("green-7")) buttonColor = "#15803d"
            else if (link.color.includes("green-8")) buttonColor = "#166534"
            else if (link.color.includes("gray")) buttonColor = "#1f2937"

            // Determine hover color
            let hoverColor = buttonColor
            if (buttonColor === "#f43f5e") hoverColor = "#e11d48"
            else if (buttonColor === "#ec4899") hoverColor = "#db2777"
            else if (buttonColor === "#d946ef") hoverColor = "#c026d3"
            else if (buttonColor === "#a855f7") hoverColor = "#9333ea"
            else if (buttonColor === "#10b981") hoverColor = "#059669"
            else if (buttonColor === "#3b82f6") hoverColor = "#2563eb"
            else if (buttonColor === "#6366f1") hoverColor = "#4f46e5"
            else if (buttonColor === "#16a34a") hoverColor = "#15803d"
            else if (buttonColor === "#15803d") hoverColor = "#166534"
            else if (buttonColor === "#166534") hoverColor = "#14532d"
            else if (buttonColor === "#1f2937") hoverColor = "#111827"

            return (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "3.5rem",
                    backgroundColor: buttonColor,
                    color: "white",
                    borderRadius: "0.75rem",
                    padding: "0 1rem",
                    border: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = hoverColor
                    e.currentTarget.style.transform = "scale(1.02)"
                    e.currentTarget.style.boxShadow =
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = buttonColor
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = "scale(0.98)"
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginRight: "0.75rem" }}>{getIconComponent(link.icon)}</span>
                    {link.title}
                  </span>
                  <ArrowUpRight size={16} />
                </button>
              </Link>
            )
          })}
        </div>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                backgroundColor: isDarkTheme ? "transparent" : "white",
                color: isDarkTheme ? "white" : "#374151",
                border: isDarkTheme ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid #d1d5db",
                fontWeight: 500,
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "#f3f4f6"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = isDarkTheme ? "transparent" : "white"
              }}
            >
              <Home style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
              Back to Directory
            </button>
          </Link>
        </div>
      </div>

      <footer
        style={{
          color: textColor,
          opacity: isDarkTheme ? 0.6 : 0.7,
          fontSize: "0.875rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        © 2025 | {business.name}
      </footer>
    </main>
  )
}

