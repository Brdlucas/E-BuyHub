/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    API_URL: process.env.API_URL,
    API_URL_LETTER: process.env.API_URL_LETTER,
    API_URL_CONTACT: process.env.API_URL_CONTACT,
  }
}

module.exports = nextConfig