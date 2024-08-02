module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://reviewoso.eu-south-1.elasticbeanstalk.com/:path*' // Proxy to backend
      }
    ]
  }
}
