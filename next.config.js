/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "floridapoly.edu"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
