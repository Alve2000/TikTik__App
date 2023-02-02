
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  
  reactStrictMode: true,
  images: {
    domains: ['external-content.duckduckgo.com', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
