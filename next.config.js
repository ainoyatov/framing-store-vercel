/** @type {import('next').NextConfig} */

module.exports = {
    images: {
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
                pathname: '/s/files/**',
                hostname: 'cdn.shopify.com',
                port: ''
            }
        ]
    }
}




