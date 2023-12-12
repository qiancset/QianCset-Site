const withMDX = require('@next/mdx')()



/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'z1.muscache.cn',
        port: '',
        pathname: '/**',
      },
    ],
  }
}


module.exports = withMDX(nextConfig)