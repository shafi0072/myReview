/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://18.102.51.122/:path*'
      }
    ];
  }
};

export default nextConfig;
