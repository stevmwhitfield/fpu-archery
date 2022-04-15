const STUDIO_REWRITE = {
  source: "/fpuarcherycms/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/admin/index.html",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "floridapoly.edu"],
  },
  rewrites: () => [STUDIO_REWRITE],
  reactStrictMode: true,
};

module.exports = nextConfig;
