import { businesses } from "@/lib/businesses"
import { notFound } from "next/navigation"
import BusinessPageClient from "./BusinessPageClient"
import type { Metadata } from "next"

export function generateStaticParams() {
  return Object.keys(businesses).map((id) => ({
    businessId: id,
  }))
}

type Props = {
  params: {
    businessId: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
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

export default function BusinessPage({ params }: Props) {
  const businessId = params.businessId
  const business = businesses[businessId]

  if (!business) {
    notFound()
  }

  // Return the client component directly with the business data
  return <BusinessPageClient business={business} />
}

