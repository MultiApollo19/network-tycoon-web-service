/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com','pejbphmhqtbylrhyibzd.supabase.co','oxrfscrmfcvwudayykzq.supabase.co','ui-avatars.com'],
  },
  
}

module.exports = withPWA({pwa: {
  dest: 'public'
}},nextConfig)
