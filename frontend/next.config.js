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
        hostname: 'proper-excellence-4322d5b693.media.strapiapp.com',
      }
    ],
  },
}

module.exports = nextConfig
