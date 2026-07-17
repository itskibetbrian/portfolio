/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
