/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://reviewoso.eu-south-1.elasticbeanstalk.com/:path*'
      }
    ];
  }
};

export default nextConfig;
