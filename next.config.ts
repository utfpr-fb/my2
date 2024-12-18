/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        allowedOrigins: [
          'localhost:3000', // localhost
          /^https:\/\/.*\.app\.github\.dev$/, // Codespaces
        ],
        allowedForwardedHosts: ['*'],
        bodySizeLimit: '2mb',
      },
    },
  }
  
  export default nextConfig
  
  