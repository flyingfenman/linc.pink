import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imagePath = searchParams.get("path")

  if (!imagePath) {
    return new NextResponse("Image path is required", { status: 400 })
  }

  try {
    // Resolve the absolute path to the image
    const fullPath = path.join(process.cwd(), "public", imagePath)

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      return new NextResponse("Image not found", { status: 404 })
    }

    // Read the file
    const imageBuffer = fs.readFileSync(fullPath)

    // Determine content type based on file extension
    const ext = path.extname(fullPath).toLowerCase()
    let contentType = "application/octet-stream"

    if (ext === ".png") contentType = "image/png"
    else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg"
    else if (ext === ".gif") contentType = "image/gif"
    else if (ext === ".svg") contentType = "image/svg+xml"

    // Return the image
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("Error serving image:", error)
    return new NextResponse("Error serving image", { status: 500 })
  }
}

