/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://cal.syoboi.jp/:path*', 
      },
    ]
  },
}

module.exports = nextConfig
