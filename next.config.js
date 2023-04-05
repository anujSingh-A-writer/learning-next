/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages']  // Only run ESLint on the 'pages' directories during production builds (next build)
  }
}

module.exports = nextConfig
