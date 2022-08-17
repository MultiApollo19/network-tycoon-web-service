/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com','pejbphmhqtbylrhyibzd.supabase.co','oxrfscrmfcvwudayykzq.supabase.co','ui-avatars.com'],
  },
  
}

module.exports = nextConfig
