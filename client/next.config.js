/** @type {import('next').NextConfig} */

const rewrites = async () => {
  return [
    {
      source: "/upload",
      destination: `https://devc-img-uploader-production.up.railway.app/api/upload/${process.env.API_KEY}`,
    },
  ]
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: { styledComponents: true },
  env: { API_KEY: process.env.API_KEY },
  rewrites,
}

module.exports = nextConfig
