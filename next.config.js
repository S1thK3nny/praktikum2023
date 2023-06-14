/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEBSITE: process.env.WEBSITE,
  },
}

module.exports = nextConfig
