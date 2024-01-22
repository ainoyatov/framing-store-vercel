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
                hostname: 'cdn.shopify.com',
                port: '',
                pathname: '/s/files/**'
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a*/**'
            }
        ]
    }
}




