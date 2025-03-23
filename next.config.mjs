const nextConfig = {
  images: {
    domains: ['placeholder.com', 'placehold.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
}

export default nextConfig

