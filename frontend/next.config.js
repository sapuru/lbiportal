/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'pretty-ducks-77c6e9fe74.media.strapiapp.com',
      }
    ],
  },
}

module.exports = nextConfig
