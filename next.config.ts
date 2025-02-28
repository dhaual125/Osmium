/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**'
      },
      {
        protocol: 'https',
        hostname: 'fossbytes.com',
        pathname: '/wp-content/uploads/**'
      }
    ]
  }
}

module.exports = nextConfig;
