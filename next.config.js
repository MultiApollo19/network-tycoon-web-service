/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  env:{
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    DATABASE_URL: process.env.DATABASE_URL,
  },
}

module.exports = nextConfig
