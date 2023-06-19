/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_WEBSITE: process.env.REACT_APP_WEBSITE,
  },
}

module.exports = nextConfig
