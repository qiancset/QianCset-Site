/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Next.js config options here */

}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra(
  nextConfig
)