

/** @type {import('next').NextConfig} */
const nextConfig = {
 //pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
 // output: 'export',
 // trailingSlash: true,
 // reactStrictMode: true,
  images: {
 //   unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'z1.muscache.cn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  }
}


module.exports = nextConfig