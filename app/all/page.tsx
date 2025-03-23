import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businesses } from "@/lib/businesses"

export const metadata = {
  title: "All Businesses | Links",
  description: "Links to all our businesses",
}

export default function AllBusinessesPage() {
  // Custom colors for the all businesses page buttons
  const buttonColors = {
    "county-florist": "bg-rose-500 hover:bg-rose-600",
    sleephacker: "bg-green-600 hover:bg-green-700",
    "stamford-car-buyer": "bg-indigo-600 hover:bg-indigo-700",
    pitch: "bg-gray-800 hover:bg-gray-900 border border-gray-700",
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 flex flex-col items-center">
      <div className="max-w-md w-full mx-auto py-6 px-4">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center">All Businesses</h1>
          <p className="text-gray-600 text-center mt-1">Select a business to view its links</p>
        </div>

        <div className="flex flex-col space-y-4">
          {Object.values(businesses).map((business) => (
            <Link key={business.id} href={`/${business.id}`} className="no-underline w-full">
              <Button
                className={`w-full h-16 justify-between text-white transition-all ${buttonColors[business.id as keyof typeof buttonColors]} hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg text-base font-medium rounded-xl`}
              >
                <span className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full ${business.id === "sleephacker" || business.id === "pitch" ? "bg-gray-800" : "bg-white"} mr-3 flex items-center justify-center`}
                  >
                    <img
                      src={business.logo || "/placeholder.svg"}
                      alt={`${business.name} logo`}
                      className="w-6 h-6 object-contain rounded-full"
                    />
                  </div>
                  {business.name}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <footer className="text-gray-500 text-sm mb-4 text-center">© 2025 | Your Business Group</footer>
    </main>
  )
}

