import { businesses } from "@/lib/businesses"
import { notFound } from "next/navigation"
import BusinessPageClient from "./BusinessPageClient"

export function generateStaticParams() {
  return Object.keys(businesses).map((id) => ({
    businessId: id,
  }))
}

export function generateMetadata({ params }: { params: { businessId: string } }) {
  const businessId = params.businessId
  const business = businesses[businessId]

  if (!business) {
    return {
      title: "Business Not Found",
    }
  }

  return {
    title: `${business.name} | Links`,
    description: business.description,
  }
}

export default function BusinessPage({ params }: { params: { businessId: string } }) {
  const businessId = params.businessId
  const business = businesses[businessId]

  if (!business) {
    notFound()
  }

  // Return the client component directly with the business data
  return <BusinessPageClient business={business} />
}

