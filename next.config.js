/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    defaults = [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
    return defaults;
  },
}

module.exports = nextConfig
