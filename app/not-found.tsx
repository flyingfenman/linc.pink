import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the business you're looking for.</p>
        <Button asChild>
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  )
}

