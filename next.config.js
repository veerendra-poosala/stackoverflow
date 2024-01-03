/** @type {import('next').NextConfig} */

const path = require('path')
const basePath = '/t2'

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}

module.exports = nextConfig
