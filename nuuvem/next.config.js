/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.chucknorris.io', 'assets.chucknorris.host']
  }
}

module.exports = nextConfig
