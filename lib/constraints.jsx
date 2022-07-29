export const BASE_URL =
  process.env.VERCEL_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL
    : "http://localhost:3000";