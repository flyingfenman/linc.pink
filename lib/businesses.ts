export type BusinessLink = {
  title: string
  url: string
  icon: string
  color: string
}

export type Business = {
  id: string
  name: string
  logo: string
  description: string
  backgroundColor: string
  textColor: string
  links: BusinessLink[]
}

// Collection of all businesses
export const businesses: Record<string, Business> = {
  "county-florist": {
    id: "county-florist",
    name: "County Florist",
    logo: "https://pub-3c670c54e508407b867016eb6efec600.r2.dev/slideshow5.jpg",
    description: "Beautiful floral arrangements for all occasions",
    backgroundColor: "bg-gradient-to-br from-rose-400 via-pink-300 to-rose-200",
    textColor: "text-rose-900",
    links: [
      {
        title: "Shop Flowers Online",
        url: "https://countyflorist.com/shop",
        icon: "ShoppingCart",
        color: "bg-rose-500 hover:bg-rose-600",
      },
      {
        title: "Wedding & Event Services",
        url: "https://countyflorist.com/weddings",
        icon: "Heart",
        color: "bg-pink-500 hover:bg-pink-600",
      },
      {
        title: "Book a Consultation",
        url: "https://countyflorist.com/consultation",
        icon: "Calendar",
        color: "bg-fuchsia-500 hover:bg-fuchsia-600",
      },
      {
        title: "Special Occasion Gifts",
        url: "https://countyflorist.com/gifts",
        icon: "Gift",
        color: "bg-purple-500 hover:bg-purple-600",
      },
      {
        title: "Our Location",
        url: "https://maps.google.com/?q=County+Florist",
        icon: "MapPin",
        color: "bg-emerald-500 hover:bg-emerald-600",
      },
      {
        title: "Call Us",
        url: "tel:+1234567890",
        icon: "Phone",
        color: "bg-blue-500 hover:bg-blue-600",
      },
      {
        title: "Email Us",
        url: "mailto:hello@countyflorist.com",
        icon: "Mail",
        color: "bg-indigo-500 hover:bg-indigo-600",
      },
      {
        title: "Follow Us on Instagram",
        url: "https://instagram.com/countyflorist",
        icon: "Instagram",
        color: "bg-pink-500 hover:bg-pink-600",
      },
    ],
  },
  sleephacker: {
    id: "sleephacker",
    name: "SleepHacker",
    logo: "https://pub-3c670c54e508407b867016eb6efec600.r2.dev/Screenshot%202025-03-10%20at%2015.57.37.png",
    description: "Better sleep for a better life",
    backgroundColor: "bg-gradient-to-br from-green-500 to-black",
    textColor: "text-white",
    links: [
      {
        title: "Official Website",
        url: "https://sleephacker.com",
        icon: "ExternalLink",
        color: "bg-green-600 hover:bg-green-700",
      },
      {
        title: "Shop Sleep Products",
        url: "https://sleephacker.com/shop",
        icon: "ShoppingCart",
        color: "bg-green-700 hover:bg-green-800",
      },
      {
        title: "Sleep Tips Newsletter",
        url: "https://sleephacker.com/newsletter",
        icon: "Mail",
        color: "bg-green-800 hover:bg-green-900",
      },
      {
        title: "Sleep Consultation",
        url: "https://sleephacker.com/consultation",
        icon: "Calendar",
        color: "bg-green-600 hover:bg-green-700",
      },
      {
        title: "Sleep Blog",
        url: "https://sleephacker.com/blog",
        icon: "FileText",
        color: "bg-green-700 hover:bg-green-800",
      },
      {
        title: "Follow on Instagram",
        url: "https://instagram.com/sleephacker",
        icon: "Instagram",
        color: "bg-green-800 hover:bg-green-900",
      },
    ],
  },
  "stamford-car-buyer": {
    id: "stamford-car-buyer",
    name: "Stamford Car Buyer",
    logo: "https://pub-3c670c54e508407b867016eb6efec600.r2.dev/Stamford_Car_Buyer-transformed.jpeg",
    description: "Get the best price for your vehicle",
    backgroundColor: "bg-gradient-to-br from-indigo-500 via-purple-400 to-white",
    textColor: "text-indigo-900",
    links: [
      {
        title: "Sell Your Car",
        url: "https://stamfordcarbuyer.com/sell",
        icon: "Car",
        color: "bg-indigo-600 hover:bg-indigo-700",
      },
      {
        title: "Get a Free Quote",
        url: "https://stamfordcarbuyer.com/quote",
        icon: "CreditCard",
        color: "bg-purple-600 hover:bg-purple-700",
      },
      {
        title: "How It Works",
        url: "https://stamfordcarbuyer.com/process",
        icon: "Wrench",
        color: "bg-violet-600 hover:bg-violet-700",
      },
      {
        title: "Our Location",
        url: "https://maps.google.com/?q=Stamford+Car+Buyer",
        icon: "MapPin",
        color: "bg-indigo-600 hover:bg-indigo-700",
      },
      {
        title: "Call Us",
        url: "tel:+1234567890",
        icon: "Phone",
        color: "bg-purple-600 hover:bg-purple-700",
      },
      {
        title: "Email Us",
        url: "mailto:info@stamfordcarbuyer.com",
        icon: "Mail",
        color: "bg-violet-600 hover:bg-violet-700",
      },
      {
        title: "Customer Reviews",
        url: "https://stamfordcarbuyer.com/reviews",
        icon: "Award",
        color: "bg-indigo-600 hover:bg-indigo-700",
      },
    ],
  },
  pitch: {
    id: "pitch",
    name: "Pitch",
    logo: "https://pub-3c670c54e508407b867016eb6efec600.r2.dev/logo.png",
    description: "Professional business consulting services",
    backgroundColor: "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900",
    textColor: "text-white",
    links: [
      {
        title: "Our Services",
        url: "https://pitchconsulting.com/services",
        icon: "Briefcase",
        color: "bg-gray-800 hover:bg-gray-900 border border-gray-700",
      },
      {
        title: "Book a Consultation",
        url: "https://pitchconsulting.com/consultation",
        icon: "Calendar",
        color: "bg-gray-800 hover:bg-gray-900 border border-gray-700",
      },
      {
        title: "Case Studies",
        url: "https://pitchconsulting.com/case-studies",
        icon: "FileText",
        color: "bg-gray-800 hover:bg-gray-900 border border-gray-700",
      },
      {
        title: "Meet Our Team",
        url: "https://pitchconsulting.com/team",
        icon: "Users",
        color: "bg-gray-800 hover:bg-gray-900 border border-gray-700",
      },
      {
        title: "Contact Us",
        url: "https://pitchconsulting.com/contact",
        icon: "MessageSquare",
        color: "bg-gray-800 hover:bg-gray-900 border border-gray-700",
      },
      {
        title: "Follow on Instagram",
        url: "https://instagram.com/pitchconsulting",
        icon: "Instagram",
        color: "bg-gray-800 hover:bg-gray-900 border border-gray-700",
      },
    ],
  },
}

