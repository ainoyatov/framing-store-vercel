/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      unoptimized: true,
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '/photos/**'
        },
        {
          protocol: 'https',
          hostname: 'cdn.shopify.com',
          port: '',
          pathname: '/s/files/**'
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/a*/**'
        },
        {
          protocol: 'https',
          hostname: 's3.amazonaws.com',
          port: '',
        }
      ]
    },
  
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'artandcustomframes.com',
            },
          ],
          destination: 'https://www.artandcustomframes.com/:path*',
          permanent: true,
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'customframing.store',
            },
          ],
          destination: 'https://www.artandcustomframes.com/:path*',
          permanent: true,
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'www.customframing.store',
            },
          ],
          destination: 'https://www.artandcustomframes.com/:path*',
          permanent: true,
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'artframing.studio',
            },
          ],
          destination: 'https://www.artandcustomframes.com/:path*',
          permanent: true,
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'www.artframing.studio',
            },
          ],
          destination: 'https://www.artandcustomframes.com/:path*',
          permanent: true,
        },
      ];
    },
  };