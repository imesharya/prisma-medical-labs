import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: '**.prismalaboratory.com',
      },
      {
        protocol: 'https',
        hostname: '**.imesharya.workers.dev',
      },
    ],
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
  },
  experimental: {
    globalNotFound: true,
  },
  serverExternalPackages: ['jose', 'pg-cloudflare'],

  webpack: (webpackConfig: any) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  async redirects() {
    return [
      { source: '/home2', destination: '/packages', permanent: true },
      { source: '/special-packages', destination: '/packages/specialized', permanent: true },
      { source: '/body', destination: '/packages/specialized', permanent: true },
      { source: '/genetest', destination: '/packages/marriage', permanent: true },
      { source: '/full-packages', destination: '/packages/comprehensive', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
