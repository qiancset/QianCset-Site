/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Next.js config options here */
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra(
  nextConfig
)