/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Redirecionar / para /index.html para compatibilidade
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
