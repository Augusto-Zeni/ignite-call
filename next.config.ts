import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '',
        search: '',
      },
    ],
  },
}

export default nextConfig
