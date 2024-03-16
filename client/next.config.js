/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ruwunsjxcuxmpzrtsuah.supabase.co/',
            port: '',
            pathname: '/storage/v1/object/public/reefers/**',
          },
        ],
      },
}

module.exports = nextConfig
