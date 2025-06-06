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
                source: '/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/gallery',
                destination: '/',
                permanent: true,
            },
        ]
    }
}