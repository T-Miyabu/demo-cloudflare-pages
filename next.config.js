/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: 'experimental-edge',
  },
  headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=120, stale-if-error=120',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
